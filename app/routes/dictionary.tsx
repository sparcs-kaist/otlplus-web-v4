import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { useSearchParams } from "react-router"

import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
import CourseDetailSection from "@/features/dictionary/sections/CourseDetailSection"
import CourseListSection from "@/features/dictionary/sections/CourseListSection"
import { media } from "@/styles/themes/media"
import useIsDevice from "@/utils/useIsDevice"

const DictionaryWrapper = styled(FlexWrapper)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${media.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${media.mobile} {
        padding: 0 8px 12px 8px;
    }
`

const SectionWrapper = styled(Widget)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`

const CourseListSectionWrapper = styled(SectionWrapper)`
    max-width: 508px;
    flex: 1 1 0;

    ${media.tablet} {
        max-width: none;
    }
`

const CourseDetailSectionWrapper = styled(SectionWrapper)`
    flex: 1 1 0;
    max-width: 976px;

    ${media.tablet} {
        display: none;
    }
`

export default function DictionaryPage() {
    const isTablet = useIsDevice("tablet")
    const [searchParams] = useSearchParams()

    const [mobileModal, setMobileModal] = useState(false)

    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)
    useEffect(() => {
        const courseId = searchParams.get("courseId")
        if (courseId) {
            const courseIdNumber = parseInt(courseId, 10)
            if (!isNaN(courseIdNumber)) {
                setSelectedCourseId(courseIdNumber)
            } else {
                setSelectedCourseId(null)
            }
        }
    }, [])

    useEffect(() => {
        if (!isTablet) {
            setMobileModal(false)
        } else if (selectedCourseId !== null) {
            setMobileModal(true)
        }
    }, [isTablet])
    useEffect(() => {
        if (isTablet && selectedCourseId !== null) {
            setMobileModal(true)
        }
    }, [selectedCourseId])

    function closeMobileModal() {
        setMobileModal(false)
        setSelectedCourseId(null)
    }

    return (
        <DictionaryWrapper direction="row" align="stretch" justify="center" gap={12}>
            <CourseListSectionWrapper
                direction="column"
                align="stretch"
                gap={0}
                borderRadius={12}
            >
                <CourseListSection
                    selectedCourseId={selectedCourseId}
                    setSelectedCourseId={setSelectedCourseId}
                />
            </CourseListSectionWrapper>
            <CourseDetailSectionWrapper
                direction="column"
                align="stretch"
                gap={0}
                borderRadius={12}
            >
                <CourseDetailSection selectedCourseId={selectedCourseId} />
            </CourseDetailSectionWrapper>
            {isTablet && (
                <Modal
                    isOpen={mobileModal}
                    onClose={closeMobileModal}
                    header={false}
                    fullScreen={true}
                >
                    <CourseDetailSection
                        selectedCourseId={selectedCourseId}
                        isMobileModal={true}
                        onMobileModalClose={closeMobileModal}
                    />
                </Modal>
            )}
        </DictionaryWrapper>
    )
}
