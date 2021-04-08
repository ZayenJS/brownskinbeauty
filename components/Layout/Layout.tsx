import { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
