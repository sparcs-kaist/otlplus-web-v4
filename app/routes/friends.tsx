import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import GroupIcon from "@mui/icons-material/Group"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import type { Friend } from "@/common/schemas/friend"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import {
    extractLectures,
    isCustomBlockItem,
    isLectureItem,
    toLectureItem,
    toTimetableItems,
} from "@/common/utils/timetableItems"
import FriendCustomBlockDetail from "@/features/friends/FriendCustomBlockDetail"
import FriendInviteModal from "@/features/friends/FriendInviteModal"
import FriendLectureDetail from "@/features/friends/FriendLectureDetail"
import FriendLoginButton from "@/features/friends/FriendLoginButton"
import {
    invalidateFriendQueries,
    removeFriendTimetableQueries,
} from "@/features/friends/friendQueries"
import FriendsListSection from "@/features/friends/sections/FriendsListSection"
import SharedTimetableSection from "@/features/friends/sections/SharedTimetableSection"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

export const meta = () => [
    { title: "친구 시간표 | OTL" },
    {
        name: "description",
        content: "OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.",
    },
]

const Page = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0 20px 12px;
    box-sizing: border-box;

    ${media.tablet} {
        padding: 0 8px 8px;
    }
`

const Layout = styled(FlexWrapper)`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    ${media.tablet} {
        flex-direction: column;
    }
`

const SidePanel = styled(Widget)`
    min-width: 0;
    min-height: 0;
    overflow: hidden;
`
const Sidebar = styled(FlexWrapper)`
    width: 300px;
    min-height: 0;
    flex-shrink: 0;
`
const TimetableColumn = styled.div`
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    flex: 1;

    ${media.tablet} {
        width: 100%;
        height: 100%;
    }
`

const DetailPanel = styled(Widget)`
    min-height: 0;
    min-width: 0;
    overflow: hidden;
`
const MobileOnly = styled.div`
    display: none;
    flex-shrink: 0;
    gap: 8px;
    margin-bottom: 8px;

    ${media.tablet} {
        display: flex;
    }
`

const MobileAction = styled.button`
    min-height: 44px;
    min-width: 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Background.Button.default};
    color: ${({ theme }) => theme.colors.Text.default};
    font: inherit;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

const LectureChoice = styled(MobileAction)`
    flex: none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
`

const LoginPage = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
`

function positiveInteger(value: string | null) {
    const number = Number(value)
    return Number.isSafeInteger(number) && number > 0 ? number : null
}

export default function FriendsPage() {
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const isTablet = useIsDevice("tablet")
    const isDesktop = useIsDevice("desktop")
    const { user, status } = useUserStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [selectedFriendId, setSelectedFriendId] = useState<number | null>(null)
    const [requestedYear, setRequestedYear] = useState<number | null>(null)
    const [requestedSemester, setRequestedSemester] = useState<SemesterEnum>(
        SemesterEnum.SPRING,
    )
    const hasRequestedTerm =
        requestedYear !== null &&
        Number.isInteger(requestedSemester) &&
        requestedSemester >= SemesterEnum.SPRING &&
        requestedSemester <= SemesterEnum.WINTER
    const year = hasRequestedTerm ? requestedYear : -1
    const semester = hasRequestedTerm ? requestedSemester : SemesterEnum.SPRING
    const sharedPath =
        selectedFriendId === null
            ? "/timetables/shared"
            : (`/friends/${selectedFriendId}/timetables/shared` as const)
    const { query: semestersQuery } = useAPI("GET", `${sharedPath}/semesters`, {
        enabled: status === "success",
    })
    const sharedSemesters = useMemo(
        () =>
            [...(semestersQuery.data?.semesters ?? [])].sort(
                (a, b) => b.year - a.year || b.semester - a.semester,
            ),
        [semestersQuery.data],
    )
    const hasSharedSemester = sharedSemesters.some(
        (term) => term.year === year && term.semester === semester,
    )
    const [hoveredItem, setHoveredItem] = useState<TimetableItem | null>(null)
    const [selectedItem, setSelectedItem] = useState<TimetableItem | null>(null)
    const hoveredLecture =
        hoveredItem && isLectureItem(hoveredItem) ? hoveredItem.data : null
    const hoveredCustomBlock =
        hoveredItem && isCustomBlockItem(hoveredItem) ? hoveredItem.data : null
    const selectedLecture =
        selectedItem && isLectureItem(selectedItem) ? selectedItem.data : null
    const selectedCustomBlock =
        selectedItem && isCustomBlockItem(selectedItem) ? selectedItem.data : null
    const activeCustomBlock = selectedCustomBlock || hoveredCustomBlock
    const activeLecture = selectedLecture || hoveredLecture
    const [friendListOpen, setFriendListOpen] = useState(false)
    const [pageVisible, setPageVisible] = useState(
        () => typeof document === "undefined" || document.visibilityState !== "hidden",
    )
    const [scheduleFresh, setScheduleFresh] = useState(false)
    const [detailOpen, setDetailOpen] = useState(false)
    const detailActionRef = useRef<HTMLButtonElement>(null)
    const [inviteOpen, setInviteOpen] = useState(false)
    const [deletingFriend, setDeletingFriend] = useState<Friend | null>(null)
    const [addedFriendName, setAddedFriendName] = useState<string | null>(
        (location.state as { friendAddedName?: string } | null)?.friendAddedName ?? null,
    )

    const handleSelectFriend = useCallback(
        (friendId: number | null) => {
            setFriendListOpen(false)
            setSelectedFriendId(friendId)
            setSelectedItem(null)
        },
        [setSelectedFriendId, setSelectedItem],
    )

    const handleSelectSemester = useCallback(
        (nextYear: number, nextSemester: SemesterEnum) => {
            setRequestedYear(nextYear)
            setRequestedSemester(nextSemester)
            setSelectedItem(null)
        },
        [setRequestedYear, setRequestedSemester, setSelectedItem],
    )

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedItem(null)
            } else if (e.key === "[" || e.key === "]") {
                const currentIndex = sharedSemesters.findIndex(
                    (term) => term.year === year && term.semester === semester,
                )

                if (currentIndex === -1) return
                const nextIndex =
                    e.key === "["
                        ? Math.max(0, currentIndex - 1)
                        : Math.min(sharedSemesters.length - 1, currentIndex + 1)
                if (nextIndex !== -1 && sharedSemesters[nextIndex]) {
                    handleSelectSemester(
                        sharedSemesters[nextIndex].year,
                        sharedSemesters[nextIndex].semester,
                    )
                }
            }
        },
        [handleSelectSemester, sharedSemesters, year, semester],
    )

    useEffect(() => {
        if (
            !searchParams.has("year") &&
            !searchParams.has("semester") &&
            !searchParams.has("friendId")
        )
            return
        setRequestedYear(positiveInteger(searchParams.get("year")))
        setRequestedSemester(Number(searchParams.get("semester")))
        setSelectedFriendId(positiveInteger(searchParams.get("friendId")))

        const remainingParams = new URLSearchParams(searchParams)
        remainingParams.delete("year")
        remainingParams.delete("semester")
        remainingParams.delete("friendId")
        setSearchParams(remainingParams, { replace: true })
    }, [searchParams, setSearchParams])

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleKeyDown])

    useEffect(() => {
        if (!semestersQuery.isSuccess || hasSharedSemester) return

        const latest = sharedSemesters[0]
        if (latest) handleSelectSemester(latest.year, latest.semester)
    }, [
        semestersQuery.isSuccess,
        hasSharedSemester,
        sharedSemesters,
        handleSelectSemester,
    ])

    useEffect(() => {
        if (isTablet && detailOpen) detailActionRef.current?.focus()
    }, [isTablet, detailOpen, selectedItem])

    const friendListVisible = !isTablet || friendListOpen
    const { query: friendsQuery } = useAPI("GET", "/friends", {
        enabled: status === "success",
        refetchInterval:
            status === "success" && friendListVisible && pageVisible ? 60_000 : false,
        refetchOnWindowFocus: friendListVisible,
    })

    useEffect(() => {
        const onVisibilityChange = () =>
            setPageVisible(document.visibilityState !== "hidden")
        const onFocus = () => {
            if (
                status === "success" &&
                friendListVisible &&
                document.visibilityState !== "hidden"
            ) {
                void friendsQuery.refetch({ cancelRefetch: false })
            }
        }
        document.addEventListener("visibilitychange", onVisibilityChange)
        window.addEventListener("focus", onFocus)
        return () => {
            document.removeEventListener("visibilitychange", onVisibilityChange)
            window.removeEventListener("focus", onFocus)
        }
    }, [status, friendListVisible, friendsQuery.refetch])

    useEffect(() => {
        if (
            status === "success" &&
            isTablet &&
            friendListOpen &&
            document.visibilityState !== "hidden"
        ) {
            void friendsQuery.refetch({ cancelRefetch: false })
        }
    }, [status, isTablet, friendListOpen, friendsQuery.refetch])

    useEffect(() => {
        const age = Date.now() - Date.parse(friendsQuery.data?.checkedAt ?? "")
        const fresh = Number.isFinite(age) && age >= -60_000 && age < 120_000
        setScheduleFresh(fresh)
        if (!fresh) return
        const timeout = window.setTimeout(
            () => setScheduleFresh(false),
            120_000 - Math.max(0, age),
        )
        return () => window.clearTimeout(timeout)
    }, [friendsQuery.data?.checkedAt])

    const showSchedule = scheduleFresh && friendsQuery.isSuccess && !friendsQuery.isError
    const selectedFriend = friendsQuery.data?.friends.find(
        ({ id }) => id === selectedFriendId,
    )

    const [syncedTerm, setSyncedTerm] = useState<{
        year: number
        semester: SemesterEnum
    } | null>(null)
    // useAPI stores GET params separately; wait until both queries use this term.
    const paramsReady = syncedTerm?.year === year && syncedTerm.semester === semester
    const canLoadTimetable = status === "success" && hasSharedSemester && paramsReady

    const { query: ownShared, setParams: setOwnSharedParams } = useAPI(
        "GET",
        "/timetables/shared",
        {
            enabled: canLoadTimetable && selectedFriendId !== null,
        },
    )
    const { query: timetableQuery, setParams: setTimetableParams } = useAPI(
        "GET",
        sharedPath,
        {
            enabled: canLoadTimetable,
        },
    )

    const { mutation: deleteMutation, requestFunction: deleteFriend } = useAPI(
        "DELETE",
        `/friends/${deletingFriend?.id ?? 0}`,
        {
            onSuccess: () => {
                if (deletingFriend?.id === selectedFriendId) handleSelectFriend(null)
                if (deletingFriend)
                    removeFriendTimetableQueries(queryClient, deletingFriend.id)
                setDeletingFriend(null)
                invalidateFriendQueries(queryClient)
            },
        },
    )

    useEffect(() => {
        if (year < 0) return
        const params = { year, semester }
        setOwnSharedParams(params)
        setTimetableParams(params)
        setSyncedTerm(params)
    }, [year, semester])

    useEffect(() => {
        setSelectedItem(null)
        setDetailOpen(false)
        setFriendListOpen(false)
    }, [selectedFriendId, year, semester, location.key])

    useEffect(() => {
        if (
            selectedFriendId !== null &&
            !friendsQuery.isFetching &&
            friendsQuery.isSuccess &&
            friendsQuery.data &&
            !friendsQuery.data.friends.some(({ id }) => id === selectedFriendId)
        ) {
            handleSelectFriend(null)
        }
    }, [
        friendsQuery.data,
        friendsQuery.isFetching,
        friendsQuery.isSuccess,
        selectedFriendId,
        handleSelectFriend,
    ])

    const hasLoadError =
        semestersQuery.isError ||
        (hasSharedSemester && paramsReady && timetableQuery.isError)
    const isLoadingTimetable =
        !hasLoadError &&
        (semestersQuery.isPending ||
            (sharedSemesters.length > 0 &&
                (!hasSharedSemester || !paramsReady || timetableQuery.isPending)))
    const noSharedTimetables = semestersQuery.isSuccess && sharedSemesters.length === 0
    const timetableItems = useMemo(
        () =>
            !hasSharedSemester || !paramsReady || hasLoadError
                ? []
                : toTimetableItems(timetableQuery.data),
        [hasSharedSemester, paramsReady, hasLoadError, timetableQuery.data],
    )
    const lectures = useMemo(() => extractLectures(timetableItems), [timetableItems])
    const overlappedLectureIds = useMemo(() => {
        if (selectedFriendId === null) return []
        const ownLectureIds = new Set(
            (ownShared.isError ? [] : (ownShared.data?.lectures ?? [])).map(
                (lecture) => lecture.id,
            ),
        )
        return lectures
            .filter((lecture) => ownLectureIds.has(lecture.id))
            .map((lecture) => lecture.id)
    }, [selectedFriendId, ownShared.data, ownShared.isError, lectures])
    const semesterName = (termYear: number, termSemester: SemesterEnum) =>
        t("friends.semesterLabel", {
            year: termYear,
            semester: semesterToString(termSemester),
        })
    const timetableName =
        timetableQuery.data?.timetableType === "scholar"
            ? t("friends.actualTimetable")
            : timetableQuery.data?.name || semesterName(year, semester)
    const timetableTabs = useMemo(
        () =>
            sharedSemesters.map((term) => ({
                key: `${term.year}-${term.semester}`,
                name: t("friends.semesterLabel", {
                    year: term.year,
                    semester: semesterToString(term.semester),
                }),
                selected: term.year === year && term.semester === semester,
                onSelect: () => handleSelectSemester(term.year, term.semester),
            })),
        [sharedSemesters, year, semester, handleSelectSemester, t],
    )

    const onHoverItem = useCallback(
        (item: TimetableItem) => {
            setHoveredItem(item)
        },
        [setHoveredItem],
    )

    const onLeaveItem = useCallback(() => {
        setHoveredItem(null)
    }, [setHoveredItem])

    const closeAddedModal = () => {
        setAddedFriendName(null)
        navigate(location.pathname + location.search, { replace: true, state: null })
    }

    if (status !== "success") {
        return (
            <LoginPage direction="column" gap={16} align="center" justify="center">
                {status === "idle" && (
                    <>
                        <Typography type="Big" color="Text.placeholder">
                            {t("friends.loginRequired")}
                        </Typography>
                        <FriendLoginButton />
                    </>
                )}
            </LoginPage>
        )
    }

    const detail = activeCustomBlock ? (
        <FriendCustomBlockDetail
            block={activeCustomBlock}
            timetableName={timetableName}
            onClose={() => setSelectedItem(null)}
        />
    ) : activeLecture ? (
        <>
            {isTablet && (
                <LectureChoice
                    ref={detailActionRef}
                    type="button"
                    onClick={() => setSelectedItem(null)}
                >
                    {t("friends.chooseAnotherLecture")}
                </LectureChoice>
            )}
            <FriendLectureDetail
                lecture={activeLecture}
                year={year}
                semester={semester}
            />
        </>
    ) : isTablet ? (
        <FlexWrapper direction="column" gap={8} align="stretch">
            <Typography type="Normal" color="Text.default">
                {t("friends.chooseLecture")}
            </Typography>
            {isLoadingTimetable ? (
                <Typography role="status">{t("friends.loadingLectures")}</Typography>
            ) : hasLoadError ? (
                <Typography role="alert">{t("friends.loadError")}</Typography>
            ) : noSharedTimetables ? (
                <Typography>{t("friends.noSharedTimetables")}</Typography>
            ) : lectures.length === 0 ? (
                <Typography>{t("friends.noLectures")}</Typography>
            ) : (
                lectures.map((lecture, index) => (
                    <LectureChoice
                        key={lecture.id}
                        ref={index === 0 ? detailActionRef : undefined}
                        type="button"
                        onClick={() => setSelectedItem(toLectureItem(lecture))}
                    >
                        {lecture.name}
                        {lecture.subtitle} {lecture.classNo && `(${lecture.classNo})`}
                    </LectureChoice>
                ))
            )}
        </FlexWrapper>
    ) : (
        <FlexWrapper
            direction="column"
            gap={8}
            align="center"
            justify="center"
            flex="1 1 0"
        >
            <Typography type="NormalMedium" color="Text.light">
                {t("friends.chooseLecture")}
            </Typography>
        </FlexWrapper>
    )

    return (
        <Page direction="column" gap={0}>
            <Layout direction="row" gap={12} align="stretch">
                {!isTablet && (
                    <Sidebar direction="column" gap={8} align="stretch">
                        <SidePanel
                            direction="column"
                            gap={0}
                            padding="16px"
                            align="stretch"
                            flex="1 1 0"
                        >
                            <FriendsListSection
                                friends={friendsQuery.data?.friends ?? []}
                                showSchedule={showSchedule}
                                selectedFriendId={selectedFriendId}
                                onSelect={handleSelectFriend}
                                onDelete={setDeletingFriend}
                                onInvite={() => setInviteOpen(true)}
                            />
                        </SidePanel>
                        {isDesktop && (
                            <DetailPanel
                                direction="column"
                                gap={0}
                                padding="16px"
                                align="stretch"
                                flex="1 1 0"
                            >
                                {detail}
                            </DetailPanel>
                        )}
                    </Sidebar>
                )}
                <TimetableColumn>
                    <MobileOnly>
                        <MobileAction
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded={friendListOpen}
                            onClick={() => setFriendListOpen(true)}
                        >
                            <Icon size={18}>
                                <GroupIcon />
                            </Icon>
                            {t("friends.selectFriend")}
                        </MobileAction>
                        <MobileAction
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded={detailOpen}
                            onClick={() => {
                                if (selectedCustomBlock) setSelectedItem(null)
                                setDetailOpen(true)
                            }}
                        >
                            {t("friends.viewOverlaps")}
                        </MobileAction>
                    </MobileOnly>
                    <SharedTimetableSection
                        tabs={timetableTabs}
                        tabListLabel={selectedFriend?.name ?? t("friends.myTimetable")}
                        noSharedTimetables={noSharedTimetables}
                        isLoading={isLoadingTimetable}
                        timetableName={
                            hasSharedSemester &&
                            paramsReady &&
                            timetableQuery.isSuccess &&
                            !hasLoadError
                                ? timetableName
                                : null
                        }
                        hasLoadError={hasLoadError}
                        timetableItems={timetableItems}
                        overlappedLectureIds={overlappedLectureIds}
                        selectedItem={selectedItem}
                        onSelectItem={(item) => {
                            setSelectedItem((prev) =>
                                prev?.kind === item?.kind && prev?.data === item?.data
                                    ? null
                                    : item,
                            )
                            if (isTablet) setDetailOpen(true)
                        }}
                        onHoverItem={(item) => {
                            onHoverItem(item)
                        }}
                        onLeaveItem={() => {
                            onLeaveItem()
                        }}
                    />
                </TimetableColumn>
                {!isTablet && !isDesktop && (
                    <DetailPanel
                        width={454}
                        direction="column"
                        gap={0}
                        padding="16px"
                        align="stretch"
                    >
                        {detail}
                    </DetailPanel>
                )}
            </Layout>

            <Modal
                isOpen={isTablet && friendListOpen}
                onClose={() => setFriendListOpen(false)}
                title={t("friends.title")}
                fullScreen
            >
                <FriendsListSection
                    friends={friendsQuery.data?.friends ?? []}
                    showSchedule={showSchedule}
                    selectedFriendId={selectedFriendId}
                    onSelect={handleSelectFriend}
                    onDelete={(friend) => {
                        setFriendListOpen(false)
                        setDeletingFriend(friend)
                    }}
                    onInvite={() => {
                        setFriendListOpen(false)
                        setInviteOpen(true)
                    }}
                />
            </Modal>
            <Modal
                isOpen={isTablet && detailOpen}
                onClose={() => setDetailOpen(false)}
                title={t(
                    selectedCustomBlock
                        ? "friends.customBlockDetail"
                        : "friends.viewOverlaps",
                )}
                fullScreen
            >
                {selectedCustomBlock ? (
                    <FriendCustomBlockDetail
                        block={selectedCustomBlock}
                        timetableName={timetableName}
                    />
                ) : selectedLecture ? (
                    <>
                        <LectureChoice
                            ref={detailActionRef}
                            type="button"
                            onClick={() => setSelectedItem(null)}
                        >
                            {t("friends.chooseAnotherLecture")}
                        </LectureChoice>
                        <FriendLectureDetail
                            lecture={selectedLecture}
                            year={year}
                            semester={semester}
                        />
                    </>
                ) : (
                    <FlexWrapper direction="column" gap={8} align="stretch">
                        <Typography type="Normal" color="Text.default">
                            {t("friends.chooseLecture")}
                        </Typography>
                        {isLoadingTimetable ? (
                            <Typography role="status">
                                {t("friends.loadingLectures")}
                            </Typography>
                        ) : hasLoadError ? (
                            <Typography role="alert">{t("friends.loadError")}</Typography>
                        ) : noSharedTimetables ? (
                            <Typography>{t("friends.noSharedTimetables")}</Typography>
                        ) : lectures.length === 0 ? (
                            <Typography>{t("friends.noLectures")}</Typography>
                        ) : (
                            lectures.map((lecture, index) => (
                                <LectureChoice
                                    key={lecture.id}
                                    ref={index === 0 ? detailActionRef : undefined}
                                    type="button"
                                    onClick={() =>
                                        setSelectedItem(toLectureItem(lecture))
                                    }
                                >
                                    {lecture.name}
                                    {lecture.subtitle}{" "}
                                    {lecture.classNo && `(${lecture.classNo})`}
                                </LectureChoice>
                            ))
                        )}
                    </FlexWrapper>
                )}
            </Modal>
            <FriendInviteModal
                isOpen={inviteOpen}
                onClose={() => setInviteOpen(false)}
                userName={user?.name ?? ""}
            />
            <Modal
                isOpen={deletingFriend !== null}
                onClose={() => setDeletingFriend(null)}
                title={t("friends.deleteTitle")}
                fullScreen={isTablet}
            >
                <Typography type="Normal" color="Text.default">
                    {t("friends.deleteConfirm", { name: deletingFriend?.name })}
                </Typography>
                {deleteMutation.isError && (
                    <Typography type="Small" color="Highlight.default" role="alert">
                        {t("friends.updateError")}
                    </Typography>
                )}
                <FlexWrapper direction="row" gap={8} justify="flex-end">
                    <Button onClick={() => setDeletingFriend(null)}>
                        {t("friends.cancel")}
                    </Button>
                    <Button
                        type={deleteMutation.isPending ? "disabled" : "highlighted"}
                        onClick={() => deleteFriend({})}
                    >
                        {t("friends.delete")}
                    </Button>
                </FlexWrapper>
            </Modal>
            <Modal
                isOpen={addedFriendName !== null}
                onClose={closeAddedModal}
                title={t("friends.title")}
                fullScreen={isTablet}
            >
                <Typography type="Normal" color="Text.default">
                    {t("friends.friendAdded", { name: addedFriendName })}
                </Typography>
                <FlexWrapper direction="row" gap={0} justify="flex-end">
                    <Button type="highlighted" onClick={closeAddedModal}>
                        {t("friends.viewTimetable")}
                    </Button>
                </FlexWrapper>
            </Modal>
        </Page>
    )
}
