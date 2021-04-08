import { FC } from 'react';

import styles from './Service.module.scss';

interface ServiceProps {
  name: string;
  details: string[];
}

const Service: FC<ServiceProps> = ({ details, name }) => {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <ul className={styles.list}>
        {details.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
    </article>
  );
};

export default Service;
