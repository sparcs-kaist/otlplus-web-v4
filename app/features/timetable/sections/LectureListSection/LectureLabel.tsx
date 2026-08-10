import Typography from "@/common/primitives/Typography"

import formatLectureLabel from "./formatLectureLabel"

interface LectureLabelProps {
    classNo: string
    subtitle: string
}

export default function LectureLabel({ classNo, subtitle }: LectureLabelProps) {
    const label = formatLectureLabel(classNo, subtitle)
    if (label === "") return null

    return (
        <Typography type="NormalBold" color="Text.default">
            {label}
        </Typography>
    )
}
