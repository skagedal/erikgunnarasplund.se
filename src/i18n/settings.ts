export const defaultLocale = "en";
export const locales = ["en", "sv"];

export type Locale = (typeof locales)[number];

export const localeNames = {
  en: "English",
  sv: "Svenska",
};
