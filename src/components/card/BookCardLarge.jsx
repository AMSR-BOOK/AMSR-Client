import React from 'react';
import StatusButton from '../button/StatusButton';
import LikeButton from '../button/LikeButton';

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

  return (
    <li>
      <img src={frontCover} alt="" />
      <h4>{title}</h4>
      <p>
        {`${authors[0]}
        ${authors.length > 1 || translators.length > 0 ? ' 외' : ''} | 
        ${publisher} | ${publishedDate}`}
      </p>
      <p>{pages}쪽</p>
      <LikeButton />
      <StatusButton />
    </li>
  );
}
