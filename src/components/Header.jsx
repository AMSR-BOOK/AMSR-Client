import React from 'react';
import styles from './Header.module.scss';
import { IoSettingsSharp, IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Header({ page }) {
  const navigate = useNavigate();
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
        return '아무소록';
    }
  };

  return (
    <header className={styles.container}>
      <IoChevronBackOutline
        className={`${styles.back} ${page === 'home' && styles.noEffect}`}
        onClick={() => navigate(-1)}
      />
      <h1 className={styles.title}>{handleTranslate(page)}</h1>
      <IoSettingsSharp className={styles.setting} />
    </header>
  );
}
