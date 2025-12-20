import type { ClassTime } from "@/common/schemas/lecture";

export default function formatRoomName(classes: ClassTime[]): string {
    let res: Record<string, string> = {};
    classes.forEach((classTime) => {
        const building = classTime.buildingCode;
        const place = classTime.placeName;
        if (!(building in res)) {
            res[building] = place;
        } else {
            if (!res[building].includes(place)) {
                res[building] = res[building].concat(`, ${place}`);
            }
        }
    });
    return Object.entries(res)
        .map(([building, place]) => `(${building}) ${place}`)
        .join(" / ");
}