//ref: https://easonchang0115.github.io/blogs/frontEnd/2021/20210625_1.html
import { createI18n } from 'vue-i18n'

import { tw } from '../locales/tw'
import { en } from '../locales/en'

//https://vue-i18n.intlify.dev/guide/advanced/typescript.html#type-safe-resources-with-schema
type MessageSchema = typeof tw

interface localeSelectionData {
    LocaleValue: string
    LocaleName: string
    IsDisabled: boolean
}

const SupportLocales: Array<localeSelectionData> = [
    { LocaleName: 'English', LocaleValue: 'en', IsDisabled: false },
    { LocaleName: '繁中', LocaleValue: 'tw', IsDisabled: false },
    { LocaleName: '简中', LocaleValue: 'cn', IsDisabled: true },
]

const i18n = createI18n<[MessageSchema], 'tw' | 'en'>({
    legacy: false,
    locale: 'tw',
    fallbackLocale: 'en',
    messages: {
        tw,
        en,
    },
})

export { i18n, SupportLocales }
