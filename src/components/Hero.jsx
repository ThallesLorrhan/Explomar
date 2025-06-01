import React from 'react'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'

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
                      <a href="Pages/home.html" target="_blank" class="secondary-button">SAIBA MAIS</a>
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
