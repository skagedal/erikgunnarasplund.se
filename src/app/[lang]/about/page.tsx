import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About Gunnar Asplund</h1>
      <p>
        Gunnar Asplund (22 September 1885 – 20 October 1940) was a prominent
        Swedish architect known for his significant contributions to modern
        architecture. His work is characterized by a blend of Nordic Classicism
        and modernist principles, which he adeptly combined to create timeless
        structures.
      </p>
      <p>
        Asplund's most notable works include the Stockholm Public Library, which
        showcases his innovative approach to space and light, and the Woodland
        Cemetery, a UNESCO World Heritage site that reflects his deep
        understanding of landscape and architecture.
      </p>
      <p>
        Throughout his career, Asplund was influential in shaping the
        architectural landscape of Sweden and beyond, leaving a legacy that
        continues to inspire architects and designers today.
      </p>
    </main>
  );
}
