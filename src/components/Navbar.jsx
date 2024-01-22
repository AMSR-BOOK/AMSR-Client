import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { IoSearchOutline } from 'react-icons/io5';
import { CgDisplayFullwidth } from 'react-icons/cg';
import { ImBooks } from 'react-icons/im';

export default function Navbar({ page }) {
  return (
    <nav className={styles.container}>
      <Link
        to="/search"
        className={page === 'search' ? styles.active : styles.link}
      >
        <IoSearchOutline />
      </Link>
      <Link
        to="/feed"
        className={page === 'feed' ? styles.active : styles.link}
      >
        <CgDisplayFullwidth />
      </Link>
      <Link
        to="/mybooks"
        className={page === 'mybooks' ? styles.active : styles.link}
      >
        <ImBooks />
      </Link>
    </nav>
  );
}
