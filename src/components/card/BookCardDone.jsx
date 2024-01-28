import React from 'react';
import Star from '../star/Star';
import styles from './BookCardDone.module.scss';

export default function BookCardDone({ book }) {
  const { isbn, frontCover, title, star } = book;
  return (
    <li className={styles.book}>
      <img width={50} src={frontCover} alt={title} />
      <p className={styles.title}>{title}</p>
      <Star id={isbn} star={star} />
    </li>
  );
}
