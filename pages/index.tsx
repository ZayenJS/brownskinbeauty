import Head from 'next/head';
import { FC } from 'react';
import Headline from '../components/Headline/Headline';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Brownskin Beauty | Accueil</title>
      </Head>
      <Layout>
        <Headline />
      </Layout>
    </>
  );
};

export default Home;
