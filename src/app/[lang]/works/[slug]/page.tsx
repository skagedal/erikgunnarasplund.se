import styles from "./page.module.css";

// This is how you get params in App Router
export default function WorkPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Function to format slug for display (replace hyphens with spaces and capitalize)
  const formatTitle = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.workPage}>
      <h1>{formatTitle(slug)}</h1>
      <p className={styles.description}>
        Detailed information about this architectural work will be displayed
        here.
      </p>
      <div className={styles.carousel}>
        {/* Carousel component to display images of the work */}
        <div className={styles.carouselPlaceholder}>
          Image carousel will be implemented here
        </div>
      </div>
    </div>
  );
}
