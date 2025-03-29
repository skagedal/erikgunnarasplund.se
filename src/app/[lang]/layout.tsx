import type { Metadata } from "next";
import { Locale, locales } from "@/i18n/settings";
import { getDictionary } from "@/i18n/getDictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";
import { ReactNode } from "react";

// Update the type definition for params
export interface LayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  };
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);

  return {
    title: {
      default: "Gunnar Asplund",
      template: "%s | Gunnar Asplund",
    },
    description: dict.common.siteDescription,
    // other metadata
  };
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Make sure this is an async function that properly handles the params
export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <body>
        <Header lang={lang as Locale} dict={dictionary.common} />
        <main>{children}</main>
        <Footer lang={lang as Locale} dict={dictionary.common} />
      </body>
    </html>
  );
}
