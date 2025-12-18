import type { FC, MouseEvent } from 'react';
import styles from './ProductModal.module.css';
import type { Product } from '../../types/product';
import { formatNumber } from '../../utils/formatNumber';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: FC<ProductModalProps> = ({ product, onClose }) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={(e) => handleBackdropClick(e)}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentGroup}>
            <div className={styles.label}>{product.category}</div>
            <h3 className={styles.title}>{product.title}</h3>
          </div>
          <div className={styles.contentGroup}>
            <div className={styles.label}>Описание</div>
            <p className={styles.description}>{product.description}</p>
          </div>
          <div className={styles.priceRow}>
            <p className={styles.price}>{formatNumber(product.price)} ₽</p>
            <button className={styles.buyButton}>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
