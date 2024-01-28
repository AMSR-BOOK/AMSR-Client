import React from 'react';
import styles from './BookSide.module.scss';
import { useColor } from 'color-thief-react';

export default function BookSide({ book }) {
  const { title, frontCover, sideCover, pages, sizeHeight } = book;
  // 앞표지에서 색상 추출
  const { data } = useColor(frontCover, 'hex', {
    crossOrigin: 'anonymous',
  });

  return (
    <li className={styles.wrapper}>
      {sideCover !== '' ? (
        <img
          width={pages / 20}
          height={sizeHeight / 1.6}
          src={sideCover}
          alt={title}
          className={styles.img}
        />
      ) : (
        <div
          style={{
            width: `${pages / 20}px`,
            height: `${sizeHeight / 1.6}px`,
            backgroundColor: `${data}`,
            color: `${data && getTextColor(data)}`,
          }}
          className={styles.side}
        >
          <p style={{ fontSize: `${pages / 24}px` }} className={styles.title}>
            {title}
          </p>
        </div>
      )}
    </li>
  );
}

function getTextColor(color) {
  const r = parseInt(color.substring(1, 3), 16); // red
  const g = parseInt(color.substring(3, 5), 16); // green
  const b = parseInt(color.substring(5, 7), 16); // blue
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  return luma >= 125 ? 'black' : 'white'; // 색상 선택
}
