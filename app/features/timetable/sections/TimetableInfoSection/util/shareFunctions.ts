import { CanvasRenderingContext2D, createCanvas, loadImage } from "canvas"
import ical, { ICalAlarmType, ICalEventRepeatingFreq } from "ical-generator"

import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import { colors } from "@/styles/themes/_base/variables/colors"
import { darkThemeColors } from "@/styles/themes/dark/variables/colors"
import professorName from "@/utils/professorName"

import { isExpectedClipboardError } from "./clipboardErrors"

interface RoundedRectangleOptions {
    ctx: CanvasRenderingContext2D
    x: number
    y: number
    width: number
    height: number
    radius: number
    color: string
}

interface TextOptions {
    ctx: CanvasRenderingContext2D
    x: number
    y: number
    text: string
    font: string
    fontSize: number
    color: string
    align?: "right" | "left" | "center"
}

interface DrawTileOptions {
    ctx: CanvasRenderingContext2D
    x: number
    y: number
    width: number
    height: number
    title: string
    professor: string
    location: string
    font: string
    fontSize: number
    displayMode: "dark" | "light"
}

interface DrawTimetableDatas {
    timetableName: string
    lectures: Lecture[]
    customBlocks: CustomBlock[]
    timetableType: string
    semesterName: string
    semesterFontSize: number
    tileFontSize: number
    displayMode: "dark" | "light"
    language: "ko" | "en"
}

function getTimetableExportEntries(lectures: Lecture[], customBlocks: CustomBlock[]) {
    return [
        ...lectures.flatMap((lecture) =>
            lecture.classes.map((classtime) => ({
                ...classtime,
                title: lecture.name,
                professor: professorName(lecture.professors),
                location: `${classtime.buildingCode} ${classtime.roomName}`.trim(),
                colorIndex: lecture.courseId,
            })),
        ),
        ...customBlocks.map((block) => ({
            day: block.day,
            begin: block.begin,
            end: block.end,
            title: block.block_name,
            professor: "",
            location: block.place,
            colorIndex: block.id * 3 + 7,
        })),
    ]
}

function drawRoundedRectangle(options: RoundedRectangleOptions) {
    const { ctx, x, y, width, height, radius, color } = options
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
    ctx.fill()
}

function sliceTextToFitWidth(
    text: string,
    maxWidth: number,
    font: string,
    fontSize: number,
): string[] {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return []
    ctx.font = `${fontSize}px ${font}`

    let currentLine = ""
    const lines = []

    for (const char of text) {
        const testLine = currentLine + char
        const metrics = ctx.measureText(testLine)
        const testWidth = metrics.width
        if (testWidth > maxWidth && currentLine !== "") {
            lines.push(currentLine)
            currentLine = char
        } else {
            currentLine = testLine
        }
    }

    if (currentLine) {
        lines.push(currentLine)
    }

    return lines
}

function drawText(options: TextOptions) {
    const { ctx, x, y, text, font, fontSize, color, align = "left" } = options
    ctx.fillStyle = color
    ctx.font = `${fontSize}px ${font}`
    ctx.textAlign = align || "left"
    ctx.fillText(text, x, y)
}

function drawTile(options: DrawTileOptions) {
    const {
        ctx,
        x,
        y,
        width,
        height,
        title,
        professor,
        location,
        font,
        fontSize,
        displayMode,
    } = options
    const slicedTitle = sliceTextToFitWidth(title, width, font, fontSize)
    const slicedProfessor = sliceTextToFitWidth(professor, width, font, fontSize)
    const slicedLocation = sliceTextToFitWidth(location, width, font, fontSize)

    const slices: string[] = [
        ...slicedTitle,
        ...slicedLocation,
        ...slicedProfessor,
    ].slice(0, 3)

    const textTotalHeight = slices.reduce((total, slice, _index) => {
        if (slice === "") return total + 2
        return total + fontSize
    }, 0)

    const topPad = (height - textTotalHeight) / 2
    let offsetY = topPad + fontSize - 7

    slices.forEach((slice, index) => {
        if (slice !== "") {
            drawText({
                ctx,
                x,
                y: y + offsetY,
                text: slice,
                font,
                fontSize,
                color:
                    index < slicedTitle.length
                        ? "#000000"
                        : displayMode === "dark"
                          ? "#4C4C4C"
                          : "#888888",
            })
            offsetY += fontSize + 5
        } else {
            offsetY += 2
        }
    })
}

async function timeTableImage(drawTimetableData: DrawTimetableDatas) {
    const {
        timetableName,
        lectures,
        customBlocks,
        timetableType,
        semesterName,
        semesterFontSize,
        tileFontSize,
        displayMode,
        language,
    } = drawTimetableData

    const TIMETABLE_CELL_COLORS = Object.values(
        displayMode === "dark"
            ? darkThemeColors.Tile.TimeTable.default
            : colors.Tile.TimeTable.default,
    ).flatMap((colorGroup) => Object.values(colorGroup)) as string[]

    const imageTemplatePath = `timetable_template/Image_template_${timetableType}_${displayMode}_${language}.png`

    const baseImg = new Image()
    baseImg.src = imageTemplatePath
    await new Promise((resolve, reject) => {
        baseImg.onload = resolve
        baseImg.onerror = reject
    })

    const baseImage = await loadImage(imageTemplatePath)
    const canvas = createCanvas(baseImage.width, baseImage.height)
    const ctx = canvas.getContext("2d")
    ctx.drawImage(baseImage, 0, 0)

    drawText({
        ctx,
        x: timetableType === "5days" ? 952 : 1302,
        y: 78,
        text: semesterName + " " + timetableName,
        font: "'Noto Sans KR', Pretendard, sans-serif",
        fontSize: semesterFontSize,
        color: "#CCCCCC",
        align: "right",
    })

    for (const entry of getTimetableExportEntries(lectures, customBlocks)) {
        const color =
            TIMETABLE_CELL_COLORS[entry.colorIndex % TIMETABLE_CELL_COLORS.length] ||
            "#F2CECE"
        const [x, y, width, height] = [
            178 * entry.day + 76,
            (entry.begin * 4) / 3 - 486,
            178 - 7,
            ((entry.end - entry.begin) * 4) / 3 - 7,
        ]

        drawRoundedRectangle({ ctx, x, y, width, height, radius: 4, color })
        drawTile({
            ctx,
            x: x + 12,
            y: y + 8,
            width: width - 24,
            height: height - 16,
            title: entry.title,
            professor: entry.professor,
            location: entry.location,
            font: "'Noto Sans KR', Pretendard, sans-serif",
            fontSize: tileFontSize,
            displayMode,
        })
    }
    return canvas
}

export async function downloadTimetableImage(drawTimetableData: DrawTimetableDatas) {
    const canvas = await timeTableImage(drawTimetableData)
    const dataUrl = canvas.toDataURL("image/png")
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = `${drawTimetableData.timetableName}.png`
    a.click()
    URL.revokeObjectURL(dataUrl)
}

export async function copyTimetableImageToClipboard(
    drawTimetableData: DrawTimetableDatas,
): Promise<boolean> {
    const canvas = await timeTableImage(drawTimetableData)

    const dataUrl = canvas.toDataURL("image/png")
    const response = await fetch(dataUrl)
    const blob = await response.blob()

    if (!navigator.clipboard?.write) return false

    const item = new ClipboardItem({ "image/png": blob })
    try {
        await navigator.clipboard.write([item])
        return true
    } catch (error) {
        if (isExpectedClipboardError(error)) return false
        throw error
    }
}

interface Semester {
    beginning: Date
    end: Date
}

export function downloadTimetableCalendar(timetableIcalData: {
    name: string
    lectures: Lecture[]
    customBlocks: CustomBlock[]
    semesterObject: Semester
}) {
    const { name, lectures, customBlocks, semesterObject } = timetableIcalData

    const calendar = ical({
        name,
        prodId: "//SPARCS//OTL Plus",
        timezone: "Asia/Seoul",
    })

    for (const entry of getTimetableExportEntries(lectures, customBlocks)) {
        const semesterBeginning = new Date(semesterObject.beginning)
        const dayOfWeek = (entry.day + 1) % 7

        const firstClassDate = new Date(semesterBeginning)
        const currentDay = firstClassDate.getDay()
        const distance = (dayOfWeek + 7 - currentDay) % 7
        firstClassDate.setDate(firstClassDate.getDate() + distance)

        const eventStart = new Date(firstClassDate)
        eventStart.setHours(Math.floor(entry.begin / 60), entry.begin % 60, 0, 0)

        const eventEnd = new Date(firstClassDate)
        eventEnd.setHours(Math.floor(entry.end / 60), entry.end % 60, 0, 0)

        const event = calendar.createEvent({
            start: eventStart,
            end: eventEnd,
            summary: entry.title,
            location: entry.location,
            repeating: {
                freq: ICalEventRepeatingFreq.WEEKLY,
                until: new Date(semesterObject.end),
            },
            timezone: "Asia/Seoul",
        })

        event.alarms([{ type: ICalAlarmType.display, trigger: 900 }])
    }

    const blob = new Blob([calendar.toString()], { type: "text/calendar;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${name}.ics`
    a.click()
    URL.revokeObjectURL(url)
}
