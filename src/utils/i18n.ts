import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTraslation from '../locales/en.json'
import jpTraslation from '../locales/jp.json'

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTraslation
            },
            jp: {
                translation: jpTraslation
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

    export default i18next;