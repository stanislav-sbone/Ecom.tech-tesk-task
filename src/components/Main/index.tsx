import type { FC } from 'react';
import styles from './Main.module.css';

const Main: FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <h2 className={styles.title}>Каталог товаров электротехники</h2>
        <div>список товаров</div>
      </div>
    </main>
  );
};

export default Main;
