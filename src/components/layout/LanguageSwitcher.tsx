"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";
import { Dictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/settings";

type LanguageSwitcherProps = {
  lang: string;
  dict: Dictionary["common"];
};

const LanguageSwitcher = ({ lang, dict }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  // Ensure pathname is a string and locales is properly typed
  const pathStr = pathname || "";
  const otherLocale = locales.find((locale) => locale !== lang) || "en";

  // Replace the current locale in the pathname with the other locale
  const redirectPathname = pathStr.replace(
    new RegExp(`^/${lang}`),
    `/${otherLocale}`
  );

  return (
    <Link href={redirectPathname} className={styles.languageSwitcher}>
      {dict.switchLanguage}
    </Link>
  );
};

export default LanguageSwitcher;
