import React, { FC } from 'react';

import styles from './Footer.module.scss';
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <span>
        &copy; 2020
        <span className="footer-brand">BrownSkin Beauty</span>
      </span>
    </footer>
  );
};

export default Footer;
