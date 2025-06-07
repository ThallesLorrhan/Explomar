import Header from "../components2/Header";
import Main from '../components2/Main';
import Footer from '../components2/Footer';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <div className={styles}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
