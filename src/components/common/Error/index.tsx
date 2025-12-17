import type { FC } from 'react';
import styles from './Error.module.css';

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.errorWrapper}>
        <p className={styles.text}>Произошла ошибка загрузки данных</p>
        <p className={styles.errorMessage}>{message}</p>
      </div>
    </div>
  );
};

export default Error;
