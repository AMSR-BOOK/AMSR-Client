import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  const [page, setPage] = useState('');
  const handleUpdate = (updatedPage) => setPage(updatedPage);

  return (
    <div className={styles.container}>
      <Header page={page} />
      <Outlet />
      <Navbar page={page} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
