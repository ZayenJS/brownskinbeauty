import Head from 'next/head';
import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/pages/Contact.module.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <>
    <Head>
      <title>Brownskin Beauty | Contact</title>
    </Head>
    <Layout></Layout>
  </>
);

export default Contact;
