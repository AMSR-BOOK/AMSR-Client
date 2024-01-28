import React, { useState } from 'react';
import styles from './BookStateList.module.scss';
import BookCardMedium from '../card/BookCardMedium';

export default function BookStateList({ bookList }) {
  const [filter, setFilter] = useState('READING');
  const handleClick = (status) => {
    setFilter(status);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <button
          className={`${styles.btn} ${filter === 'READING' && styles.active}`}
          onClick={() => handleClick('READING')}
        >
          읽고 있는
        </button>
        <button
          className={`${styles.btn} ${filter === 'PAUSED' && styles.active}`}
          onClick={() => handleClick('PAUSED')}
        >
          잠시 멈춘
        </button>
        <button
          className={`${styles.btn} ${filter === 'WISH' && styles.active}`}
          onClick={() => handleClick('WISH')}
        >
          읽고 싶은
        </button>
        <button
          className={`${styles.btn} ${filter === 'STOPPED' && styles.active}`}
          onClick={() => handleClick('STOPPED')}
        >
          그만 읽을
        </button>
      </div>
      <ul className={styles.list}>
        {bookList.map(
          (book) =>
            book.status === filter && (
              <BookCardMedium book={book} key={book.isbn} />
            )
        )}
      </ul>
    </div>
  );
}
