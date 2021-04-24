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
    <Layout>
      <section className={styles.news}>
        <h2>Nos actualités</h2>
        <div className={styles.news__items}>
          <article>
            <a
              href="https://www.actubeauty.com/brownskin-beauty-la-societe-francaise-specialisee-dans-la-formulation-des-produits-cosmetiques-pour-la-peau-noire/"
              target="_blank"
              rel="noopener noreferer">
              <div className={styles.img}></div>
              <p>
                Brownskin Beauty, la société française spécialisée dans la formulation des produits
                cosmétiques pour la peau noire.
              </p>
            </a>
          </article>
          <article>
            <a
              href="https://cosmetics.specialchem.com/tech-library/article/key-considerations-while-formulating-for-dark-skin"
              target="_blank"
              rel="noopener noreferer">
              <div className={styles.img}></div>
              <p>Formulating for Dark Skin: What Are the Key Considerations?</p>
            </a>
          </article>
        </div>
      </section>
    </Layout>
  </>
);

export default Actualite;
