import React from 'react';
import styles from './BookCardMedium.module.scss';

export default function BookCardMedium({ book }) {
  const { isbn, frontCover, title, status, readingPercent } = book;

  return (
    <li key={isbn} className={styles.book}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={frontCover} alt={title} />
        {(status === 'READING' || status === 'PAUSED') && (
          <div className={styles.bar}>
            <div
              className={styles.progress}
              style={{ width: `${readingPercent}%` }}
            ></div>
          </div>
        )}
      </div>
      <p className={styles.title}>{title}</p>
    </li>
  );
}
