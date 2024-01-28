import React, { useState } from 'react';
import BookSide from './BookSide';
import styles from './Bookshelf.module.scss';

export default function Bookshelf({ bookList }) {
  return (
    <ul className={styles.list}>
      {bookList.map((book) => (
        <BookSide book={book} key={book.isbn} />
      ))}
    </ul>
  );
}
