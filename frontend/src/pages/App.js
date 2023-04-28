import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Wilder from '../components/Wilder';
import axios from 'axios';
import AddWilder from '../components/AddWilder';

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:8000/api/wilder");
      console.log(wilders.data);
      setWilders(wilders.data);
    };

    fetchData();
  }, []);

  return (
    <div>
    <header>
      <div className={styles.container}>
        <h1>Wilders Book</h1>
      </div>
    </header>
    <main className={styles.container}>
      <AddWilder />
      <h2>Wilders</h2>
      <section className={styles["card-row"]}>
        {wilders.map((wilder) => (
          <Wilder
            key={wilder.id}
            name={wilder.name}
            city={wilder.city}
            skills={wilder.skills}
          />
        ))}
      </section>
    </main>
    <footer>
      <div className={styles.container}>
        <p>&copy; 2022 Wild Code School</p>
      </div>
    </footer>
  </div>
  );
}

export default App;
