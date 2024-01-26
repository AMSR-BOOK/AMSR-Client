import React from 'react';
import styles from './BookSide.module.scss';

export default function BookSide({ book }) {
  const { title, sideCover, pages, sizeHeight } = book;
  return (
    <>
      {sideCover !== '' ? (
        <img
          width={pages / 20}
          height={sizeHeight / 1.6}
          src={sideCover}
          alt={title}
        />
      ) : (
        <div
          style={{
            width: `${pages / 20}px`,
            height: `${sizeHeight / 1.6}px`,
            backgroundColor: `#aaa`,
          }}
          className={styles.side}
        >
          {pages / 24 >= 8 && (
            <p style={{ fontSize: `${pages / 24}px` }} className={styles.title}>
              {title}
            </p>
          )}
        </div>
      )}
    </>
  );
}
