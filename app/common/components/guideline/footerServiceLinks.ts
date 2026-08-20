import { OSEnum, type OSEnum as OperatingSystem } from "@/common/enum/osEnum"

const SERVICE_DOWNLOAD_LINKS = {
    ara: {
        apple: "https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",
        other: "https://play.google.com/store/apps/details?id=org.sparcs.newara",
    },
    buddy: {
        apple: "https://apps.apple.com/kr/app/buddy-for-kaist/id6749929416",
        other: "https://play.google.com/store/apps/details?id=org.sparcs.soap&hl=ko",
    },
    otl: {
        apple: "https://apps.apple.com/kr/app/otl/id1579878255",
        other: "https://play.google.com/store/apps/details?id=org.sparcs.otlplus",
    },
    taxi: {
        apple: "https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",
        other: "https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",
    },
} as const

type ServiceName = keyof typeof SERVICE_DOWNLOAD_LINKS

export function getServiceDownloadLink(
    service: ServiceName,
    os: OperatingSystem,
): string {
    const platform = os === OSEnum.IOS || os === OSEnum.MAC ? "apple" : "other"
    return SERVICE_DOWNLOAD_LINKS[service][platform]
}
