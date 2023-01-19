import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import jp from "@/locales/jp.json";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    jp,
  },
});
