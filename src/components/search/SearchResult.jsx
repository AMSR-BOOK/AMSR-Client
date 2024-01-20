import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import BookCardLarge from '../card/BookCardLarge';
import styles from './SearchResult.module.scss';

export default function SearchResult({ param }) {
  const [keyword, setKeyword] = useState(param.get('key'));
  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => axios.get('/data/searchResult.json'),
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {results && (
        <ul className={styles.list}>
          {results.data.map((book) => (
            <BookCardLarge key={book.isbn} book={book} />
          ))}
        </ul>
      )}
    </>
  );
}
