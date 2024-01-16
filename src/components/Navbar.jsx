import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { IoSearchOutline } from 'react-icons/io5';
import { CgDisplayFullwidth } from 'react-icons/cg';
import { ImBooks } from 'react-icons/im';

export default function Navbar({ page, onUpdate }) {
  return (
    <nav className={styles.container}>
      <Link
        to="/search"
        className={page === 'search' ? styles.active : styles.link}
        onClick={() => {
          onUpdate('search');
        }}
      >
        <IoSearchOutline />
      </Link>
      <Link
        to="/feed"
        className={page === 'feed' ? styles.active : styles.link}
        onClick={() => {
          onUpdate('feed');
        }}
      >
        <CgDisplayFullwidth />
      </Link>
      <Link
        to="/mybooks"
        className={page === 'mybooks' ? styles.active : styles.link}
        onClick={() => {
          onUpdate('mybooks');
        }}
      >
        <ImBooks />
      </Link>
    </nav>
  );
}
