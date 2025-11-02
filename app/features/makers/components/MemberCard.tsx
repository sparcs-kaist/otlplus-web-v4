import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useHover } from "@/utils/useHover"

const StyledCard = styled(FlexWrapper)`
    height: 100px;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.Background.Tab.default};
    transition: box-shadow 0.2s ease-in-out;
    color: #eba12a;
`

const StyledImage = styled.img`
    width: 20px;
    height: 20px;
`

const Nickname = styled(Typography)`
    font-family: Raleway, sans-serif;
    font-weight: 700;
    font-size: 13px;
`

interface MemberCardProps {
    name: string
    nickname: string
    role: string
    hover: string
}

const MemberCard: React.FC<MemberCardProps> = ({ name, nickname, role, hover }) => {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>()

    return (
        <StyledCard
            direction="row"
            gap={8}
            justify="space-between"
            align="center"
            ref={hoverRef}
        >
            <FlexWrapper direction="column" gap={5}>
                <Typography
                    type="BigBold"
                    color="Text.dark"
                    style={{ marginLeft: "4px" }}
                >
                    {name}
                </Typography>
                {isHovered && hover !== "" ? (
                    <Typography
                        type="Normal"
                        color="Text.light"
                        style={{ marginLeft: "4px" }}
                    >
                        {hover}
                    </Typography>
                ) : (
                    <FlexWrapper direction="row" gap={0}>
                        <StyledImage src="/sparcsLogo.svg" alt="Sparcs Logo" />
                        <Nickname type="Normal">{nickname}</Nickname>
                    </FlexWrapper>
                )}
            </FlexWrapper>
            {!(isHovered && hover !== "") && (
                <Typography type="Small" color="Text.placeholder">
                    {role}
                </Typography>
            )}
        </StyledCard>
    )
}

export default MemberCard
