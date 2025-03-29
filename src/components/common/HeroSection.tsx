import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to the World of Gunnar Asplund</h1>
        <p>
          Discover the life and works of one of Sweden's most influential
          architects.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
