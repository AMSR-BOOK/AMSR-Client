import React, { useState } from 'react';
import BookStateList from '../components/mybooks/BookStateList';
import Bookshelf from '../components/mybooks/Bookshelf';
import BookList from '../components/mybooks/BookList';
import LikeBookList from '../components/mybooks/LikeBookList';
import { useBookApi } from '../context/BookApiContext';
import { useQuery } from '@tanstack/react-query';
import styles from './MyBooks.module.scss';

export default function MyBooks() {
  const [viewList, setViewList] = useState(false);
  const { book } = useBookApi();
  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: ['mybooks'],
    queryFn: () => book.myBooks(),
  });

  const doneList = results && results.filter((book) => book.status === 'DONE');

  const maxWidth = window.innerWidth - 48;
  const [width, setWidth] = useState(0);

  return (
    <div className={styles.container}>
      {isLoading && <p>loading...</p>}
      {error && <p>error</p>}
      {results && (
        <>
          <BookStateList bookList={results} />
          <div className={styles.shelf}>
            <div className={styles.wrapper}>
              <h3>완독한 책</h3>
              <div className={styles.btnGroup}>
                <button
                  className={`${styles.btn} ${
                    viewList ? styles.normal : styles.selected
                  }`}
                  onClick={() => setViewList(false)}
                >
                  책장
                </button>
                <button
                  className={`${styles.btn} ${
                    viewList ? styles.selected : styles.normal
                  }`}
                  onClick={() => setViewList(true)}
                >
                  리스트
                </button>
              </div>
            </div>

            {viewList ? (
              <BookList bookList={doneList} />
            ) : (
              <Bookshelf bookList={doneList} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
