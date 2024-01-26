import React from 'react';
import BookCardDone from '../card/BookCardDone';
import styles from './BookList.module.scss';

export default function BookList({ bookList }) {
  return (
    <ul className={styles.container}>
      {bookList.map((book) => (
        <BookCardDone book={book} />
      ))}
    </ul>
  );
}
