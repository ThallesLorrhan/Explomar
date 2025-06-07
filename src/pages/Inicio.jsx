import Header from '../components/Header';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import "../styles/inicio.css";

const Inicio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Offers />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Inicio;

