import React from 'react';
import styles from './Header.module.scss';
import { IoSettingsSharp } from 'react-icons/io5';

export default function Header({ page }) {
  const handleTranslate = (pageTitle) => {
    switch (pageTitle) {
      case 'search':
        return '검색';
      case 'feed':
        return '피드';
      case 'mybooks':
        return '내 책장';
      case 'setting':
        return '설정';
      default:
        return '검색';
    }
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{handleTranslate(page)}</h1>
      <IoSettingsSharp className={styles.setting} />
    </header>
  );
}
