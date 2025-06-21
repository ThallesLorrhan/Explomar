import React from 'react';
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav-container">
            <div className="logo">EXPLOMAR</div>
            <div className="nav-links">
                <a href="Pages/home.html">Início</a>
                <a href="#Destinos">Destinos</a>
                <a href="#sobre">Sobre Nós</a>
                <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: '1rem' }}>Login</Link>
                <Link to="/cadastro" style={{ color: 'white', textDecoration: 'none', marginLeft: '0.5rem' }}>Cadastro</Link>
            </div>
            <div className="contact-info">
                <i className="fas fa-phone"></i>
                <span> +55 (21)99881-4926</span>
            </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
