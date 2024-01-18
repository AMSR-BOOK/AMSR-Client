import React, { useEffect, useState } from 'react';
import SearchResult from '../components/search/SearchResult';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKey, setSearchKey] = useState('');
  const key = searchParams.get('key');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ key: searchKey });
    console.log(searchParams.get('key'));
  };

  useEffect(() => setSearchKey(key), [key]);

  return (
    <section>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button>검색</button>
        </form>
        <button>직접 추가</button>
      </header>
      {searchParams.get('key') && <SearchResult param={searchParams} />}
    </section>
  );
}
