import React, { useEffect, useState } from 'react';

export default function BookStateList({ bookList }) {
  const [filter, setFilter] = useState('READING');
  const handleClick = (status) => {
    setFilter(status);
  };

  return (
    <div>
      <button onClick={() => handleClick('READING')}>읽고 있는</button>
      <button onClick={() => handleClick('PAUSED')}>잠시 멈춘</button>
      <button onClick={() => handleClick('WISH')}>읽고 싶은</button>
      <button onClick={() => handleClick('STOPPED')}>그만 읽을</button>
      {bookList.map(
        (book) =>
          book.status === filter && (
            <li key={book.isbn}>
              {book.title}{' '}
              {(book.status === 'READING' || book.status === 'PAUSED') &&
                book.readingPercent}
            </li>
          )
      )}
    </div>
  );
}
