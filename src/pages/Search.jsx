import React, { useEffect, useState } from 'react';
import SearchResult from '../components/search/SearchResult';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss';
import { IoSearchOutline } from 'react-icons/io5';
import { BiSolidBookAdd } from 'react-icons/bi';

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
    <section className={styles.container}>
      <header className={styles.searchBox}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button>
            <IoSearchOutline />
          </button>
        </form>
        <button className={styles.addBtn}>
          <BiSolidBookAdd />
        </button>
      </header>
      {searchParams.get('key') && <SearchResult param={searchParams} />}
    </section>
  );
}
