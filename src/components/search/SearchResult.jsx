import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BookCardLarge from '../card/BookCardLarge';
import styles from './SearchResult.module.scss';
import { useBookApi } from '../../context/BookApiContext';

export default function SearchResult({ param }) {
  const [keyword, setKeyword] = useState(param.get('key'));
  const { book } = useBookApi();
  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => book.search(keyword),
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {results && (
        <ul className={styles.list}>
          {results.map((book) => (
            <BookCardLarge key={book.isbn} book={book} />
          ))}
        </ul>
      )}
    </>
  );
}
