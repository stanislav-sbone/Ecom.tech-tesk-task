import type { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Тестовое задание | Stanislav Borisenko | 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
