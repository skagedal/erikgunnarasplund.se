import React from "react";
import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.button}>
        Prev
      </button>
      <div className={styles.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button onClick={nextSlide} className={styles.button}>
        Next
      </button>
    </div>
  );
};

export default Carousel;