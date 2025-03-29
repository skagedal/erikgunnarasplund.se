import Link from "next/link";
import { Locale } from "@/i18n/settings";
import { Dictionary } from "@/i18n/getDictionary";

// Add proper type definition for props
type NavigationProps = {
  lang: Locale;
  dict: Dictionary["common"];
};

const Navigation = ({ lang, dict }: NavigationProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={`/${lang}`}>{dict.navigation.home}</Link>
        </li>
        <li>
          <Link href={`/${lang}/about`}>{dict.navigation.about}</Link>
        </li>
        <li>
          <Link href={`/${lang}/works`}>{dict.navigation.works}</Link>
        </li>
        <li>
          <Link href={`/${lang}/organization`}>
            {dict.navigation.organization}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
