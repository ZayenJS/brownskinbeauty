import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/pages/Partenaires.module.scss';

import elikya from '../assets/images/elikya-beauty.jpg';
import glennys from '../assets/images/glennys-cosmetics.jpg';

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
          <Image src={elikya} alt="Elikya Beauty" width="" height="" />
          <Image src={glennys} alt="Glenny's Cosmetics" width="" height="" />
        </div>
      </section>
    </Layout>
  </>
);

export default Partenaires;
