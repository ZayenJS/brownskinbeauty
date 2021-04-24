import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../../store/actions';
import { State } from '../../../store/reducers';
import NavLink from '../../NavLink/NavLink';

import styles from './Menu.module.scss';

interface MenuProps {
  isOpen: boolean;
  close: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, close }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const changePrevPage = () => {
    close();
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
    <ul className={[styles.menu, isOpen ? styles.opened : styles.closed].join(' ')}>
      <li onClick={changePrevPage} className={styles.item}>
        <NavLink activeClassName={styles.active_alternate} href="/">
          <a className={[styles.link, className].join(' ')}>Accueil</a>
        </NavLink>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <NavLink activeClassName={styles.active} href="/presentation">
          <a className={[styles.link, className].join(' ')}>Présentation</a>
        </NavLink>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <NavLink activeClassName={styles.active} href="/services">
          <a className={[styles.link, className].join(' ')}>Services</a>
        </NavLink>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <NavLink activeClassName={styles.active} href="/partenaires">
          <a className={[styles.link, className].join(' ')}>Partenaires</a>
        </NavLink>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <NavLink activeClassName={styles.active} href="/actualites">
          <a className={[styles.link, className].join(' ')}>Actualités</a>
        </NavLink>
      </li>
      <li onClick={changePrevPage} className={styles.item}>
        <NavLink activeClassName={styles.active} href="/contact">
          <a className={[styles.link, className].join(' ')}>Contact</a>
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
