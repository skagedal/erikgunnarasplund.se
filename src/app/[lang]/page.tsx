import styles from "./page.module.css";
import { getDictionary } from "@/i18n/getDictionary";

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <h1>{dict.about.title}</h1>
      <p>{dict.about.paragraph1}</p>
      <p>{dict.about.paragraph2}</p>
      <p>{dict.about.paragraph3}</p>
    </main>
  );
}
