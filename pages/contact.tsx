import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import Loader from '../components/Loader/Loader';
import Field from '../containers/Field';
import { sendContactMessage } from '../store/actions';
import { State } from '../store/reducers';
import styles from '../styles/pages/Contact.module.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const [state, setState] = useState({ isLoading: true });
  const { email, firstName, lastName, message, serverResponse } = useSelector(
    (state: State) => state.forms,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (serverResponse) setState((prevState) => ({ ...prevState, isLoading: false }));
  }, [serverResponse]);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setState((prevState) => ({ ...prevState, isLoading: true }));
    dispatch(sendContactMessage());
  };

  return (
    <>
      <Head>
        <title>Brownskin Beauty | Contact</title>
      </Head>
      <Layout>
        <section className={styles.contact__container}>
          <div className={styles.contact__form__container}>
            <h2>Nous contacter</h2>
            <form onSubmit={formSubmitHandler} className={styles.contact__form}>
              <Field
                className={lastName ? styles.not_empty : ''}
                name="lastName"
                id="lastName"
                label="Nom"
                reducerName="forms"
              />
              <Field
                className={firstName ? styles.not_empty : ''}
                name="firstName"
                id="firstName"
                label="Prénom"
                reducerName="forms"
              />
              <Field
                className={email ? styles.not_empty : ''}
                name="email"
                id="email"
                label="Email"
                reducerName="forms"
                type="email"
              />
              <Field
                className={message ? styles.not_empty : ''}
                name="message"
                id="message"
                label="Message"
                reducerName="forms"
                type="textarea"
              />

              {state.isLoading ? (
                <span className={styles.btn_loading}>
                  <Loader />
                </span>
              ) : (
                <button type="submit" className={styles.btn}>
                  Envoyer
                </button>
              )}
              <p className={styles.form__message}></p>
            </form>
          </div>
          <div className={styles.contact}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.5548340781424!2d2.3807895158186634!3d48.65663082284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5df1d2683df6b%3A0x891bc3e3f712f5fd!2s15%20Rue%20de%20la%20Mare%20aux%20Moines%2C%2091350%20Grigny!5e0!3m2!1sfr!2sfr!4v1578704825575!5m2!1sfr!2sfr"
              className={styles.map}></iframe>
            <div className={styles.brownskin_contact}>
              <p>Mme Olivia PAUL</p>
              <address>
                15 rue de la mare aux moines, <br />
                91350 GRIGNY
              </address>
              <a href="tel:+33646359024" className={[styles.btn, styles.call].join(' ')}>
                Appeler
              </a>
              <p className={styles.tel}>+33 (0)6 46 35 90 24</p>
              {/* <img src="/public/images/logo-brand.png" alt="logo" /> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
