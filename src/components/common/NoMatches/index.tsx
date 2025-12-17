import type { FC } from 'react';
import styles from './NoMatches.module.css';

const NoMatches: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.noMatchesWrapper}>
        <img src="/assets/sad-face.png" alt="" className={styles.image} />
        <p className={styles.text}>Ничего не найдено</p>
      </div>
    </div>
  );
};

export default NoMatches;
