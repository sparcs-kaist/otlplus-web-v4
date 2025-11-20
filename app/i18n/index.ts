import { i18nEn as i18nEnBundle } from "./locales/en"
import { i18nKo as i18nKoBundle } from "./locales/ko"

export const i18nBase = {
    common: i18nKoBundle,
}

export type I18nBase = typeof i18nBase

export const i18nKo: I18nBase = {
    common: i18nKoBundle,
}

export const i18nEn: I18nBase = {
    common: i18nEnBundle,
}

export const namespaces = Object.keys(i18nBase)

export const resources = {
    ko: i18nKo,
    en: i18nEn,
}
