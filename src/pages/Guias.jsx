import Header from "../components2/Header";
import Footer from '../components2/Footer';
import GuiasTuristicos from "../components2/GuiasTuristicos";
import styles from '../styles/home.module.css';

const Guias = () => {
  return (
    <div className={styles}>
      <Header />
      <GuiasTuristicos />
      <Footer />
    </div>
  )
}

export default Guias
