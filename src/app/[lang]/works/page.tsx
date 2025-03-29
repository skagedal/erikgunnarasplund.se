import Link from "next/link";
import styles from "./page.module.css";

export default function Works() {
  const works = [
    { title: "Stockholm Public Library", slug: "stockholm-public-library" },
    { title: "Kärrtorp School", slug: "karrtorp-school" },
    { title: "Villa Asplund", slug: "villa-asplund" },
    { title: "Nordiska Kompaniet", slug: "nordiska-kompaniet" },
  ];

  return (
    <main className={styles.main}>
      <h1>Gunnar Asplund's Major Works</h1>
      <ul className={styles.worksList}>
        {works.map((work) => (
          <li key={work.slug} className={styles.workItem}>
            <Link href={`/works/${work.slug}`}>
              {work.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}