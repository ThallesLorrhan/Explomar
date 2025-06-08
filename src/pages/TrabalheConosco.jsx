import Header from "../components2/Header";
import Footer from '../components2/Footer';
import styles from '../styles/home.module.css';
import TConosco from "../components2/TConosco";

const TrabalheConosco = () => {
  return (
    <div className={styles}>
      <Header />
      <TConosco />
      <Footer />
    </div>
  )
}

export default TrabalheConosco
