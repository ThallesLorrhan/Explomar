import React from 'react'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'

const Features = () => {
  return (
    <div>
      <section class="features" id="sobre">
        <h2>POR QUE NOS ESCOLHER?</h2>
        <div class="features-container">
            <div class="feature-card">
                <i class="fas fa-thumbs-up"></i>
                <h3>GUIAS ESPECIALIZADOS</h3>
                <p>Nossa equipe de guias conhece profundamente cada canto de Maricá, garantindo uma experiência única.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-trophy"></i>
                <h3>ROTEIROS EXCLUSIVOS</h3>
                <p>Oferecemos passeios personalizados para explorar os melhores pontos turísticos da cidade.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-heart"></i>
                <h3>EXPERIÊNCIA LOCAL</h3>
                <p>Conheça Maricá como um local, com dicas e histórias que só quem vive aqui pode contar.</p>
            </div>
        </div>
       
    </section>
    </div>
  )
}

export default Features
