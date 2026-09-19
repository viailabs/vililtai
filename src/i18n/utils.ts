import en from './en.json';
import zhTW from './zh-TW.json';
import zhCN from './zh-CN.json';

const translations: Record<string, any> = {
  en,
  'zh-TW': zhTW,
  'zh-CN': zhCN
};

export const defaultLocale = 'en';
export const locales = ['en', 'zh-CN', 'zh-TW'] as const;
export const localeNames: Record<string, string> = {
  'en': 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文'
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
