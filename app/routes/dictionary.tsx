import { useCallback, useEffect } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router"

import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
import CourseDetailSection from "@/features/dictionary/sections/CourseDetailSection"
import CourseListSection from "@/features/dictionary/sections/CourseListSection"
import {
    getDictionarySelection,
    normalizeDictionarySearchParams,
    setDictionaryCourse,
    setDictionaryProfessor,
} from "@/features/dictionary/utils/dictionarySearchParams"
import { trackEvent } from "@/libs/mixpanel"
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

    ${media.mobile} {
        padding: 16px 12px;
    }
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
    const { t } = useTranslation()
    const [searchParams, setSearchParams] = useSearchParams()
    const { courseId: selectedCourseId, professorId: selectedProfessorId } =
        getDictionarySelection(searchParams)

    useEffect(() => {
        trackEvent("Page View", { page: "Dictionary" })
    }, [])

    useEffect(() => {
        const normalized = normalizeDictionarySearchParams(searchParams)
        if (normalized.toString() !== searchParams.toString()) {
            setSearchParams(normalized, { replace: true })
        }
    }, [searchParams, setSearchParams])

    const setSelectedCourseId = useCallback(
        (courseId: number | null) => {
            setSearchParams((params) => setDictionaryCourse(params, courseId))
        },
        [setSearchParams],
    )
    const setSelectedProfessorId = useCallback(
        (professorId: number | null) => {
            setSearchParams((params) => setDictionaryProfessor(params, professorId))
        },
        [setSearchParams],
    )
    const closeMobileModal = useCallback(() => {
        setSelectedCourseId(null)
    }, [setSelectedCourseId])

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
                <CourseDetailSection
                    selectedCourseId={selectedCourseId}
                    selectedProfessorId={selectedProfessorId}
                    setSelectedProfessorId={setSelectedProfessorId}
                />
            </CourseDetailSectionWrapper>
            {isTablet && (
                <Modal
                    ariaLabel={t("header.dictionary")}
                    isOpen={selectedCourseId !== null}
                    onClose={closeMobileModal}
                    header={false}
                    fullScreen={true}
                >
                    <CourseDetailSection
                        selectedCourseId={selectedCourseId}
                        selectedProfessorId={selectedProfessorId}
                        setSelectedProfessorId={setSelectedProfessorId}
                        isMobileModal={true}
                        onMobileModalClose={closeMobileModal}
                    />
                </Modal>
            )}
        </DictionaryWrapper>
    )
}
