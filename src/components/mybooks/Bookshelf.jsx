import React from 'react';

export default function Bookshelf({ bookList }) {
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <li key={book.isbn}>
            {book.title} {book.sizeHeight}
          </li>
        ))}
      </ul>
    </div>
  );
}
