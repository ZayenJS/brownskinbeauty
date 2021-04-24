import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import ProductsOffer from '../components/ProductsOffer/ProductsOffer';
import styles from '../styles/pages/Presentation.module.scss';

import img1 from '../assets/images/makeup-1.jpg';
import img2 from '../assets/images/makeup-2.jpg';
import img3 from '../assets/images/makeup-3.jpg';

interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => (
  <>
    <Head>
      <title>Brownskin Beauty | Présentation</title>
    </Head>
    <Layout>
      <section className={styles.presentation}>
        <header>
          <h2>Qui sommes-nous?</h2>
          <h3>
            BrownSkin Beauty vous accompagnera dansl'ensemble de vos projets cosmétique enapportant
            son expertise des peaux noires, mateset métissées
          </h3>
        </header>
        <div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Image src={img1} alt="cosmétiques" width="200" height="200" />
              <p>
                Vous souhaitez lancer votre propre marque decosmétiques répondant à vos besoins et
                vosvaleurs
              </p>
            </li>
            <li className={styles.item}>
              <Image src={img2} alt="maquillage" width="200" height="200" />
              <p>Optimiser la création et le développement de vos produits</p>
            </li>
            <li className={styles.item}>
              <Image
                src={img3}
                alt="processus de fabrication cosmétique"
                width="200"
                height="200"
              />
              <p>Résoudre les problèmes de formulation, deréglementation ou encore de production</p>
            </li>
          </ul>
          <ProductsOffer />
          <p className={styles.CEO}>
            <em>
              Fort de plus de 10 années d'expériencedans le domaine de la cosmétique et plusde 8
              années dans la formulation desproduits pour les peaux noires, je vousaccompagne pour
              donner vie à tous vosprojets cosmétiques.A votre écoute, je m'adapterais à vosbesoins
              spécifiques en vous offrant unservice sur mesure
            </em>
          </p>
        </div>
      </section>
    </Layout>
  </>
);

export default Presentation;
