import React from 'react'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'

const Footer = () => {
  return (
    <div>
      <footer class="footer" >
        <div class="footer-content">
            <div class="footer-section">
                <h3>EXPLOMAR</h3>
                <p>Sua agência de viagens confiável para destinos inesquecíveis.</p>
            </div>
            <div class="footer-section">
                <h3>Links Rápidos</h3>
                <a href="#inicio">Início</a>
                <a href="#destinos">Destinos</a>
                <a href="#sobre">Sobre Nós</a>
            </div>
            <div class="footer-section">
                <h3>Redes Sociais</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright © 2025 EXPLOMAR. Todos os Direitos Reservados.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
