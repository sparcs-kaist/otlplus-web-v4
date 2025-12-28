import { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import HallOfFameFeedSection from "@/features/main/sections/HallOfFameFeedSection"
import LikedMajorFeedSection from "@/features/main/sections/LikedMajorFeedSection"
import RecentFeedSection from "@/features/main/sections/RecentFeedSection"
import useIsDevice from "@/utils/useIsDevice"

const MobileReviewSlideSectionWrapper = styled(FlexWrapper)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`

const SlideTrack = styled(FlexWrapper)<{
    index: number
    transition: string
    offset: number
}>`
    width: 500%;
    height: 100%;
    transition: ${({ transition }) => transition};
    transform: translateX(
        calc(${({ index }) => `-${index * 20}%`} + ${({ offset }) => `${offset}px`})
    );
`

const SlideItem = styled(FlexWrapper)`
    width: 20%;
`

const NavButton = styled.div<{ position: "left" | "right" }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ position }) => (position === "left" ? "left: 8px;" : "right: 8px;")}
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
`

export default function MobileReviewSlideSection() {
    const theme = useTheme()
    const isMobile = useIsDevice("mobile")

    const [currentIndex, setCurrentIndex] = useState(1)
    const [transition, setTransition] = useState("transform 0.3s ease-in-out")
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Touch handling state
    const [touchStartX, setTouchStartX] = useState<number | null>(null)
    const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null)
    const [dragOffset, setDragOffset] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const handlePrev = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTransition("transform 0.3s ease-in-out")
        setCurrentIndex((prev) => prev - 1)
    }

    const handleNext = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTransition("transform 0.3s ease-in-out")
        setCurrentIndex((prev) => prev + 1)
    }

    useEffect(() => {
        if (!isTransitioning) return

        const transitionTime = 300

        const timeout = setTimeout(() => {
            if (currentIndex === 0) {
                setTransition("none")
                setCurrentIndex(3)
            } else if (currentIndex === 4) {
                setTransition("none")
                setCurrentIndex(1)
            }
            setIsTransitioning(false)
        }, transitionTime)

        return () => clearTimeout(timeout)
    }, [currentIndex, isTransitioning])

    // Touch Event Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        if (isTransitioning) return

        const touch = e.touches[0]
        if (!touch) return
        setTouchStartX(touch.clientX)
        setTouchCurrentX(touch.clientX)
        setTransition("none") // Disable transition during drag
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX === null) return
        const touch = e.touches[0]
        if (!touch) return
        setTouchCurrentX(touch.clientX)
        const currentDrag = touch.clientX - touchStartX
        setDragOffset(currentDrag)
    }

    const handleTouchEnd = () => {
        if (touchStartX === null || touchCurrentX === null) return

        const dragDistance = touchCurrentX - touchStartX
        const threshold = 50 // Minimum distance to trigger slide

        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance > 0) {
                handlePrev()
            } else {
                handleNext()
            }
        } else {
            // Snap back if threshold not met
            setTransition("transform 0.3s ease-in-out")
        }

        // Reset touch state
        setTouchStartX(null)
        setTouchCurrentX(null)
        setDragOffset(0)

        // If we didn't trigger a slide (handlePrev/Next sets transition), ensure we restore transition for snap back
        if (Math.abs(dragDistance) <= threshold) {
            setTransition("transform 0.3s ease-in-out")
        }
    }

    return (
        <MobileReviewSlideSectionWrapper
            direction="column"
            gap={0}
            align="stretch"
            justify="stretch"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            flex={isMobile ? "1 1 auto" : "1 1 0"}
        >
            <SlideTrack
                direction="row"
                gap={0}
                align="stretch"
                justify="stretch"
                index={currentIndex}
                transition={transition}
                offset={dragOffset}
            >
                {[
                    <HallOfFameFeedSection key="clone-last" />,
                    <RecentFeedSection key="recent" />,
                    <LikedMajorFeedSection key="liked" />,
                    <HallOfFameFeedSection key="hall" />,
                    <RecentFeedSection key="clone-first" />,
                ].map((component, idx) => (
                    <SlideItem direction="row" align="stretch" gap={0} key={idx}>
                        {component}
                    </SlideItem>
                ))}
            </SlideTrack>

            <NavButton position="left">
                <IconButton onClick={handlePrev}>
                    <Icon size={20} color={theme.colors.Text.default} onClick={() => {}}>
                        <ChevronLeftIcon />
                    </Icon>
                </IconButton>
            </NavButton>

            <NavButton position="right">
                <IconButton onClick={handleNext}>
                    <Icon size={20} color={theme.colors.Text.default} onClick={() => {}}>
                        <ChevronRightIcon />
                    </Icon>
                </IconButton>
            </NavButton>
        </MobileReviewSlideSectionWrapper>
    )
}
