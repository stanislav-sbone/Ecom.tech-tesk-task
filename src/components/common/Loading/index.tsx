import type { FC } from 'react';
import styles from './Loading.module.css';

const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingWrapper}>
        <svg
          width="75"
          height="75"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.spinner}
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
            stroke-dashoffset="0"
            stroke-linecap="round"
            className={styles.circle}
          />
        </svg>
        <p className={styles.text}>Выгружаем товары на полки</p>
      </div>
    </div>
  );
};

export default Loading;
