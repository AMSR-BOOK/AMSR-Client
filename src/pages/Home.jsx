import React from 'react';
import styles from './Home.module.scss';
import { useBookApi } from '../context/BookApiContext';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import BookCardMedium from '../components/card/BookCardMedium';
import { IoIosArrowForward } from 'react-icons/io';

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
          <span className={styles.txtLarge}>아무소록</span>
          <span className={styles.txtMedium}>아무때나 쓰는 작은 독서 기록</span>
        </p>
      </div>
      {results && results.length > 0 && (
        <div className={styles.books}>
          <div className={styles.titleBar}>
            <h3 className={styles.title}>읽고 있는 책</h3>
            <Link to="/mybooks" className={styles.arrow}>
              <IoIosArrowForward />
            </Link>
          </div>

          <div className={styles.list}>
            {results.map((book) => (
              <BookCardMedium book={book} />
            ))}
          </div>
        </div>
      )}
      <div className={styles.reading}>
        <h3 className={styles.title}>독서를 시작해보세요</h3>
        {error ||
          (results && results.length === 0 && (
            <Link to="/search" className={styles.btn}>
              책 추가하기 📚
            </Link>
          ))}
        {results && results.length > 0 && (
          <div className={styles.btnGroup}>
            <Link to="/" className={styles.btn}>
              책 읽기 📖
            </Link>
            <Link to="/" className={styles.btn}>
              기록하기 🖋️
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
