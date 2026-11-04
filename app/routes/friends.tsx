import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import GroupIcon from "@mui/icons-material/Group"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import type { Friend, FriendListItem } from "@/common/schemas/friend"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import FriendCustomBlockDetail from "@/features/friends/FriendCustomBlockDetail"
import FriendInviteModal from "@/features/friends/FriendInviteModal"
import FriendLoginButton from "@/features/friends/FriendLoginButton"
import {
    invalidateFriendQueries,
    removeFriendTimetableQueries,
} from "@/features/friends/friendQueries"
import FriendsListSection from "@/features/friends/sections/FriendsListSection"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import TabButtonRow from "@/features/timetable/sections/TabsRowSubSection/TabButtonRow"
import type { Lecture } from "@/common/schemas/lecture"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import {IconButton} from "@/common/primitives/IconButton"

export const meta = () => [
    { title: "친구 시간표 | OTL" },
    {
        name: "description",
        content: "OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.",
    },
]

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

const FriendsWrapper = styled(FlexWrapper)`
    min-height: 0;

    ${media.tablet} {
        padding: 8px;
    }

    ${media.mobile} {
        padding: 0 8px 8px 8px;
    }
`

const StyledWidget = styled(Widget)`
    background: transparent;
    overflow: hidden;
    border-radius: 12px 6px 16px 16px;
    box-shadow: none;
`;

const TimetableWrapper = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 0px 16px 0px 0px;
`;

export default function FriendsPage() {
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const isTablet = useIsDevice("tablet")
    const isDesktop = useIsDevice("desktop")
    const { user, status } = useUserStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    const requestedFriendId = positiveInteger(searchParams.get("friendId"))
    const requestedYear = positiveInteger(searchParams.get("year"))
    const requestedSemester = Number(searchParams.get("semester"))
    const hasRequestedTerm =
        requestedYear !== null &&
        Number.isInteger(requestedSemester) &&
        requestedSemester >= SemesterEnum.SPRING &&
        requestedSemester <= SemesterEnum.WINTER
    const year = useTimetableUIStore((state) => state.year)
    const semester = useTimetableUIStore((state) => state.semesterEnum)
    const setYear = useTimetableUIStore((state) => state.setYear)
    const setSemester = useTimetableUIStore((state) => state.setSemesterEnum)
    const selectedItems = useTimetableUIStore((state) => state.selectedItems)
    const setSelectedItems = useTimetableUIStore((state) => state.setSelectedItems)
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

    const [selectedFriend, setSelectedFriend] = useState<FriendListItem | null>(null)

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

    const handleSelectItem = useCallback(
        (item: TimetableItem) => {
            setSelectedItems([item])
            setDetailOpen(true)
        },
        [setSelectedItems],
    )

    useEffect(() => {
        setSearchParams({}, {replace: true})
    },[setSearchParams])

    useEffect(() => {
        if (isTablet && detailOpen) detailActionRef.current?.focus()
    }, [isTablet, detailOpen, selectedItems])

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

    const { query: ownActual, setParams: setOwnActualParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        { enabled: status === "success" },
    )

    const { query: friendActual, setParams: setFriendActualParams } = useAPI(
        "GET",
        `/friends/${selectedFriend?.id}/timetables/my-timetable`,
        {
            enabled: status === "success" && selectedFriend?.id !== null && selectedFriend?.id !== undefined,
            staleTime: 0,
            gcTime: 0,
        },
    )

    const { mutation: deleteMutation, requestFunction: deleteFriend } = useAPI(
        "DELETE",
        `/friends/${deletingFriend?.id ?? 0}`,
        {
            onSuccess: () => {
                if (deletingFriend?.id === selectedFriend?.id) handleSelectFriend(null)
                if (deletingFriend)
                    removeFriendTimetableQueries(queryClient, deletingFriend.id)
                setDeletingFriend(null)
                invalidateFriendQueries(queryClient)
            },
        },
    )

    useEffect(() => {
        setSelectedItems([])
        setDetailOpen(false)
        setFriendListOpen(false)
    }, [selectedFriend, year, semester, location.key])

    useEffect(() => {
        if (hasRequestedTerm) {
            setYear(requestedYear)
            setSemester(requestedSemester)
        }
    }, [
        hasRequestedTerm,
        requestedYear,
        requestedSemester,
        setYear,
        setSemester,
    ])

    useEffect(() => {
        if (
            selectedFriend !== null &&
            !friendsQuery.isFetching &&
            friendsQuery.isSuccess &&
            friendsQuery.data &&
            !friendsQuery.data.friends.some(({ id }) => id === selectedFriend.id)
        ) {
            handleSelectFriend(null)
        }
    }, [
        friendsQuery.data,
        friendsQuery.isFetching,
        friendsQuery.isSuccess,
        selectedFriend,
        handleSelectFriend,
    ])

    const [timetableItems, setTimetableItems] = useState<TimetableItem[]>([])

    const [lectures, setLectures] = useState<Lecture[]>([]);

    

    useEffect(() => {
        if (year < 0) return
        const params = { year, semester }
        if (selectedFriend?.id == null) {
            setOwnActualParams(params)
        } else {
            setFriendActualParams(params)
        }
    }, [year, semester, selectedFriend])

    useEffect(() => {
        setTimetableItems(ownActual.isError
            ? []
            : (ownActual.data?.timetableItems ?? []))

        setLectures(ownActual.isError
            ? []
            : (ownActual.data?.timetableItems ?? []).flatMap((item) =>
                item.kind === TimetableItemKind.LECTURE ? [item.data] : [],
            ))
    }, [ownActual.data])

    useEffect(() => {
        setTimetableItems(friendActual.isError
            ? []
            : (friendActual.data?.timetableItems ?? []))

        setLectures(friendActual.isError
            ? []
            : (friendActual.data?.timetableItems ?? []).flatMap((item) =>
                item.kind === TimetableItemKind.LECTURE ? [item.data] : [],
            ))
    }, [friendActual.data])

    const closeAddedModal = () => {
        setAddedFriendName(null)
        navigate(location.pathname + location.search, { replace: true, state: null })
    }

    const handleInviteButtonClick = useCallback(() => {
        setInviteOpen(true)
    }, [setInviteOpen])

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
        <FriendsWrapper
            direction={isTablet ? "column" : "row"}
            align="stretch"
            justify="center"
            gap={isTablet ? 8 : 12}
            flex="1 0 0"
            padding="0 20px 12px 20px;"
        >
            {!isTablet && (
                <>
                    <FlexWrapper direction="column" gap={8} justify="stretch" flex="0 0 auto">
                        <Widget width={300} direction="column" padding="16px" gap={0} align="stretch" flex="1 0 auto">
                            <FriendsListSection
                                selectedFriend={selectedFriend}
                                setSelectedFriend={setSelectedFriend}
                                showSchedule={showSchedule}
                                $selectedFriendId={requestedFriendId}
                                onInviteButtonClick={handleInviteButtonClick}
                            />
                        </Widget>
                        {
                            isDesktop && (
                                <Widget width={300} direction="column" padding="16px" gap={0} align="stretch" flex="1 0 auto">
                                    <LectureDetailSection addLectures={() => {}} timetableLectures={lectures} />
                                </Widget>
                            )
                        }
                    </FlexWrapper>
                    <StyledWidget direction="column" gap={0} align="stretch" justify="stretch" flex="1 0 auto">
                        <FlexWrapper direction="column" gap={0} align="stretch" flex="1 0 auto">
                            <FlexWrapper direction="row" gap={8} justify="stretch" align="stretch" flex="0 0 auto">
                                <TabButtonRow
                                    duplicateTimetable={() => Promise.resolve()}
                                    isCloning={false}
                                    timetablesQuery={() => {}}
                                    needTimetableAddition={false}
                                    needTimetableCopy={false}
                                    needTimetableDeletion={false}
                                    needTimetableNameChange={false}
                                    needTimetableMovable={false}
                                    defaultTimetableName={t("timetable.myTimetable")}
                                />
                            </FlexWrapper>
                            <TimetableWrapper direction="column" gap={8} align="stretch" padding="16px" flex="1 0 auto">
                                <CustomTimeTableGrid displayedDayCount={7} needTimeFilter={false} needLectureDeletable={false} timetableItems={timetableItems} onItemSelect={handleSelectItem} />
                            </TimetableWrapper>
                        </FlexWrapper>
                    </StyledWidget>
                    {!isDesktop && (
                        <Widget width={454} direction="column" padding="16px" gap={0} align="stretch">
                            {
                                selectedItems.length === 1 && selectedItems[0]?.kind === TimetableItemKind.LECTURE ? (
                                    <LectureDetailSection addLectures={() => {}} timetableLectures={lectures} />
                                ) : selectedItems.length === 1 && selectedItems[0]?.kind === TimetableItemKind.CUSTOM ? (
                                    <FriendCustomBlockDetail
                                        block={selectedItems[0].data}
                                        timetableName={""}/>
                                ) : null
                            }
                        </Widget>
                    )}
                </>
            )}

            {
                isTablet && (
                    <>
                    <FlexWrapper direction="column" gap={8} justify="stretch" align="stretch" flex="1 0 auto">
                        <StyledWidget direction="column" gap={0} align="stretch" justify="stretch" flex="1 0 auto">
                            <FlexWrapper direction="column" gap={0} align="stretch" flex="1 0 auto">
                                <FlexWrapper direction="row" gap={8} justify="stretch" align="stretch" flex="0 0 auto">
                                    <TabButtonRow
                                        duplicateTimetable={() => Promise.resolve()}
                                        isCloning={false}
                                        timetablesQuery={() => {}}
                                        needTimetableAddition={false}
                                        needTimetableCopy={false}
                                        needTimetableDeletion={false}
                                        needTimetableNameChange={false}
                                        needTimetableMovable={false}
                                        defaultTimetableName={t("timetable.myTimetable")}
                                    />
                                </FlexWrapper>
                                <TimetableWrapper direction="column" gap={8} align="stretch" padding="16px" flex="1 0 auto">
                                    <CustomTimeTableGrid displayedDayCount={7} needTimeFilter={false} needLectureDeletable={false} timetableItems={timetableItems} onItemSelect={handleSelectItem} />
                                </TimetableWrapper>
                            </FlexWrapper>
                        </StyledWidget>
                        <Widget direction="column" gap={0} padding="8px">
                            <IconButton onClick={() => setFriendListOpen(true)}>
                                <Icon size={20} color="Text.default" onClick={() => {}}>
                                    <GroupIcon />
                                </Icon>
                            </IconButton>
                        </Widget>
                    </FlexWrapper>
                    </>
                )
            }
              
            <Modal
                isOpen={isTablet && friendListOpen}
                onClose={() => setFriendListOpen(false)}
                title={t("friends.title")}
                fullScreen
            >
                <FriendsListSection
                    selectedFriend={selectedFriend}
                    setSelectedFriend={setSelectedFriend}
                    showSchedule={showSchedule}
                />
            </Modal>
            <Modal
                isOpen={isTablet && detailOpen}
                onClose={() => setDetailOpen(false)}
                title={t(
                    selectedItems.length === 1 && selectedItems[0]?.kind === TimetableItemKind.CUSTOM
                        ? "friends.customBlockDetail"
                        : "friends.viewOverlaps",
                )}
                fullScreen
            >
                {selectedItems.length === 1 && selectedItems[0]?.kind === TimetableItemKind.CUSTOM ? (
                    <FriendCustomBlockDetail
                        block={selectedItems[0].data}
                        timetableName={""}
                    />
                ) : selectedItems.length === 1 && selectedItems[0]?.kind === TimetableItemKind.LECTURE ? (
                    <LectureDetailSection
                        addLectures={() => {}}
                        timetableLectures={lectures}
                    />
                ) : (
                    <FlexWrapper direction="column" gap={8} align="stretch">
                        <Typography type="Normal" color="Text.default">
                            {t("friends.chooseLecture")}
                        </Typography>
                        {ownActual.isPending || friendActual.isPending ? (
                            <Typography role="status">
                                {t("friends.loadingLectures")}
                            </Typography>
                        ) : ownActual.isError || friendActual.isError ? (
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
                                        setSelectedItems([{
                                            kind: TimetableItemKind.LECTURE,
                                            data: lecture,
                                        }])
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
        </FriendsWrapper>
    )
}
