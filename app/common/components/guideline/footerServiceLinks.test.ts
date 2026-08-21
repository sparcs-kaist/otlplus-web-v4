import { describe, expect, it } from "vitest"

import { OSEnum } from "@/common/enum/osEnum"

import { getServiceDownloadLink } from "./footerServiceLinks"

describe("getServiceDownloadLink", () => {
    it("uses App Store links on Apple platforms", () => {
        expect(getServiceDownloadLink("otl", OSEnum.IOS)).toContain("apps.apple.com")
        expect(getServiceDownloadLink("taxi", OSEnum.MAC)).toContain("apps.apple.com")
    })

    it("uses Play Store links on other platforms", () => {
        expect(getServiceDownloadLink("ara", OSEnum.ANDROID)).toContain("play.google.com")
        expect(getServiceDownloadLink("buddy", OSEnum.PC)).toContain("play.google.com")
    })
})
