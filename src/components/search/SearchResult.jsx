import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

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
        <ul>
          {results.data.map((book) => (
            <li key={book.isbn}>{book.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
