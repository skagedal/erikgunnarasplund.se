import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/common/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className={styles.main}>
        <h1>Erik Gunnar Asplund</h1>
        <p>
          Erik Gunnar Asplund (22 September 1885 – 20 October 1940) was a
          Swedish architect, mostly known as a key representative of Nordic
          Classicism of the 1920s, and during the last decade of his life as a
          major proponent of the modernist style which made its breakthrough in
          Sweden at the Stockholm International Exhibition (1930) marking the
          definitive end of Nordic Classicism.
        </p>
      </main>
    </>
  );
}
