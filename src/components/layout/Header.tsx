import { Locale } from "@/i18n/settings";
import { Dictionary } from "@/i18n/getDictionary";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary["common"];
};

const Header = ({ lang, dict }: HeaderProps) => {
  return (
    <header>
      <div className="logo">
        <a href={`/${lang}`}>Gunnar Asplund</a>
      </div>
      <Navigation lang={lang} dict={dict} />
      <LanguageSwitcher lang={lang} dict={dict} />
    </header>
  );
};

export default Header;
