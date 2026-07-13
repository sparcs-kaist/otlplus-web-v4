import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Modal from "@/common/components/Modal"
import Typography from "@/common/primitives/Typography"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { getPlatform } from "@/utils/getPlatform"

const ShortcutRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Line.default};
    &:last-child {
        border-bottom: none;
    }
`

const KeycapContainer = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
`

const Keycap = styled.kbd`
    height: 18px;
    display: inline-block;
    padding: 3px 6px;
    font-size: 11px;
    line-height: 10px;
    color: ${({ theme }) => theme.colors.Text.default};
    vertical-align: middle;
    background-color: ${({ theme }) => theme.colors.Background.Block.dark};
    border: solid 1px ${({ theme }) => theme.colors.Line.default};
    border-bottom-color: ${({ theme }) => theme.colors.Line.default};
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 ${({ theme }) => theme.colors.Line.default};
`

const SectionTitle = styled(Typography)`
    margin-top: 16px;
    margin-bottom: 8px;
`

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    width: 800px;
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function KeyboardShortcutModal() {
    const { t } = useTranslation()
    const isShortcutModalOpen = useTimetableUIStore((s) => s.isShortcutModalOpen)
    const setIsShortcutModalOpen = useTimetableUIStore((s) => s.setIsShortcutModalOpen)

    const platform = getPlatform()
    const isApple = platform === "ios" || platform === "mac"
    const mod = isApple ? "⌘ Cmd" : "Ctrl"

    if (!isShortcutModalOpen) return null

    return (
        <Modal
            isOpen={isShortcutModalOpen}
            onClose={() => setIsShortcutModalOpen(false)}
            title={t("timetable.shortcuts.modalTitle")}
        >
            <GridLayout>
                <SectionContainer>
                    <SectionTitle
                        type="BiggerBold"
                        color="Text.default"
                        style={{ marginTop: 0 }}
                    >
                        {t("timetable.shortcuts.lectureSection")}
                    </SectionTitle>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.lectureMultiple")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>/<Keycap>Shift</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.lectureCopy")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>C</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.lectureCut")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>X</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.lecturePaste")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>V</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.lectureAll")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>A</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.lectureDelete")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>Delete</Keycap>/<Keycap>Backspace</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                </SectionContainer>

                <SectionContainer>
                    <SectionTitle
                        type="BiggerBold"
                        color="Text.default"
                        style={{ marginTop: 0 }}
                    >
                        {t("timetable.shortcuts.timetableSection")}
                    </SectionTitle>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.timetableUndo")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>Z</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.timetableRedo")}
                        </Typography>
                        <KeycapContainer>
                            {!isApple && (
                                <>
                                    <Keycap>{mod}</Keycap>
                                    <Keycap>Y</Keycap>/
                                </>
                            )}
                            <Keycap>{mod}</Keycap>
                            <Keycap>Shift</Keycap>
                            <Keycap>Z</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.timetableAdd")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>M</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.timetableDuplicate")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>D</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.timetableDelete")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>Delete</Keycap>/<Keycap>Backspace</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.timetableSelect")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>1 ~ 9</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                </SectionContainer>
            </GridLayout>

            <SectionTitle
                type="BiggerBold"
                color="Text.default"
                style={{ marginTop: 24 }}
            >
                {t("timetable.shortcuts.etcSection")}
            </SectionTitle>
            <GridLayout>
                <SectionContainer>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.etcSemester")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>[ / ]</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.etcLectureSearchMove")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>↑ / ↓</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.etcLectureAddDelete")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>Space / Enter</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                </SectionContainer>
                <SectionContainer>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.etcSelectCancel")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>Esc</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                    <ShortcutRow>
                        <Typography type="Normal" color="Text.default">
                            {t("timetable.shortcuts.etcShortcutInfo")}
                        </Typography>
                        <KeycapContainer>
                            <Keycap>{mod}</Keycap>
                            <Keycap>/</Keycap>
                        </KeycapContainer>
                    </ShortcutRow>
                </SectionContainer>
            </GridLayout>
        </Modal>
    )
}

export default KeyboardShortcutModal
