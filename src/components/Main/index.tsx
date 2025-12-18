import { useEffect, useState, type FC } from 'react';
import styles from './Main.module.css';
import { fetchProducts } from '../../services/api';
import type { Product } from '../../types/product';
import ProductCard from '../ProductCard';
import Loading from '../common/Loading';
import Error from '../common/Error';
import ProductFilter from '../ProductFilter';
import NoMatches from '../common/NoMatches';

interface MainProps {
  onProductClick: (product: Product) => void;
}

const Main: FC<MainProps> = ({ onProductClick }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, errorMessage: '' });
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (e) {
        setError({
          isError: true,
          errorMessage: String(e),
        });
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredProducts(products);
    }

    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, products]);

  if (loading) {
    return (
      <main className={styles.main}>
        <Loading />
      </main>
    );
  }

  if (error.isError) {
    return (
      <main className={styles.main}>
        <Error message={error.errorMessage} />
      </main>
    );
  }

  if (filteredProducts.length === 0 && filter.length > 0) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <ProductFilter filter={filter} setFilter={setFilter} />
          <h2 className={styles.title}>Каталог товаров</h2>
          <NoMatches />
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ProductFilter filter={filter} setFilter={setFilter} />
        <h2 className={styles.title}>Каталог товаров</h2>
        <div className={styles.productsList}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
