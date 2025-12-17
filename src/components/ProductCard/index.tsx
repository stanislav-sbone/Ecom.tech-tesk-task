import type { FC } from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>{price} ₽</div>
      </div>
    </div>
  );
};

export default ProductCard;
