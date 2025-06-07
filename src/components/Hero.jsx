import React from 'react'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <section class="hero" id="inicio">
              <img src={Itaipuacu} 
                  alt="Destino dos Sonhos" 
                  className ="hero-image"
              />
              <div class="hero-content">
                  <h1>EXPLORE DESTINOS DOS SONHOS</h1>
                  <p>Oferecendo soluções completas de viagem para indivíduos e grupos</p>
                  <div class="hero-buttons">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSevtzc8fjwnWAtseTNSXqZ58ZeR4wtaeNddWVBNbpv4D2YNqw/viewform" target="_blank" class="cta-button">CADASTRE-SE</a>
                      <Link 
                        to="/home"
                        class="secondary-button">
                          SAIBA MAIS
                      </Link>
                  </div>
              </div>
              <div class="scroll-indicator">
                  <i class="fas fa-chevron-down"></i>
              </div>
          </section>
    </div>
  )
}

export default Hero
