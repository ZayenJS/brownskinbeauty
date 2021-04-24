import Head from 'next/head';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import Service from '../components/Service/Service';
import styles from '../styles/pages/Services.module.scss';

interface ServicesProps {}

interface ServiceModel {
  name: string;
  imgUrl: string;
  details: string[];
  info?: string;
}

const Services: FC<ServicesProps> = () => {
  const services: ServiceModel[] = [
    {
      name: 'Recherche',
      imgUrl: '',
      details: [
        'Élaboration et rédaction du cahier des charges (il retranscrit avec précision vos attentes) et du rétroplanning',
        'sourcing des matières premières: recherche de nouveau actif et de nouvellesmatières innovantes en respectant votre budget et vos revendications',
      ],
    },
    {
      name: 'Conception',
      imgUrl: '',
      details: ['Formulation et soumission: recherche de la formule optimale'],
      info:
        'Je propose différentes possibilités en fonctions de vos besoins: formules surmesure ou reformulation de vos produits existants',
    },
    {
      name: 'Test et validation',
      imgUrl: '',
      details: [
        "suivi de stabilité et de compatibilité: c'est l'assurance de lastabilité et l'absence d'interactions avec le packaging final. Pourcela, on effectue un vieillissement accéléré du produit: 3 moispour simuler 3 ans",
        "évaluation de la sécurité et test nécessaire à la mise sur lemarché du produit cosmétique (test d'innocuité, testmicrobiologiques, test d'efficacité) ainsi qu'une évaluationtoxicologique réalisé par un toxicologue indépendant",
      ],
    },
    {
      name: 'Réglementation',
      imgUrl: '',
      details: [
        "Rédaction du DIP (Dossier Information Produit): c'est lacarte d'identité du produit à tenir à disposition desautorités compétentes",
        'enregistrement sur le portail européen',
        'accompagnement dans la rédaction des packagings',
      ],
    },
    {
      name: 'Fabrication et conditionnement',
      imgUrl: '',
      details: [
        "Transposition industriel avec fabrication d'un lot pilote de5kg afin de vérifier le transfert industriel de la formulevalidée avec vous",
        'Production et conditionnement des différentes texturessans minimum de commande dans le packaging de votrechoix: idéal pour réaliser des petites séries pour débuter',
        'Livraison des produits finis',
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
