import React from 'react';
import StatusButton from '../button/StatusButton';
import LikeButton from '../button/LikeButton';
import styles from './BookCardLarge.module.scss';

export default function BookCardLarge({ book }) {
  const {
    frontCover,
    title,
    authors,
    translators,
    publisher,
    publishedDate,
    pages,
    status,
  } = book;
  const handleClick = () => {
    // TO DO : 책 정보 페이지로 이동
  };

  return (
    <li onClick={handleClick} className={styles.book}>
      <img src={frontCover} alt="" />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>
          {`${authors[0]}
        ${authors.length > 1 || translators.length > 0 ? ' 외' : ''} | 
        ${publisher} | ${publishedDate}`}
        </p>
        <p className={styles.page}>{pages}쪽</p>
      </div>
      <LikeButton id={book.isbn} />
      <StatusButton status={status} />
    </li>
  );
}
