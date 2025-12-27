import { type Dispatch, type SetStateAction } from "react"

import { type Theme, css } from "@emotion/react"
import styled from "@emotion/styled"
import {
    Edit,
    EditOutlined,
    EmojiEvents,
    EmojiEventsOutlined,
    Favorite,
    FavoriteBorderOutlined,
    Whatshot,
    WhatshotOutlined,
} from "@mui/icons-material"
import { useTranslation } from "react-i18next"

import { type TabType, TabTypes } from "@/common/interface/ReviewWriteTabs"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

interface tabsSubSectionType {
    tab: TabType
    setTab: Dispatch<SetStateAction<TabType>>
}

const Icons = {
    write: EditOutlined,
    recentFeed: WhatshotOutlined,
    hallOfFameFeed: EmojiEventsOutlined,
    liked: FavoriteBorderOutlined,
}

const FilledIcons = {
    write: Edit,
    recentFeed: Whatshot,
    hallOfFameFeed: EmojiEvents,
    liked: Favorite,
}

const TabSelectedStyle = ({ theme }: { theme: Theme }) => css`
    background: ${theme.colors.Background.Section.default};
    color: ${theme.colors.Highlight.default};

    &:hover {
        background: ${theme.colors.Background.Section.default};
    }
`

const Tab = styled(FlexWrapper)<{ selected: boolean }>`
    background: ${({ theme }) => theme.colors.Background.Tab.dark};
    color: ${({ theme }) => theme.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;

    &:hover {
        background: ${({ theme }) => theme.colors.Background.Tab.darker};
    }

    ${({ selected, theme }) => selected && TabSelectedStyle({ theme })}
`

function TabsSubSection({ tab, setTab }: tabsSubSectionType) {
    const isTablet = useIsDevice("tablet")
    const { t } = useTranslation()
    const { status } = useUserStore()

    return (
        <FlexWrapper direction="row" gap={6}>
            {TabTypes.map((tabType, idx) => {
                const ThisIcon = Icons[tabType]
                const ThisIconFilled = FilledIcons[tabType]

                if (status !== "success" && (tabType === "liked" || tabType === "write"))
                    return null

                return (
                    <Tab
                        key={tabType}
                        direction="row"
                        align="center"
                        gap={6}
                        padding="8px 12px"
                        selected={tab == tabType}
                        onClick={() => setTab(tabType)}
                    >
                        <Icon size={12}>
                            {tab == tabType ? <ThisIconFilled /> : <ThisIcon />}
                        </Icon>
                        {isTablet ? (
                            tab == tabType && (
                                <Typography type="Normal">
                                    {t(`writeReviews.tabs.${tabType}`)}
                                </Typography>
                            )
                        ) : (
                            <Typography type="Normal">
                                {t(`writeReviews.tabs.${tabType}`)}
                            </Typography>
                        )}
                    </Tab>
                )
            })}
        </FlexWrapper>
    )
}

export default TabsSubSection
