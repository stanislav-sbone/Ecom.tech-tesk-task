import type { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          TechnoBuy
        </a>
      </div>
    </header>
  );
};

export default Header;
