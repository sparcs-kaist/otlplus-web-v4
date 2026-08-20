import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { trackEvent } from "@/libs/mixpanel"
import checkOverlap from "@/utils/timetable/checkOverlap"
import type { UserStatus } from "@/utils/zustand/useUserStore"

import { getLectureAddBlockReason } from "../../utils/isLectureAddDisabled"

const ActionsWrapper = styled(FlexWrapper)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`

const ActionButton = styled.button<{ selected?: boolean; blocked?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 9px 24px;
    border: 0;
    border-radius: 6px;
    color: ${({ theme, selected }) =>
        selected ? theme.colors.Highlight.default : theme.colors.Text.placeholder};
    background: ${({ theme, selected }) =>
        selected
            ? theme.colors.Background.Button.highlight
            : theme.colors.Background.Button.default};
    font: inherit;
    white-space: nowrap;
    cursor: ${({ blocked }) => (blocked ? "not-allowed" : "pointer")};
    opacity: ${({ blocked }) => (blocked ? 0.65 : 1)};

    &:hover:not(:disabled) {
        background: ${({ theme, selected }) =>
            selected
                ? theme.colors.Background.Button.highlightDark
                : theme.colors.Background.Button.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        cursor: default;
    }
`

interface LectureDetailActionsProps {
    readonly currentTimetableId?: number | null
    readonly lecture: Lecture
    readonly onAdd: (lecture: Lecture) => void
    readonly onClose?: () => void
    readonly onRemove?: (lectureId: number) => void
    readonly onToggleWishlist: (wish: boolean, lectureId: number) => void
    readonly status: UserStatus
    readonly timetableLectures: readonly Lecture[]
    readonly wishListIds: readonly number[]
}

export default function LectureDetailActions({
    currentTimetableId,
    lecture,
    onAdd,
    onClose,
    onRemove,
    onToggleWishlist,
    status,
    timetableLectures,
    wishListIds,
}: LectureDetailActionsProps) {
    const { t } = useTranslation()
    const isWishlisted = wishListIds.includes(lecture.id)
    const isInTimetable = timetableLectures.some((item) => item.id === lecture.id)
    const hasOverlap = timetableLectures.some((item) =>
        checkOverlap(item.classes, lecture.classes),
    )
    const addBlockReason = getLectureAddBlockReason({
        status,
        currentTimetableId: currentTimetableId ?? null,
        hasOverlap,
    })
    const blockMessage =
        addBlockReason === "myTimetable"
            ? t("timetable.myTimeTableLectureAddWarning")
            : addBlockReason === "overlap"
              ? t("timetable.addLectureConflict")
              : undefined

    const handleAdd = () => {
        if (blockMessage) {
            alert(blockMessage)
            return
        }
        if (addBlockReason === "loading") return

        onAdd(lecture)
        trackEvent("Add Lecture to Timetable", {
            lectureId: lecture.id,
            lectureCode: lecture.code,
            courseName: lecture.name,
            timetableId: currentTimetableId,
            source: "LectureDetail",
        })
        onClose?.()
    }

    return (
        <ActionsWrapper direction="row" gap={12} justify="flex-end">
            {status === "success" && (
                <ActionButton
                    type="button"
                    onClick={() => {
                        onToggleWishlist(isWishlisted, lecture.id)
                        onClose?.()
                    }}
                >
                    <Icon size={15}>
                        <FavoriteIcon />
                    </Icon>
                    <Typography type="NormalBold">
                        {isWishlisted
                            ? t("timetable.removeFromWishlist")
                            : t("timetable.addToWishlist")}
                    </Typography>
                </ActionButton>
            )}

            {isInTimetable && onRemove ? (
                <ActionButton
                    type="button"
                    selected
                    onClick={() => {
                        onRemove(lecture.id)
                        onClose?.()
                    }}
                >
                    <Icon size={15}>
                        <CloseIcon />
                    </Icon>
                    <Typography type="NormalBold">
                        {t("timetable.removeFromTimetable")}
                    </Typography>
                </ActionButton>
            ) : !isInTimetable ? (
                <ActionButton
                    type="button"
                    selected
                    aria-disabled={addBlockReason !== null}
                    blocked={addBlockReason !== null}
                    disabled={addBlockReason === "loading"}
                    title={blockMessage}
                    onClick={handleAdd}
                >
                    <Icon size={15}>
                        <AddIcon />
                    </Icon>
                    <Typography type="NormalBold">
                        {t("timetable.addToTimetable")}
                    </Typography>
                </ActionButton>
            ) : null}
        </ActionsWrapper>
    )
}
