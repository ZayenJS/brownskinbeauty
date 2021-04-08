import Head from 'next/head';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/pages/Actualite.module.scss';

interface ActualiteProps {}

const Actualite: FC<ActualiteProps> = () => (
  <>
    <Head>
      <title>Brownskin Beauty | Actualités</title>
    </Head>
    <Layout></Layout>
  </>
);

export default Actualite;
