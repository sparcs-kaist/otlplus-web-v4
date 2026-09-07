import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import MenuIcon from "@mui/icons-material/Menu"
import { useTranslation } from "react-i18next"

import { type GETUserInfoResponse } from "@/api/users/info"
import Icon from "@/common/primitives/Icon"
import { clientEnv } from "@/env"
import AccountPageModal from "@/features/account/AccountPageModal"
import DeveloperLoginModal from "@/features/account/DeveloperLoginModal"
import { axiosClient } from "@/libs/axios"
import { identifyUser } from "@/libs/mixpanel"
import { queryKeys } from "@/libs/query/queryKeys"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import { handleLogin } from "@/utils/handleLoginLogout"
import { getLocalStorageItem } from "@/utils/localStorage"
import { localStorageKeys } from "@/utils/storageKeys"
import useIsDevice from "@/utils/useIsDevice"
import useThemeStore from "@/utils/zustand/useThemeStore"
import useUserStore from "@/utils/zustand/useUserStore"

import Menu from "./Menu"
import MobileSidebar from "./MobileSidebar"
import Setting from "./Setting"
import resolveUserInfo, { selectAuthenticatedUserInfo } from "./resolveUserInfo"

const HeaderWrapper = styled.div`
    width: 100%;
    height: max-content;
    z-index: 500;
    background-color: ${({ theme }) => theme.colors.Background.Page.default};
    padding-bottom: 5px;
`

const HeaderBar = styled.div<{ selectedTheme: string }>`
    width: 100%;
    height: 5px;
    background: ${({ theme, selectedTheme }) =>
        selectedTheme === "light" ? theme.colors.Highlight.default : "transparent"};
`

const HeaderInner = styled.header`
    height: 50px;
    padding-inline: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    gap: 16px;
`

const MobileSidebarButton = styled.button`
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;
    display: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Button.default};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    ${media.mobile} {
        display: flex;
    }
`

const Header: React.FC = () => {
    const isMobile = useIsDevice("mobile")
    const { t } = useTranslation()

    const { displayedTheme } = useThemeStore()
    const { status: userStatus, setUser, clearUser } = useUserStore()
    const [enabled, setEnabled] = useState<boolean>(false)

    const [accountPageOpen, setAccountPageOpen] = useState<boolean>(false)
    const [developerLoginOpen, setDeveloperLoginOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<GETUserInfoResponse | null>(null)
    const authenticatedUserInfo = selectAuthenticatedUserInfo(userStatus, userInfo)

    const { query } = useAPI("GET", queryKeys.userInfo, {
        enabled,
        staleTime: 0,
    })

    const handleAccountButtonClick = () => {
        if (authenticatedUserInfo === null) {
            if (process.env.NODE_ENV === "development") {
                setDeveloperLoginOpen(true)
            } else {
                handleLogin()
            }
        } else {
            setAccountPageOpen(true)
        }
    }

    const handleMobileAccountButtonClick = () => {
        setMobileSidebarOpen(false)
        handleAccountButtonClick()
    }

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            const devStudentId = getLocalStorageItem(localStorageKeys.devStudentId)
            if (devStudentId) {
                axiosClient.defaults.headers.common["X-AUTH-SID"] = devStudentId
            }
        }
        if (clientEnv.VITE_DEV_MODE) {
            axiosClient.defaults.headers.common["X-SID-AUTH-TOKEN"] =
                clientEnv.VITE_APP_DEV_API_AUTH_TOKEN
        }
        setEnabled(true)
    }, [])

    useEffect(() => {
        const resolvedUserInfo = resolveUserInfo({
            enabled,
            isPending: query.isPending,
            isError: query.isError,
            error: query.error,
            data: query.data,
        })
        if (resolvedUserInfo === undefined) return

        if (resolvedUserInfo !== null) {
            setUserInfo(resolvedUserInfo)
            setUser({
                id: resolvedUserInfo.id,
                name: resolvedUserInfo.name,
                studentNumber: resolvedUserInfo.studentNumber,
                majorDepartments: resolvedUserInfo.majorDepartments,
            })
            identifyUser({
                id: resolvedUserInfo.id,
                email: resolvedUserInfo.mail,
                name: resolvedUserInfo.name,
                studentNumber: resolvedUserInfo.studentNumber,
                degree: resolvedUserInfo.degree,
            })
        } else {
            setUserInfo(null)
            clearUser()
            setEnabled(false)
        }
    }, [
        clearUser,
        enabled,
        query.data,
        query.error,
        query.isError,
        query.isPending,
        setUser,
    ])

    useEffect(() => {
        if (!isMobile) setMobileSidebarOpen(false)
    }, [isMobile])

    return (
        <HeaderWrapper>
            {developerLoginOpen && (
                <DeveloperLoginModal
                    developerLoginModalOpen={developerLoginOpen}
                    setDeveloperLoginModalOpen={setDeveloperLoginOpen}
                />
            )}
            {accountPageOpen && authenticatedUserInfo && (
                <AccountPageModal
                    userInfo={authenticatedUserInfo}
                    accountPageOpen={accountPageOpen}
                    setAccountPageOpen={setAccountPageOpen}
                />
            )}
            <HeaderBar selectedTheme={displayedTheme} />
            <HeaderInner>
                <Menu setMobileSidebarOpen={() => setMobileSidebarOpen(false)} />
                <Setting
                    handleAccountButtonClick={handleAccountButtonClick}
                    userName={authenticatedUserInfo?.name ?? "Sign in"}
                    mobileSidebar={false}
                    isLoading={query.isLoading}
                />
                <MobileSidebarButton
                    type="button"
                    aria-label={t("header.openMenu")}
                    title={t("header.openMenu")}
                    onClick={() => setMobileSidebarOpen(true)}
                >
                    <Icon size={18}>
                        <MenuIcon />
                    </Icon>
                </MobileSidebarButton>
            </HeaderInner>
            <MobileSidebar
                setMobileSidebarOpen={setMobileSidebarOpen}
                mobileSidebarOpen={mobileSidebarOpen}
                sidebarHeader={
                    <Setting
                        handleAccountButtonClick={handleMobileAccountButtonClick}
                        userName={authenticatedUserInfo?.name ?? "Sign in"}
                        mobileSidebar={true}
                        isLoading={query.isLoading}
                    />
                }
            />
        </HeaderWrapper>
    )
}

export default Header
