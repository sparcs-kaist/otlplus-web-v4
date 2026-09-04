import styled from "@emotion/styled"

const HoverContainer = styled.div<{ top: number; left: number; width?: number }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: ${(props) => props.top + 20}px;
    left: ${(props) => props.left}px;
    background-color: ${({ theme }) => theme.colors.Background.Overlay.default};
    color: ${({ theme }) => theme.colors.Background.Overlay.text};
    padding: 10px;
    border-radius: 2px;
    pointer-events: none;
    width: ${(props) => (props.width ? `${props.width}px` : "auto")};
    height: auto;
    overflow: auto;
    z-index: 9999;
`

export default HoverContainer
