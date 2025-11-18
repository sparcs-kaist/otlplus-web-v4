import { useContext, useEffect, useState } from "react"

import styled from "@emotion/styled"
import MenuIcon from "@mui/icons-material/Menu"

import { SelectedThemeContext } from "@/Providers"
import exampleUserInfo from "@/api/example/UserInfo"
import { type GETUserInfoResponse } from "@/api/users/info"
import Icon from "@/common/primitives/Icon"
import AccountPageModal from "@/features/account/AccountPageModal"
import DeveloperLoginModal from "@/features/account/DeveloperLoginModal"
import { axiosClient } from "@/libs/axios"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import {
    getLocalStorageItem,
    removeLocalStorageItem,
    setLocalStorageItem,
} from "@/utils/localStorage"
import useIsDevice from "@/utils/useIsDevice"

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
    const [query] = useAPI("GET", "/users/info", {
        enabled: false,
    })

    const isMobile = useIsDevice("mobile")
    const { theme } = useContext(SelectedThemeContext)

    const [accountPageOpen, setAccountPageOpen] = useState<boolean>(false)
    const [developerLoginOpen, setDeveloperLoginOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)

    const [userInfo, setUserInfo] = useState<GETUserInfoResponse | null>(null)

    const handleAccountButtonClick = () => {
        if (userInfo === null) {
            if (process.env.NODE_ENV === "development") {
                setDeveloperLoginOpen(true)
            } else {
                location.href = `/session/login`
            }
        } else {
            setAccountPageOpen(true)
        }
    }

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            const devStudentId = getLocalStorageItem("devStudentId")
            const devToken = getLocalStorageItem("devToken")
            if (devStudentId) {
                axiosClient.defaults.headers.common["X-AUTH-SID"] = devStudentId
                // axiosClient.defaults.headers.common["X-SID-AUTH-TOKEN"] = devToken
            }
        }
    }, [])
    useEffect(() => {
        if (query.data) {
            setUserInfo(query.data)
            setLocalStorageItem("userId", query.data.id.toString())
        } else {
            setUserInfo(null)
            // removeLocalStorageItem("userId")
        }
    }, [query.data])
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
                    setUserInfo={setUserInfo}
                    accountPageOpen={accountPageOpen}
                    setAccountPageOpen={setAccountPageOpen}
                />
            )}
            {theme !== "dark" && <HeaderBar />}
            <HeaderInner>
                <Menu setMobileSidebarOpen={() => setMobileSidebarOpen(false)} />
                <Setting
                    handleAccountButtonClick={handleAccountButtonClick}
                    userName={userInfo ? userInfo.name : "Sign in"}
                    mobileSidebar={false}
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
                    />
                }
            />
        </HeaderWrapper>
    )
}

export default Header
