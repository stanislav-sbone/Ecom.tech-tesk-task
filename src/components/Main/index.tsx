import { useEffect, useState, type FC } from 'react';
import styles from './Main.module.css';
import { fetchProducts } from '../../services/api';
import type { Product } from '../../types/product';
import ProductCard from '../ProductCard';

const Main: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <h2 className={styles.title}>Каталог товаров</h2>
        <div className={styles.productsList}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
