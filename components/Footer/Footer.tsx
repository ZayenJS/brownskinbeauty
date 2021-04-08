import React, { FC } from 'react';
import { useRouter } from 'next/router';

import styles from './Footer.module.scss';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const router = useRouter();
  const { prevPage } = useSelector((state: State) => state.pages);

  let className;

  if (router.pathname !== '/') {
    if (prevPage === '/') className = styles.changing_from_root;
    else if (prevPage !== '/') className = styles.alternate;
  } else className = styles.original;

  console.log(router);

  return (
    <footer className={[styles.footer, className].join(' ')}>
      <span>
        &copy; 2020
        <span className={styles.footer_brand}>BrownSkin Beauty</span>
      </span>
    </footer>
  );
};

export default Footer;
