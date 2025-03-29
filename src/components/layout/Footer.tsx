import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Gunnar Asplund Website. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/works">Works</a></li>
          <li><a href="/organization">Organization</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;