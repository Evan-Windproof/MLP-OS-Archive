import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';
import ja from './locales/ja.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

export const languages = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ja: '日本語',
  es: 'Español',
  fr: 'Français',
} as const;

export type Locale = keyof typeof languages;
export const locales = Object.keys(languages) as Locale[];
export const defaultLocale: Locale = 'en';

type Messages = Partial<Record<keyof typeof en, string>>;

const messages: Record<Locale, Messages> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  es,
  fr,
};

export function translate(locale: Locale) {
  return (key: keyof typeof en) => messages[locale]?.[key] || en[key];
}
