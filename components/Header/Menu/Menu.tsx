import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../../store/actions';
import { State } from '../../../store/reducers';

import styles from './Menu.module.scss';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  console.log({ router });

  const changePrevPage = () => {
    dispatch(changePage(router.pathname));
  };

  const { prevPage } = useSelector((state: State) => state.pages);

  let className;

  if (router.pathname !== '/') {
    if (prevPage === '/') {
      className = styles.changing_from_root;
    } else if (router.pathname !== '/' && prevPage !== '/') {
      className = styles.alternate;
    }
  } else {
    className = styles.original;
  }

  return (
    <ul className={styles.menu}>
      <li onClick={changePrevPage} className={styles.item}>
        <Link href="/">
          <a className={[styles.link, className].join(' ')}>Accueil</a>
        </Link>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <Link href="/presentation">
          <a className={[styles.link, className].join(' ')}>Présentation</a>
        </Link>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <Link href="/services">
          <a className={[styles.link, className].join(' ')}>Services</a>
        </Link>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <Link href="/partenaires">
          <a className={[styles.link, className].join(' ')}>Partenaires</a>
        </Link>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <Link href="/actualites">
          <a className={[styles.link, className].join(' ')}>Actualités</a>
        </Link>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <Link href="/contact">
          <a className={[styles.link, className].join(' ')}>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
