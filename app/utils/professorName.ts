import i18n from "i18next"

import { type Professor } from "@/common/schemas/professor"

function professorName(professors: Professor[]): string {
    if (!professors) return ""
    if (professors.length === 0) return ""
    return `${professors[0]?.name}${professors.length > 1 ? i18n.t("common.professors.over") + (professors.length - 1) + i18n.t("common.professors.people") : ""}`
}

export default professorName
