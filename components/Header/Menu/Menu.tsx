import Link from 'next/link';
import { FC } from 'react';

import styles from './Menu.module.scss';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>Accueil</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/presentation">
          <a className={styles.link}>Présentation</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/services">
          <a className={styles.link}>Services</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/partenaires">
          <a className={styles.link}>Partenaires</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/actualités">
          <a className={styles.link}>Actualités</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
