import type { Dispatch, FC, SetStateAction } from 'react';
import styles from './ProductFilter.module.css';

interface ProductFilterProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const ProductFilter: FC<ProductFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Введите название товара"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.input}
      />
      {filter.length > 0 && (
        <button className={styles.clearButton} onClick={() => setFilter('')}>
          ×
        </button>
      )}
    </div>
  );
};

export default ProductFilter;
