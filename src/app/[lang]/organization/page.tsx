import React from "react";
import styles from "./page.module.css";

const OrganizationPage = () => {
  return (
    <main className={styles.main}>
      <h1>Organization Dedicated to Gunnar Asplund</h1>
      <p>
        The organization dedicated to preserving the legacy of Gunnar Asplund
        aims to promote awareness and appreciation of his contributions to
        architecture and design. Through various initiatives, we strive to
        educate the public about his works and influence on modern architecture.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to safeguard the architectural heritage left by Gunnar
        Asplund and to inspire future generations of architects and designers.
        We organize events, exhibitions, and educational programs to highlight
        his innovative designs and philosophies.
      </p>
      <h2>Get Involved</h2>
      <p>
        Join us in our efforts to celebrate Gunnar Asplund's legacy. Whether
        you are an architecture enthusiast, a student, or simply someone who
        appreciates great design, there are many ways to get involved. Visit
        our website for more information on upcoming events and membership
        opportunities.
      </p>
    </main>
  );
};

export default OrganizationPage;