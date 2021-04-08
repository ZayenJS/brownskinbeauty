import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/pages/Partenaires.module.scss';

interface PartenairesProps {}

const Partenaires: FC<PartenairesProps> = () => (
  <>
    <Head>
      <title>Brownskin Beauty | Partenaires</title>
    </Head>
    <Layout>
      <section className={styles.partners}>
        <h2>Ils nous font confiance</h2>
        <div className={styles.brands}>
          <Image src="/images/elikya-beauty.jpg" alt="Elikya Beauty" width="" height="" />
          <Image src="/images/glennys-cosmetics.jpg" alt="Glenny's Cosmetics" width="" height="" />
        </div>
      </section>
    </Layout>
  </>
);

export default Partenaires;
