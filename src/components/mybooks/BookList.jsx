import React from 'react';

export default function BookList({ bookList }) {
  return (
    <ul>
      {bookList.map((book) => (
        <li key={book.isbn}>
          {book.title} {book.star}
        </li>
      ))}
    </ul>
  );
}
