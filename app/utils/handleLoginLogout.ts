import { clientEnv } from "@/env"
import { axiosClient } from "@/libs/axios"
import { trackEvent } from "@/libs/mixpanel"
import { clearClientSession } from "@/utils/handleSessionExpired"
import { removeLocalStorageItem } from "@/utils/localStorage"

export function handleLogin() {
    document.cookie = "loginFromBeta=true; Domain=.otl.sparcs.org; Path=/"
    location.href = clientEnv.VITE_APP_API_URL + `/session/login`
}

export async function handleLogout() {
    await trackEvent("Sign Out")
    await clearClientSession()

    if (process.env.NODE_ENV === "production") {
        location.href =
            clientEnv.VITE_APP_API_URL + `/session/logout?next=${window.location.origin}`
    } else {
        removeLocalStorageItem("devStudentId")
        delete axiosClient.defaults.headers.common["X-AUTH-SID"]
        delete axiosClient.defaults.headers.common["X-SID-AUTH-TOKEN"]
        location.reload()
    }
}
