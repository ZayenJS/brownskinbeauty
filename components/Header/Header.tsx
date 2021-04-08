import { FC } from 'react';
import styles from './Header.module.scss';
import Head from 'next/head';
import Menu from './Menu/Menu';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <>
    <Head>
      <link rel="canonical" href="http://www.brownskinbeauty.fr/" />
      <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-156091955-1"></script>
      <script src="public/js/google-analytics.min.js" defer></script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Allura|Signika:400,700&display=swap"
      />
    </Head>
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.brand}>
          <h1>Brownskin Beauty</h1>
        </div>
        <nav className={styles.main_nav}>
          <div className={styles.mobile_nav}>
            <div className={styles.brand}>
              <h1>Brownskin Beauty</h1>
            </div>
            <div className={styles.toggle_button__container}>
              <div onClick={() => ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <Menu />
        </nav>
      </div>
    </header>
  </>
);

export default Header;
