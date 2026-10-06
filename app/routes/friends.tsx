import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import EventNoteIcon from "@mui/icons-material/EventNote"
import GroupIcon from "@mui/icons-material/Group"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import StyledDivider from "@/common/components/StyledDivider"
import TextInput from "@/common/components/search/TextInput"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Friend, FriendListItem } from "@/common/schemas/friend"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import FriendCustomBlockDetail from "@/features/friends/FriendCustomBlockDetail"
import FriendInviteModal from "@/features/friends/FriendInviteModal"
import FriendLectureDetail from "@/features/friends/FriendLectureDetail"
import FriendLoginButton from "@/features/friends/FriendLoginButton"
import {
    invalidateFriendQueries,
    removeFriendTimetableQueries,
} from "@/features/friends/friendQueries"
import SemesterButton from "@/features/timetable/sections/TabsRowSubSection/SemesterButton"
import TabButton from "@/features/timetable/sections/TabsRowSubSection/TabButton"
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

const Page = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0 20px 12px;
    box-sizing: border-box;

    ${media.tablet} {
        padding: 0 8px 8px;
    }
`

const Layout = styled.div`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 288px minmax(0, 1fr) 454px;
    gap: 12px;

    ${media.laptop} {
        grid-template-columns: 220px minmax(0, 1fr) 300px;
    }

    ${media.tablet} {
        display: block;
    }
`

const Panel = styled.div`
    min-width: 0;
    min-height: 0;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 12px;
`

const SidePanel = styled(Panel)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;

    ${media.tablet} {
        display: none;
    }
`

const TimetableColumn = styled.div`
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;

    ${media.tablet} {
        width: 100%;
        height: 100%;
    }
`

const TimetablePanel = styled(Panel)`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;
    border-top-left-radius: 0;

    ${media.tablet} {
        padding: 8px;
    }
`

const DetailPanel = styled(Panel)`
    padding: 16px;
    overflow: hidden;

    ${media.tablet} {
        display: none;
    }
`

const SidebarHeading = styled(Typography)`
    align-self: center;
`

const SearchBox = styled.label`
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.divider};
    background: ${({ theme }) => theme.colors.Background.Section.default};
    color: ${({ theme }) => theme.colors.Highlight.default};
`

const SearchInput = styled(TextInput)`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    padding: 0;
    font: inherit;
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

const FriendList = styled.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const FriendListLayout = styled.div`
    min-height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const FriendRowButton = styled.div<{ $selected: boolean }>`
    width: 100%;
    height: 46px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ $selected, theme }) =>
        $selected
            ? theme.colors.Background.Block.dark
            : theme.colors.Background.Block.default};

    &:hover {
        background: ${({ theme }) => theme.colors.Background.Block.dark};
    }
`

const FriendName = styled(Typography)`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    line-height: 14px;
`

const MyTimetableButton = FriendRowButton.withComponent("button")

const ScheduleIcon = styled(Icon)`
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.Highlight.default};
`

const RowIconButton = styled.button`
    width: 26px;
    height: 32px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.Text.placeholder};
    background: transparent;

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }

    &:disabled {
        cursor: wait;
    }
`

const FriendAsset = styled.img`
    display: block;
    flex-shrink: 0;
`

const InviteButton = styled.button`
    height: 48px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.Background.Button.highlight};
    color: ${({ theme }) => theme.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
    font-size: ${({ theme }) => theme.fonts.NormalMedium.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.NormalMedium.fontWeight};
`

const TimetableHeader = styled(FlexWrapper)`
    width: 100%;
    flex-shrink: 0;
    height: 34px;
    min-width: 0;
`

const Tabs = styled.div`
    min-width: 0;
    flex: 1;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
`

const TimetableTab = styled(TabButton)`
    height: 34px;
    flex-shrink: 0;
    padding: 8px 12px;
`

const TimetableGrid = styled.div`
    min-height: 0;
    flex: 1;
    display: flex;
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

const Empty = styled(FlexWrapper)`
    padding: 24px 16px;
    text-align: center;
`

const LoginPage = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
`

interface FriendRowProps {
    friend: FriendListItem
    showSchedule: boolean
    selected: boolean
    onSelect: () => void
    onDelete: () => void
}

function FriendRow({
    friend,
    showSchedule,
    selected,
    onSelect,
    onDelete,
}: FriendRowProps) {
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const { mutation, requestFunction } = useAPI(
        "PATCH",
        `/friends/${friend.id}/favorite`,
        {
            onSuccess: () => invalidateFriendQueries(queryClient),
        },
    )

    return (
        <FriendRowButton
            $selected={selected}
            role="button"
            tabIndex={0}
            onClick={onSelect}
            onKeyDown={(event) => {
                if (event.currentTarget !== event.target) return
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    onSelect()
                }
            }}
        >
            <FriendName type="NormalBold">{friend.name}</FriendName>
            {showSchedule && friend.hasScheduleNow === true && (
                <ScheduleIcon
                    size={18}
                    role="img"
                    aria-label={t("friends.scheduleNow")}
                    title={t("friends.scheduleNow")}
                >
                    <EventNoteIcon />
                </ScheduleIcon>
            )}
            {selected && (
                <RowIconButton
                    aria-label={t("friends.delete")}
                    onClick={(event) => {
                        event.stopPropagation()
                        onDelete()
                    }}
                >
                    <FriendAsset src="/images/friends/design/delete.svg" alt="" />
                </RowIconButton>
            )}
            <RowIconButton
                aria-label={t("friends.favorite")}
                aria-pressed={friend.isFavorite}
                disabled={mutation.isPending}
                onClick={(event) => {
                    event.stopPropagation()
                    requestFunction({ isFavorite: !friend.isFavorite })
                }}
            >
                <FriendAsset
                    src={`/images/friends/design/star-${friend.isFavorite ? "filled" : "empty"}.svg`}
                    alt=""
                />
            </RowIconButton>
        </FriendRowButton>
    )
}

interface FriendListContentProps {
    friends: FriendListItem[]
    showSchedule: boolean
    selectedFriendId: number | null
    onSelect: (id: number | null) => void
    onDelete: (friend: Friend) => void
    onInvite: () => void
}

function FriendListContent({
    friends,
    showSchedule,
    selectedFriendId,
    onSelect,
    onDelete,
    onInvite,
}: FriendListContentProps) {
    const { t } = useTranslation()
    const [search, setSearch] = useState("")
    const filtered = useMemo(
        () =>
            friends.filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase()),
            ),
        [friends, search],
    )

    return (
        <FriendListLayout>
            <SidebarHeading type="Big" color="Text.default" role="heading" aria-level={2}>
                {t("friends.friendList", { count: friends.length })}
            </SidebarHeading>
            <StyledDivider />
            <SearchBox>
                <FriendAsset src="/images/friends/design/search.svg" alt="" />
                <SearchInput
                    value={search}
                    handleChange={setSearch}
                    placeholder={t("friends.searchPlaceholder")}
                    aria-label={t("friends.searchPlaceholder")}
                />
            </SearchBox>
            <FriendList>
                <MyTimetableButton
                    type="button"
                    $selected={selectedFriendId === null}
                    aria-pressed={selectedFriendId === null}
                    onClick={() => onSelect(null)}
                >
                    <FriendName type="NormalBold">{t("friends.myTimetable")}</FriendName>
                </MyTimetableButton>
                {filtered.map((friend) => (
                    <FriendRow
                        key={friend.id}
                        friend={friend}
                        showSchedule={showSchedule}
                        selected={selectedFriendId === friend.id}
                        onSelect={() =>
                            onSelect(selectedFriendId === friend.id ? null : friend.id)
                        }
                        onDelete={() => onDelete(friend)}
                    />
                ))}
                {!filtered.length && (
                    <Empty direction="column" gap={0} align="center">
                        <Typography type="Small" color="Text.disable">
                            {t("friends.noFriends")}
                        </Typography>
                    </Empty>
                )}
            </FriendList>
            <InviteButton onClick={onInvite}>{t("friends.invite")}</InviteButton>
        </FriendListLayout>
    )
}

function positiveInteger(value: string | null) {
    const number = Number(value)
    return Number.isSafeInteger(number) && number > 0 ? number : null
}

export default function FriendsPage() {
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const isTablet = useIsDevice("tablet")
    const { user, status } = useUserStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    const selectedFriendId = positiveInteger(searchParams.get("friendId"))
    const requestedYear = positiveInteger(searchParams.get("year"))
    const requestedSemester = Number(searchParams.get("semester"))
    const hasRequestedTerm =
        requestedYear !== null &&
        Number.isInteger(requestedSemester) &&
        requestedSemester >= SemesterEnum.SPRING &&
        requestedSemester <= SemesterEnum.WINTER
    const year = hasRequestedTerm ? requestedYear : -1
    const semester = hasRequestedTerm ? requestedSemester : SemesterEnum.SPRING
    const currentTimetableId = hasRequestedTerm
        ? positiveInteger(searchParams.get("timetableId"))
        : null
    const [selectedItem, setSelectedItem] = useState<TimetableItem | null>(null)
    const selectedLecture =
        selectedItem?.kind === TimetableItemKind.LECTURE ? selectedItem.data : null
    const selectedCustomBlock =
        selectedItem?.kind === TimetableItemKind.CUSTOM ? selectedItem.data : null
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
            setSearchParams((previous) => {
                const params = new URLSearchParams(previous)
                if (friendId === null) params.delete("friendId")
                else params.set("friendId", String(friendId))
                params.delete("timetableId")
                return params
            })
        },
        [setSearchParams],
    )

    const handleSelectTimetable = (timetableId: number | null) => {
        const params = new URLSearchParams(searchParams)
        if (timetableId === null) params.delete("timetableId")
        else params.set("timetableId", String(timetableId))
        setSearchParams(params)
    }

    const handleSelectSemester = (nextYear: number, nextSemester: SemesterEnum) => {
        const params = new URLSearchParams(searchParams)
        params.set("year", String(nextYear))
        params.set("semester", String(nextSemester))
        params.delete("timetableId")
        setSearchParams(params, { replace: year < 0 })
    }

    useEffect(() => {
        if (isTablet && detailOpen) detailActionRef.current?.focus()
    }, [isTablet, detailOpen, selectedItem])

    const friendListVisible = !isTablet || friendListOpen
    const { query: friendsQuery } = useAPI("GET", "/friends", {
        enabled: status === "success",
        staleTime: 0,
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

    const { query: ownTimetables, setParams: setOwnTimetableParams } = useAPI(
        "GET",
        "/timetables",
        { enabled: status === "success" && selectedFriendId === null },
    )
    const { query: ownActual, setParams: setOwnActualParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        { enabled: status === "success" },
    )
    // The existing v1 list includes every saved timetable's lecture IDs in one read.
    const { query: ownAllSaved, setParams: setOwnAllSavedParams } = useAPI(
        "GET",
        `/users/${user?.id ?? 0}/timetables`,
        {
            apiPrefix: "/api",
            enabled: status === "success" && selectedFriendId !== null,
            staleTime: 0,
        },
    )
    const { query: ownSaved } = useAPI("GET", `/timetables/${currentTimetableId ?? 0}`, {
        enabled:
            status === "success" &&
            selectedFriendId === null &&
            currentTimetableId !== null,
    })

    const { query: friendTimetables, setParams: setFriendTimetableParams } = useAPI(
        "GET",
        `/friends/${selectedFriendId ?? 0}/timetables`,
        {
            enabled: status === "success" && selectedFriendId !== null,
            staleTime: 0,
            gcTime: 0,
        },
    )
    const { query: friendActual, setParams: setFriendActualParams } = useAPI(
        "GET",
        `/friends/${selectedFriendId ?? 0}/timetables/my-timetable`,
        {
            enabled: status === "success" && selectedFriendId !== null,
            staleTime: 0,
            gcTime: 0,
        },
    )
    const { query: friendSaved } = useAPI(
        "GET",
        `/friends/${selectedFriendId ?? 0}/timetables/${currentTimetableId ?? 0}`,
        {
            enabled:
                status === "success" &&
                selectedFriendId !== null &&
                currentTimetableId !== null,
            staleTime: 0,
            gcTime: 0,
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
        setOwnActualParams(params)
        setOwnAllSavedParams(params)
        if (selectedFriendId === null) {
            setOwnTimetableParams(params)
        } else {
            setFriendTimetableParams(params)
            setFriendActualParams(params)
        }
    }, [year, semester, selectedFriendId])

    useEffect(() => {
        setSelectedItem(null)
        setDetailOpen(false)
        setFriendListOpen(false)
    }, [selectedFriendId, year, semester, currentTimetableId, location.key])

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

    const timetables =
        selectedFriendId === null
            ? (ownTimetables.data?.timetables ?? [])
            : friendTimetables.isError
              ? []
              : (friendTimetables.data?.timetables ?? [])
    const timetableQuery =
        currentTimetableId === null
            ? selectedFriendId === null
                ? ownActual
                : friendActual
            : selectedFriendId === null
              ? ownSaved
              : friendSaved
    const timetableItems = timetableQuery.isError
        ? []
        : (timetableQuery.data?.timetableItems ?? [])
    const lectures = timetableItems.flatMap((item) =>
        item.kind === TimetableItemKind.LECTURE ? [item.data] : [],
    )
    const overlappedLectureIds = useMemo(() => {
        if (selectedFriendId === null) return []
        const ownLectureIds = new Set([
            ...(ownAllSaved.isError ? [] : (ownAllSaved.data ?? [])).flatMap(
                (timetable) => timetable.lectures?.map(({ id }) => id) ?? [],
            ),
            ...(ownActual.isError ? [] : (ownActual.data?.timetableItems ?? [])).flatMap(
                (item) => (item.kind === TimetableItemKind.LECTURE ? [item.data.id] : []),
            ),
        ])
        return timetableItems.flatMap((item) =>
            item.kind === TimetableItemKind.LECTURE && ownLectureIds.has(item.data.id)
                ? [item.data.id]
                : [],
        )
    }, [
        selectedFriendId,
        ownAllSaved.data,
        ownAllSaved.isError,
        ownActual.data,
        ownActual.isError,
        timetableItems,
    ])
    const timetableName =
        currentTimetableId === null
            ? t("friends.actualTimetable")
            : timetables.find(({ id }) => id === currentTimetableId)?.name || "No Title"

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

    return (
        <Page>
            <Layout>
                {!isTablet && (
                    <SidePanel>
                        <FriendListContent
                            friends={friendsQuery.data?.friends ?? []}
                            showSchedule={showSchedule}
                            selectedFriendId={selectedFriendId}
                            onSelect={handleSelectFriend}
                            onDelete={setDeletingFriend}
                            onInvite={() => setInviteOpen(true)}
                        />
                    </SidePanel>
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
                    <TimetableHeader
                        direction="row"
                        gap={8}
                        align="center"
                        justify="space-between"
                    >
                        <Tabs
                            role="tablist"
                            aria-label={selectedFriend?.name ?? t("friends.myTimetable")}
                        >
                            <TimetableTab
                                role="tab"
                                tabIndex={0}
                                aria-selected={currentTimetableId === null}
                                type={
                                    currentTimetableId === null ? "selected" : "default"
                                }
                                onClick={() => handleSelectTimetable(null)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault()
                                        handleSelectTimetable(null)
                                    }
                                }}
                            >
                                {t("friends.actualTimetable")}
                            </TimetableTab>
                            {timetables.map((timetable) => (
                                <TimetableTab
                                    key={timetable.id}
                                    role="tab"
                                    tabIndex={0}
                                    aria-selected={currentTimetableId === timetable.id}
                                    type={
                                        currentTimetableId === timetable.id
                                            ? "selected"
                                            : "default"
                                    }
                                    onClick={() => handleSelectTimetable(timetable.id)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault()
                                            handleSelectTimetable(timetable.id)
                                        }
                                    }}
                                >
                                    {timetable.name || "No Title"}
                                </TimetableTab>
                            ))}
                        </Tabs>
                        <SemesterButton
                            variant="outlined"
                            year={year}
                            semester={semester}
                            onChange={handleSelectSemester}
                        />
                    </TimetableHeader>
                    <TimetablePanel>
                        {timetableQuery.isError && (
                            <Typography
                                type="Small"
                                color="Highlight.default"
                                role="alert"
                            >
                                {t("friends.loadError")}
                            </Typography>
                        )}
                        <TimetableGrid>
                            <CustomTimeTableGrid
                                timetableItems={timetableItems}
                                overlappedLectureIds={overlappedLectureIds}
                                displayedDayCount={7}
                                needTimeFilter={false}
                                needLectureDeletable={false}
                                selectedLectures={
                                    selectedLecture ? [selectedLecture] : []
                                }
                                selectedCustomBlock={selectedCustomBlock}
                                onLectureSelect={(lecture) => {
                                    setSelectedItem({
                                        kind: TimetableItemKind.LECTURE,
                                        data: lecture,
                                    })
                                    if (isTablet) setDetailOpen(true)
                                }}
                                onCustomBlockSelect={(block) => {
                                    setSelectedItem({
                                        kind: TimetableItemKind.CUSTOM,
                                        data: block,
                                    })
                                    if (isTablet) setDetailOpen(true)
                                }}
                            />
                        </TimetableGrid>
                    </TimetablePanel>
                </TimetableColumn>
                {!isTablet && (
                    <DetailPanel>
                        {selectedCustomBlock ? (
                            <FriendCustomBlockDetail
                                block={selectedCustomBlock}
                                timetableName={timetableName}
                                onClose={() => setSelectedItem(null)}
                            />
                        ) : (
                            <FriendLectureDetail
                                lecture={selectedLecture}
                                year={year}
                                semester={semester}
                            />
                        )}
                    </DetailPanel>
                )}
            </Layout>

            <Modal
                isOpen={isTablet && friendListOpen}
                onClose={() => setFriendListOpen(false)}
                title={t("friends.title")}
                fullScreen
            >
                <FriendListContent
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
                        {timetableQuery.isPending ? (
                            <Typography role="status">
                                {t("friends.loadingLectures")}
                            </Typography>
                        ) : timetableQuery.isError ? (
                            <Typography role="alert">{t("friends.loadError")}</Typography>
                        ) : lectures.length === 0 ? (
                            <Typography>{t("friends.noLectures")}</Typography>
                        ) : (
                            lectures.map((lecture, index) => (
                                <LectureChoice
                                    key={lecture.id}
                                    ref={index === 0 ? detailActionRef : undefined}
                                    type="button"
                                    onClick={() =>
                                        setSelectedItem({
                                            kind: TimetableItemKind.LECTURE,
                                            data: lecture,
                                        })
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
