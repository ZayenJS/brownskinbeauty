import React, { FC } from 'react';

import styles from './ProductsOffer.module.scss';
interface ProductsOfferProps {}

interface ProductModel {
  names: string[];
  imgUrl: string;
  category: string;
}

const ProductsOffer: FC<ProductsOfferProps> = () => {
  const products: ProductModel[] = [
    {
      names: ['crème', 'gel', 'lotion'],
      imgUrl: '',
      category: 'soin',
    },
    {
      names: ['fond de teint', 'mascara', 'poudre'],
      imgUrl: '',
      category: 'maquillage',
    },
    {
      names: ['shampooing', 'conditionneur', 'huile'],
      imgUrl: '',
      category: 'capillaire',
    },
    {
      names: ['gel douche', 'savons'],
      imgUrl: '',
      category: 'hygiène',
    },
    {
      names: [],
      imgUrl: '',
      category: 'solaire',
    },
  ];
  return (
    <div className={styles.container}>
      <h3>Offre de produits</h3>
      <ul>
        {products.map((product) => (
          <li>
            <img src={product.imgUrl} alt="" />
            <span>
              {product.category}
              {product.names.length ? `: ${product.names.join(', ')}...` : ''}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOffer;
