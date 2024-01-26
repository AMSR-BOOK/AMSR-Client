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
              <button onClick={() => setViewList(!viewList)}>
                {viewList ? '책장' : '리스트'}
              </button>
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
