import { useEffect, useMemo, useState } from "react"

import styled from "@emotion/styled"
import DeleteIcon from "@mui/icons-material/Delete"
import GroupIcon from "@mui/icons-material/Group"
import PersonIcon from "@mui/icons-material/Person"
import SearchIcon from "@mui/icons-material/Search"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Friend } from "@/common/schemas/friend"
import type { Lecture } from "@/common/schemas/lecture"
import FriendInviteModal from "@/features/friends/FriendInviteModal"
import FriendLectureDetail from "@/features/friends/FriendLectureDetail"
import SemesterButton from "@/features/timetable/sections/TabsRowSubSection/SemesterButton"
import TabButton from "@/features/timetable/sections/TabsRowSubSection/TabButton"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import { handleLogin } from "@/utils/handleLoginLogout"
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
    padding: 20px;
    box-sizing: border-box;

    ${media.tablet} {
        padding: 8px;
    }
`

const Layout = styled.div`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(220px, 288px) minmax(520px, 1fr) minmax(300px, 454px);
    gap: 12px;

    ${media.laptop} {
        grid-template-columns: 240px minmax(500px, 1fr) 320px;
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
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`

const SidePanel = styled(Panel)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px 0 0;

    ${media.tablet} {
        display: none;
    }
`

const TimetablePanel = styled(Panel)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;

    ${media.tablet} {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
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

const SidebarHeader = styled(FlexWrapper)`
    padding: 0 16px 12px;
`

const SearchBox = styled.label`
    height: 34px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.Background.Block.default};
    color: ${({ theme }) => theme.colors.Text.placeholder};
`

const SearchInput = styled.input`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    font: inherit;
`

const FriendList = styled.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
`

const FriendRowButton = styled.div<{ $selected: boolean }>`
    width: 100%;
    height: 46px;
    border: 0;
    padding: 0 12px 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ $selected, theme }) =>
        $selected
            ? theme.colors.Background.Block.default
            : theme.colors.Background.Section.default};

    &:hover {
        background: ${({ theme }) => theme.colors.Background.Block.default};
    }
`

const FriendName = styled.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const RowIconButton = styled.button`
    width: 28px;
    height: 28px;
    padding: 4px;
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
`

const InviteButton = styled.button`
    height: 48px;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.Line.block};
    background: transparent;
    color: ${({ theme }) => theme.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
`

const TimetableHeader = styled(FlexWrapper)`
    width: 100%;
    flex-shrink: 0;
`

const Tabs = styled.div`
    min-width: 0;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
`

const TimetableGrid = styled.div`
    min-height: 0;
    flex: 1;
    display: flex;
    padding-top: 8px;
`

const MobileOnly = styled.div`
    display: none;

    ${media.tablet} {
        display: block;
    }
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
    friend: Friend
    selected: boolean
    onSelect: () => void
    onDelete: () => void
}

function FriendRow({ friend, selected, onSelect, onDelete }: FriendRowProps) {
    const queryClient = useQueryClient()
    const { requestFunction } = useAPI("PATCH", `/friends/${friend.id}/favorite`, {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/friends"] }),
    })

    return (
        <FriendRowButton
            $selected={selected}
            role="button"
            tabIndex={0}
            onClick={onSelect}
            onKeyDown={(event) => {
                if (event.currentTarget !== event.target) return
                if (event.key === "Enter" || event.key === " ") onSelect()
            }}
        >
            <Icon size={18}>
                <PersonIcon />
            </Icon>
            <FriendName>{friend.name}</FriendName>
            {selected && (
                <RowIconButton
                    aria-label="delete friend"
                    onClick={(event) => {
                        event.stopPropagation()
                        onDelete()
                    }}
                >
                    <Icon size={20}>
                        <DeleteIcon />
                    </Icon>
                </RowIconButton>
            )}
            <RowIconButton
                aria-label="favorite friend"
                onClick={(event) => {
                    event.stopPropagation()
                    requestFunction({ isFavorite: !friend.isFavorite })
                }}
            >
                <Icon size={20}>
                    {friend.isFavorite ? <StarIcon /> : <StarBorderIcon />}
                </Icon>
            </RowIconButton>
        </FriendRowButton>
    )
}

interface FriendListContentProps {
    friends: Friend[]
    selectedFriendId: number | null
    onSelect: (id: number | null) => void
    onDelete: (friend: Friend) => void
    onInvite: () => void
}

function FriendListContent({
    friends,
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
        <>
            <SidebarHeader direction="column" gap={12} align="stretch">
                <Typography type="BigBold" color="Text.default">
                    {t("friends.friendList", { count: friends.length })}
                </Typography>
                <SearchBox>
                    <Icon size={18}>
                        <SearchIcon />
                    </Icon>
                    <SearchInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder={t("friends.searchPlaceholder")}
                    />
                </SearchBox>
            </SidebarHeader>
            <FriendList>
                <FriendRowButton
                    $selected={selectedFriendId === null}
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelect(null)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") onSelect(null)
                    }}
                >
                    <Icon size={18}>
                        <PersonIcon />
                    </Icon>
                    <FriendName>{t("friends.myTimetable")}</FriendName>
                </FriendRowButton>
                {filtered.map((friend) => (
                    <FriendRow
                        key={friend.id}
                        friend={friend}
                        selected={selectedFriendId === friend.id}
                        onSelect={() => onSelect(friend.id)}
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
        </>
    )
}

export default function FriendsPage() {
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const isTablet = useIsDevice("tablet")
    const { user, status } = useUserStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    const rawFriendId = Number(searchParams.get("friendId"))
    const selectedFriendId =
        Number.isSafeInteger(rawFriendId) && rawFriendId > 0 ? rawFriendId : null
    const [year, setYear] = useState(-1)
    const [semester, setSemester] = useState(SemesterEnum.SPRING)
    const [currentTimetableId, setCurrentTimetableId] = useState<number | null>(null)
    const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null)
    const [friendListOpen, setFriendListOpen] = useState(false)
    const [detailOpen, setDetailOpen] = useState(false)
    const [inviteOpen, setInviteOpen] = useState(false)
    const [deletingFriend, setDeletingFriend] = useState<Friend | null>(null)
    const [addedFriendName, setAddedFriendName] = useState<string | null>(
        (location.state as { friendAddedName?: string } | null)?.friendAddedName ?? null,
    )

    const { query: friendsQuery } = useAPI("GET", "/friends", {
        enabled: status === "success",
    })
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
        { enabled: status === "success" && selectedFriendId === null },
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
        { enabled: status === "success" && selectedFriendId !== null },
    )
    const { query: friendActual, setParams: setFriendActualParams } = useAPI(
        "GET",
        `/friends/${selectedFriendId ?? 0}/timetables/my-timetable`,
        { enabled: status === "success" && selectedFriendId !== null },
    )
    const { query: friendSaved } = useAPI(
        "GET",
        `/friends/${selectedFriendId ?? 0}/timetables/${currentTimetableId ?? 0}`,
        {
            enabled:
                status === "success" &&
                selectedFriendId !== null &&
                currentTimetableId !== null,
        },
    )

    const { requestFunction: deleteFriend } = useAPI(
        "DELETE",
        `/friends/${deletingFriend?.id ?? 0}`,
        {
            onSuccess: () => {
                if (deletingFriend?.id === selectedFriendId) setSearchParams({})
                setDeletingFriend(null)
                queryClient.invalidateQueries({ queryKey: ["/friends"] })
            },
        },
    )

    useEffect(() => {
        if (year < 0) return
        const params = { year, semester }
        if (selectedFriendId === null) {
            setOwnTimetableParams(params)
            setOwnActualParams(params)
        } else {
            setFriendTimetableParams(params)
            setFriendActualParams(params)
        }
        setCurrentTimetableId(null)
        setSelectedLecture(null)
    }, [year, semester, selectedFriendId])

    useEffect(() => {
        setCurrentTimetableId(null)
        setSelectedLecture(null)
        setDetailOpen(false)
        setFriendListOpen(false)
    }, [selectedFriendId])

    useEffect(() => {
        if (
            selectedFriendId !== null &&
            friendsQuery.data &&
            !friendsQuery.data.friends.some(({ id }) => id === selectedFriendId)
        ) {
            setSearchParams({})
        }
    }, [friendsQuery.data, selectedFriendId, setSearchParams])

    const timetables =
        selectedFriendId === null
            ? (ownTimetables.data?.timetables ?? [])
            : (friendTimetables.data?.timetables ?? [])
    const lectures =
        currentTimetableId === null
            ? selectedFriendId === null
                ? (ownActual.data?.lectures ?? [])
                : (friendActual.data?.lectures ?? [])
            : selectedFriendId === null
              ? (ownSaved.data?.lectures ?? [])
              : (friendSaved.data?.lectures ?? [])

    const handleSelectFriend = (friendId: number | null) => {
        setSearchParams(friendId === null ? {} : { friendId: String(friendId) })
    }

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
                        <Button type="highlighted" onClick={handleLogin}>
                            {t("friends.login")}
                        </Button>
                    </>
                )}
            </LoginPage>
        )
    }

    return (
        <Page>
            <Layout>
                <SidePanel>
                    <FriendListContent
                        friends={friendsQuery.data?.friends ?? []}
                        selectedFriendId={selectedFriendId}
                        onSelect={handleSelectFriend}
                        onDelete={setDeletingFriend}
                        onInvite={() => setInviteOpen(true)}
                    />
                </SidePanel>
                <TimetablePanel>
                    <TimetableHeader
                        direction="row"
                        gap={8}
                        align="center"
                        justify="space-between"
                    >
                        <MobileOnly>
                            <Button onClick={() => setFriendListOpen(true)}>
                                <Icon size={16}>
                                    <GroupIcon />
                                </Icon>
                                {selectedFriend?.name ??
                                    t("friends.friendList", {
                                        count: friendsQuery.data?.friends.length ?? 0,
                                    })}
                            </Button>
                        </MobileOnly>
                        <SemesterButton
                            year={year}
                            semester={semester}
                            setYear={setYear}
                            setSemester={setSemester}
                            setCurrentTimetableId={setCurrentTimetableId}
                        />
                    </TimetableHeader>
                    <Tabs>
                        <TabButton
                            type={currentTimetableId === null ? "selected" : "default"}
                            onClick={() => {
                                setCurrentTimetableId(null)
                                setSelectedLecture(null)
                            }}
                        >
                            {t("friends.actualTimetable")}
                        </TabButton>
                        {timetables.map((timetable) => (
                            <TabButton
                                key={timetable.id}
                                type={
                                    currentTimetableId === timetable.id
                                        ? "selected"
                                        : "default"
                                }
                                onClick={() => {
                                    setCurrentTimetableId(timetable.id)
                                    setSelectedLecture(null)
                                }}
                            >
                                {timetable.name}
                            </TabButton>
                        ))}
                    </Tabs>
                    <TimetableGrid>
                        <CustomTimeTableGrid
                            lectures={lectures}
                            needTimeFilter={false}
                            needLectureDeletable={false}
                            selectedLectures={selectedLecture ? [selectedLecture] : []}
                            onLectureSelect={(lecture) => {
                                setSelectedLecture(lecture)
                                if (isTablet) setDetailOpen(true)
                            }}
                        />
                    </TimetableGrid>
                </TimetablePanel>
                <DetailPanel>
                    <FriendLectureDetail lecture={selectedLecture} />
                </DetailPanel>
            </Layout>

            <Modal
                isOpen={friendListOpen}
                onClose={() => setFriendListOpen(false)}
                title={t("friends.title")}
                fullScreen
            >
                <FriendListContent
                    friends={friendsQuery.data?.friends ?? []}
                    selectedFriendId={selectedFriendId}
                    onSelect={handleSelectFriend}
                    onDelete={setDeletingFriend}
                    onInvite={() => setInviteOpen(true)}
                />
            </Modal>
            <Modal
                isOpen={detailOpen}
                onClose={() => setDetailOpen(false)}
                title={selectedLecture?.name ?? ""}
                fullScreen
            >
                <FriendLectureDetail lecture={selectedLecture} />
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
                <FlexWrapper direction="row" gap={8} justify="flex-end">
                    <Button onClick={() => setDeletingFriend(null)}>
                        {t("friends.cancel")}
                    </Button>
                    <Button type="highlighted" onClick={() => deleteFriend({})}>
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
