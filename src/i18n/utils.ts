// Documentation: https://docs.astro.build/en/recipes/i18n/

import { I18N } from '~/utils/config';
import { languages, textDirections, ui } from './ui';

export function getLangFromUrl(url: URL): object {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return { language: lang as keyof typeof ui };
  return {
    language: I18N.language,
    textDirection: textDirections[lang] || I18N.textDirection,
  };
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[I18N.language]) {
    return (ui[lang] && ui[lang][key]) || ui[I18N.language][key];
  };
}

export function translatePath(path: string, l: string) {
  return !I18N.showDefaultLanguageInURL && l === I18N.language ? path : `/${l}${path}`;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return (path: string, l: string = lang) => translatePath(path, l);
}
