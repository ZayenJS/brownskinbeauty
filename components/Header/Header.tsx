import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import Head from 'next/head';
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';

import { State } from '../../store/reducers';
import Link from 'next/link';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [state, setState] = useState({ isBurgerOpen: false });
  const router = useRouter();
  const { prevPage } = useSelector((state: State) => state.pages);

  let className;

  if (router.pathname !== '/') {
    if (prevPage === '/') className = styles.changing_from_root;
    else if (prevPage !== '/') className = styles.alternate;
  } else className = styles.original;

  return (
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
      <header className={[styles.header, className].join(' ')}>
        <div className={styles.header_content}>
          <div className={styles.brand}>
            <Link href="/">
              <a>
                <h1>Brownskin Beauty</h1>
              </a>
            </Link>
          </div>
          <nav className={styles.main_nav}>
            <Burger
              isOpen={state.isBurgerOpen}
              toggle={() =>
                setState((prevState) => ({ ...prevState, isBurgerOpen: !state.isBurgerOpen }))
              }
            />
            <Menu
              isOpen={state.isBurgerOpen}
              close={() => setState((prevState) => ({ ...prevState, isBurgerOpen: false }))}
            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
