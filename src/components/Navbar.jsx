import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { IoSearchOutline } from 'react-icons/io5';
import { HiHome } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';
// feed icon : import { CgDisplayFullwidth } from 'react-icons/cg';

export default function Navbar({ page }) {
  return (
    <nav className={styles.container}>
      <Link
        to="/search"
        className={page === 'search' ? styles.active : styles.link}
      >
        <IoSearchOutline />
      </Link>
      <Link to="/" className={page === 'home' ? styles.active : styles.link}>
        <HiHome />
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
