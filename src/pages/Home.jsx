import React from 'react';
import styles from './Home.module.scss';
import { useBookApi } from '../context/BookApiContext';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { book } = useBookApi();
  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: ['getReadingBooks'],
    queryFn: () => book.getReadingBooks(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.img}></div>
        <p className={styles.text}>
          <span className={styles.title}>아무소록</span>
          <span className={styles.subtitle}>아무때나 쓰는 작은 독서 기록</span>
        </p>
      </div>
    </div>
  );
}
