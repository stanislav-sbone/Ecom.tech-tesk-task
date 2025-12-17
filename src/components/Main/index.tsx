import { useEffect, useState, type FC } from 'react';
import styles from './Main.module.css';
import { fetchProducts } from '../../services/api';
import type { Product } from '../../types/product';
import ProductCard from '../ProductCard';
import Loading from '../common/Loading';

const Main: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <Loading />
      </main>
    );
  }

  return (
    <main className={styles.main}>
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
