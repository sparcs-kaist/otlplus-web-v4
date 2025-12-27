import React, { type HTMLAttributes } from "react"

import styled from "@emotion/styled"

type TabButtonProps = {
    type?: keyof typeof TabButtonTypeInner
    children?: React.ReactNode
    buttonRef?: React.Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const TabButtonInner = styled.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`

const TabButtonDefaultInner = styled(TabButtonInner)`
    color: ${({ theme }) => theme.colors.Text.lighter};
    background-color: ${({ theme }) => theme.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Tab.darker};
    }
`

const TabButtonSelectedInner = styled(TabButtonInner)`
    color: ${({ theme }) => theme.colors.Highlight.default};
    background-color: ${({ theme }) => theme.colors.Background.Tab.default};
    cursor: pointer;
`

const TabButtonTypeInner = {
    default: TabButtonDefaultInner,
    selected: TabButtonSelectedInner,
}

const TabButtonWithTextInner = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`

const TabButtonWithChildren = (children: React.ReactNode) => (
    <TabButtonWithTextInner>{children}</TabButtonWithTextInner>
)

const TabButton = ({
    type = "default",
    children = undefined,
    buttonRef,
    ...divProps
}: TabButtonProps) => {
    const TabButtonChosenInner = TabButtonTypeInner[type]

    const ButtonContent = () => {
        return TabButtonWithChildren(children)
    }

    return (
        <TabButtonChosenInner ref={buttonRef} {...divProps} onClick={divProps.onClick}>
            <ButtonContent />
        </TabButtonChosenInner>
    )
}

export default TabButton
