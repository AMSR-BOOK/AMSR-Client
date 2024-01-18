import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('');
  const handleUpdate = (updatedPage) => setPage(updatedPage);

  return (
    <div className={styles.container}>
      <Header page={page} />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Navbar page={page} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
