import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const [page, setPage] = useState('');

  useEffect(() => {
    const path = location.pathname.split('/');
    setPage(path[1]);
  }, [location]);

  return (
    <div className={styles.container}>
      <Header page={page} />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Navbar page={page} />
    </div>
  );
}

export default App;
