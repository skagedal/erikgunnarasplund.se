// src/i18n/getDictionary.ts
import "server-only";

export type Dictionary = {
  common: any;
  about?: any;
  works?: any;
  organization?: any;
  [key: string]: any;
};

const dictionaries = {
  en: () =>
    Promise.all([
      import("./locales/en/common.json").then((module) => module.default),
      import("./locales/en/about.json").then((module) => module.default),
      import("./locales/en/works.json").then((module) => module.default),
      import("./locales/en/organization.json").then((module) => module.default),
    ]).then(([common, about, works, organization]) => ({
      common,
      about,
      works,
      organization,
    })),
  sv: () =>
    Promise.all([
      import("./locales/sv/common.json").then((module) => module.default),
      import("./locales/sv/about.json").then((module) => module.default),
      import("./locales/sv/works.json").then((module) => module.default),
      import("./locales/sv/organization.json").then((module) => module.default),
    ]).then(([common, about, works, organization]) => ({
      common,
      about,
      works,
      organization,
    })),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return (dictionaries as any)[locale]();
};
