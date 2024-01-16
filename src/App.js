import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className={styles.container}>
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
