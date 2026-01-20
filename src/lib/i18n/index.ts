import { en, type Dictionary } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import { type Locale, defaultLocale, localeDirection } from "./config";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ar,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return localeDirection[locale];
}

export * from "./config";
export type { Dictionary };
