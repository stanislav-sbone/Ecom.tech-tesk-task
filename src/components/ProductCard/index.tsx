import type { FC } from 'react';
import styles from './ProductCard.module.css';
import { formatNumber } from '../../utils/formatNumber';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.price}>{formatNumber(product.price)} ₽</div>
      </div>
    </div>
  );
};

export default ProductCard;
