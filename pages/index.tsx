import Head from 'next/head';
import Headline from '../components/Headline/Headline';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

const Home = () => (
  <>
    <Head>
      <title>Brownskin Beauty | Accueil</title>
    </Head>
    <Layout>
      <Headline />
    </Layout>
  </>
);

export default Home;
