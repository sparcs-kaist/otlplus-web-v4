import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import MenuIcon from "@mui/icons-material/Menu"

import exampleUserInfo from "@/api/example/UserInfo"
import type { GETUserInfoResponse } from "@/api/users/$userId/info"
import Icon from "@/common/primitives/Icon"
import AccountPageModal from "@/features/account/AccountPageModal"
import { media } from "@/styles/themes/media"
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
    display: none;

    ${media.mobile} {
        display: block;
    }
`

const Header: React.FC = () => {
    const isMobile = useIsDevice("mobile")

    const [accountPageOpen, setAccountPageOpen] = useState<boolean>(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)

    const [userInfo, setUserInfo] = useState<GETUserInfoResponse | null>(exampleUserInfo)

    useEffect(() => {
        if (!isMobile) setMobileSidebarOpen(false)
    }, [isMobile])

    return (
        <HeaderWrapper>
            <AccountPageModal
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                accountPageOpen={accountPageOpen}
                setAccountPageOpen={setAccountPageOpen}
            />
            <HeaderBar />
            <HeaderInner>
                <Menu setMobileSidebarOpen={() => setMobileSidebarOpen(false)} />
                <Setting
                    setAccountPageOpen={setAccountPageOpen}
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
                        setAccountPageOpen={setAccountPageOpen}
                        userName={userInfo ? userInfo.name : "Sign in"}
                        mobileSidebar={true}
                    />
                }
            />
        </HeaderWrapper>
    )
}

export default Header
