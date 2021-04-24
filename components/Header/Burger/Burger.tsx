import React, { FC, useState } from 'react';

import styles from './Burger.module.scss';
interface BurgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Burger: FC<BurgerProps> = ({ isOpen, toggle }) => {
  return (
    <div className={[styles.container, isOpen ? styles.open : ''].join(' ')} onClick={toggle}>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Burger;
