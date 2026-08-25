# Graduation Planner Roadmap — execution-ready

Verified 2026-08 against production APIs (`/api/v2/department-options`, `/api/tracks`), legacy
seed CSV (`tests/fixtures/data/subject_department.csv`), and KAIST official sources.

## Verified data facts

| Fact                      | Value                                                                                     | Source                       |
| ------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------- |
| Production departments    | 110                                                                                       | `/api/v2/department-options` |
| Major-track coverage      | exactly 17 학과 (matches 새내기과정학부 공식 표)                                          | `/api/tracks`                |
| Missing graduation tracks | 반도체시스템공학과(SS, 2022 학부 신설), AI미래학과(FX, AI단과대)                          | dept present, track absent   |
| Stale tracks              | 15/17 majors are single `2016→2100` open-ended rows; only 산디/전산 have `2023` refreshes | `/api/tracks`                |
| General tracks            | only 3 sets (2014–17, 2018+, 2020+) — recent 교양 개편 반영 여부 미확인                   | `/api/tracks`                |
| Additional tracks         | 101 rows available, planner consumes `additional_tracks` per planner only                 | `/api/tracks`, schema        |

Bulletin 원문(bulletin.kaist.ac.kr)은 SSO 게이트. 2026 신입생 안내책자 PDF(64p)는 이미지 기반 —
수치 교차검증은 OCR 사이클 필요.

## P0 — data integrity

1. **SS/FX 트랙 시드 추가** — backend repo(`sparcs-kaist/otlplus`) seed + migration. Frontend
   unblocks automatically once tracks exist (TrackSettings lists by department id).
2. **요람 diff 파이프라인** — scheduled scraper for bulletin pages per department → JSON diff vs
   `tracks` dump → PR to backend seed. Store snapshot under versioned key.
3. **general track 2023+ 감사** — compare current 교양 이수구분 필터 세트 vs `/api/v2/subject_options`
   (or equivalent) for 2023+ entrants; fix seed if drift.

## P1 — frontend (existing APIs only)

4. **Additional-track composition UI** — `TrackSettings.tsx` already persists
   `additional_tracks`; add picker over the 101-row catalog grouped by department, with
   double-counting rules (부전공 중복 제외) encoded in `domain/summary.ts`.
5. **Term-end confirm wizard** — walk `future_items` of past semesters → bulk
   `updateItem(item, { semester })`/TAKEN conversion through existing controller actions;
   entry point banner on `PlannerPage` when `today > semester end`.
6. **Requirement drill-down** — clicking a `ProgressCard` in `PlannerSummary.tsx` opens
   `CourseSearchPanel` prefilled (`type_en` mapped from category key) reusing the lifted
   year/semester state in `routes/planner.tsx`.
7. **v3 curriculum roadmap view** — year×semester grid placing planned items; pure component
   over `SemesterGrid` data shape.

## P2 — advanced

8. **Scenario diff** — leverage copy-planner (`onCreate(true)`) then diff two planners'
   summaries side-by-side.
9. **Bulletin-change banner** — hash `/api/tracks` payload into localStorage; when hash changes,
   show dismissible notice via the flags/notice pattern (`StatusNotice`).
10. **Backend adjudication** — move requirement evaluation behind an endpoint; keep client math
    as advisory (matches current disclaimer copy).

## Execution notes

- All P1 items are testable with the existing dual-server Playwright harness
  (`dev:flags-on`, seeded `localStorage` fixture, mocked `/api/tracks` + `/api/courses`).
- Backend seeds (P0-1/P0-2) ship as PRs to `sparcs-kaist/otlplus`; frontend needs no flag gate.
- Keep the planner behind `planner-enabled` until P0 lands in production.
