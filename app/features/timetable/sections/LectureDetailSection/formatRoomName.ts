import type { ClassTime } from "@/common/schemas/lecture"

export default function formatRoomName(classes: ClassTime[]): string {
    let res: Record<string, string> = {}
    classes.forEach((classTime) => {
        const building = classTime.buildingCode
        const room = classTime.roomName
        if (!(building in res)) {
            res[building] = room
        } else {
            if (!res[building].includes(room)) {
                res[building] = res[building].concat(`, ${room}`)
            }
        }
    })
    return Object.entries(res)
        .map(([building, room]) => `(${building}) ${room}`)
        .join(" / ")
}
