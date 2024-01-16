import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
