import Head from 'next/head';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import Service from '../components/Service/Service';
import styles from '../styles/pages/Services.module.scss';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  const services = [
    {
      name: 'Création et développement',
      details: [
        'Élaboration du cahier des charges',
        'Choix et validation des galéniques et actifs',
        'Formulation à façon',
        'Suivi des stabilités et compatibilités',
        'Reformulation et amélioration de produits existants',
      ],
    },
    {
      name: 'Réglementaire',
      details: [
        'Rédaction du DIP',
        'Notification électronique',
        'Lancement et gestion des différents tests (challenge test, innocuité, …)',
        'Rédaction de la liste INCI',
      ],
    },
    {
      name: 'Transposition industrielle',
      details: [
        'Participation à la rédaction du mode opératoire',
        'Supervision des 1ers lots industriels',
        'Fabrication et conditionnement de petits lots pilotes',
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Brownskin Beauty | Services</title>
      </Head>
      <section className={styles.services}>
        <h2>Nos services</h2>
        <p>
          Vous avez besoin d’aide dans le domaine de la cosmétique pour peaux noires, mates et
          métissés, BrownSkin Beauty suit chaque étape de la création de vos produits, du
          développement à la petite fabrication.
        </p>
        <div className={styles.cards_container}>
          {services.map((service) => (
            <Service details={service.details} name={service.name} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
