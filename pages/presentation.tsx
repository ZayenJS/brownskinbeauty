import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/pages/Presentation.module.scss';

interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => (
  <>
    <Head>
      <title>Brownskin Beauty | Présentation</title>
    </Head>
    <Layout>
      <section className={styles.presentation}>
        <h2>Qui sommes-nous?</h2>
        <h3>BrownSkin Beauty souhaite accompagner ses clients</h3>
        <p>
          particuliers ou professionnels en apportant une expertise cosmétique pour les peaux
          noires, mates et métissées.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={'/images/makeup-1.jpg'} alt="cosmétiques" width="" height="" />
            <p>
              Pour lancer votre propre marque de cosmétique correspondant à vos besoins et valeurs
            </p>
          </li>
          <li className={styles.item}>
            <Image src={'/images/makeup-2.jpg'} alt="maquillage" width="" height="" />
            <p>Optimiser la création et le développement de vos produits</p>
          </li>
          <li className={styles.item}>
            <Image
              src={'/images/makeup-3.jpg'}
              alt="processus de fabrication cosmétique"
              width=""
              height=""
            />
            <p>
              Résoudre les problèmes de formulation, de réglementaire ou encore de fabrications
              produit
            </p>
          </li>
        </ul>
        <p className={styles.CEO}>
          <em>
            Olivia PAUL : Ingénieure chimiste formée à l’ESCOM, spécialisée dans le domaine de la
            cosmétique depuis plus de 10 ans et plus particulièrement dans la formulation des
            produits pour les peaux noires, mates et métissées.
          </em>
        </p>
      </section>
    </Layout>
  </>
);

export default Presentation;
