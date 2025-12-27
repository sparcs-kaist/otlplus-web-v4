import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import MenuIcon from "@mui/icons-material/Menu"

import { type GETUserInfoResponse } from "@/api/users/info"
import Icon from "@/common/primitives/Icon"
import { clientEnv } from "@/env"
import AccountPageModal from "@/features/account/AccountPageModal"
import DeveloperLoginModal from "@/features/account/DeveloperLoginModal"
import { axiosClient } from "@/libs/axios"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import { getLocalStorageItem } from "@/utils/localStorage"
import useIsDevice from "@/utils/useIsDevice"
import useThemeStore from "@/utils/zustand/useThemeStore"
import useUserStore from "@/utils/zustand/useUserStore"

import Menu from "./Menu"
import MobileSidebar from "./MobileSidebar"
import Setting from "./Setting"

const HeaderWrapper = styled.div`
    width: 100%;
    height: max-content;
    z-index: 500;
    background-color: ${({ theme }) => theme.colors.Background.Page.default};
    position: fixed;
`

const HeaderBar = styled.div`
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.Highlight.default};
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

const MobileSidebarButtonWrapper = styled.div`
    color: ${({ theme }) => theme.colors.Text.default};
    display: none;

    ${media.mobile} {
        display: block;
    }
`

const Header: React.FC = () => {
    const isMobile = useIsDevice("mobile")

    const { displayedTheme } = useThemeStore()
    const { setUser, clearUser } = useUserStore()
    const [enabled, setEnabled] = useState<boolean>(false)

    const [accountPageOpen, setAccountPageOpen] = useState<boolean>(false)
    const [developerLoginOpen, setDeveloperLoginOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<GETUserInfoResponse | null>(null)

    const { query } = useAPI("GET", "/users/info", { enabled: enabled })

    const handleAccountButtonClick = () => {
        if (userInfo === null) {
            if (process.env.NODE_ENV === "development") {
                setDeveloperLoginOpen(true)
            } else {
                location.href = clientEnv.VITE_APP_API_URL + `/session/login`
            }
        } else {
            setAccountPageOpen(true)
        }
    }

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            const devStudentId = getLocalStorageItem("devStudentId")
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
        if (query.isLoading || !enabled) return
        if (query.data) {
            setUserInfo(query.data)
            setUser({ id: query.data.id, name: query.data.name })
        } else {
            setUserInfo(null)
            clearUser()
            setEnabled(false)
        }
    }, [query.data, query.isLoading, enabled])

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
            {accountPageOpen && (
                <AccountPageModal
                    userInfo={userInfo}
                    accountPageOpen={accountPageOpen}
                    setAccountPageOpen={setAccountPageOpen}
                />
            )}
            {displayedTheme !== "dark" && <HeaderBar />}
            <HeaderInner>
                <Menu setMobileSidebarOpen={() => setMobileSidebarOpen(false)} />
                <Setting
                    handleAccountButtonClick={handleAccountButtonClick}
                    userName={userInfo ? userInfo.name : "Sign in"}
                    mobileSidebar={false}
                    isLoading={query.isLoading}
                />
                <MobileSidebarButtonWrapper onClick={() => setMobileSidebarOpen(true)}>
                    <Icon size={18}>
                        <MenuIcon />
                    </Icon>
                </MobileSidebarButtonWrapper>
            </HeaderInner>
            <MobileSidebar
                setMobileSidebarOpen={setMobileSidebarOpen}
                mobileSidebarOpen={mobileSidebarOpen}
                sidebarHeader={
                    <Setting
                        handleAccountButtonClick={handleAccountButtonClick}
                        userName={userInfo ? userInfo.name : "Sign in"}
                        mobileSidebar={true}
                        isLoading={query.isLoading}
                    />
                }
            />
        </HeaderWrapper>
    )
}

export default Header
