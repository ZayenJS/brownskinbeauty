import Link from 'next/link';
import { FC } from 'react';

import styles from './Headline.module.scss';

interface HeadlineProps {}

const Headline: FC<HeadlineProps> = () => (
  <div className={styles.container}>
    <div className={styles.cta}>
      <p>Formulez vos envies...</p>
      <div className={styles.btns_container}>
        <Link href="/presentation">
          <a className={[styles.btn_inverse, styles.know_more].join(' ')}>En savoir plus</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Headline;
