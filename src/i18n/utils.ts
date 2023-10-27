// Documentation: https://docs.astro.build/en/recipes/i18n/

import {
  defaultLanguage,
  defaultTextDirection,
  languages,
  showDefaultLanguage,
  textDirections,
  ui,
} from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return { language: lang as keyof typeof ui };
  return {
    language: defaultLanguage,
    textDirection: textDirections[lang] || defaultTextDirection,
  };
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang] && ui[lang][key] || ui[defaultLanguage][key];
  };
}

export function translatePath(path: string, l: string = lang) {
  return !showDefaultLanguage && l === defaultLanguage ? path : `/${l}${path}`;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return (path: string, l: string = lang) => translatePath(path, l);
}
