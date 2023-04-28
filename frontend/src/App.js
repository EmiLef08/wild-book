import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Wilder from './components/Wilder';
import axios from 'axios';

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:3000/api/wilders");
      console.log(wilders.data);
      setWilders(wilders.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        {wilders.map((wilder) => (
          <Wilder key={wilder.id}
          name={wilder.name}
          city={wilder.city}
          skills={wilder.skills}
          />
        ))}
        </main>
        <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
