import React from 'react';
import styles from './Header.module.scss';
import { IoSettingsSharp } from 'react-icons/io5';

export default function Header({ page }) {
  return (
    <div className={styles.container}>
      <h1>{page}</h1>
      <IoSettingsSharp />
    </div>
  );
}
