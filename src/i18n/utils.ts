import en from './en.json';
import zhCN from './zh-CN.json';
import zhTW from './zh-TW.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import ja from './ja.json';
import ko from './ko.json';
import vi from './vi.json';
import it from './it.json';
import pt from './pt.json';

const translations: Record<string, any> = {
  'en': en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'es': es,
  'fr': fr,
  'de': de,
  'ja': ja,
  'ko': ko,
  'vi': vi,
  'it': it,
  'pt': pt
};

export const defaultLocale = 'en';
export const locales = ['en', 'zh-CN', 'zh-TW', 'es', 'fr', 'de', 'ja', 'ko', 'vi', 'it', 'pt'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<string, string> = {
  'en': 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'ja': '日本語',
  'ko': '한국어',
  'vi': 'Tiếng Việt',
  'it': 'Italiano',
  'pt': 'Português'
};

export function getLocaleFromUrl(url: URL): string {
  const seg = url.pathname.split('/')[1];
  if (seg && seg in translations) return seg;
  return defaultLocale;
}

export function t(locale: string): any {
  return translations[locale] || translations[defaultLocale];
}

export function getLocalePath(locale: string, path: string): string {
  const clean = path.replace(/^\//, '');
  if (locale === defaultLocale) return `/${clean}`;
  return `/${locale}/${clean}`;
}
