import React from 'react'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div>
       <section class="offers" id="destinos">
              <h2>DESTINOS EM MARICÁ</h2>
              <div class="offers-container">
                  <div class="offer-card">
                      <div class="offer-image">
                          <img 
                              src={Itaipuacu}
                              alt="Praia de Itaipuaçu"
                          />
                          <div class="offer-price">A partir de R$ 199</div>
                      </div>
                      <div class="offer-content">
                          <h3>PRAIA DE ITAIPUAÇU</h3>
                          <p>Uma das praias mais belas da região</p>
                          <div class="offer-details">
                              <span><i class="fas fa-clock"></i> Passeio de 1 dia</span>
                              <span><i class="fas fa-map-marker-alt"></i> Maricá, RJ</span>
                          </div>
                           <Link to="/itaipuacu" className="offer-button">
                            VER DETALHES
                            </Link>

                      </div>
                  </div>
                  <div class="offer-card">
                      <div class="offer-image">
                          <img 
                              src={Lagoa}
                              alt="Lagoa de Maricá"
                          />
                          <div class="offer-price">A partir de R$ 299</div>
                      </div>
                      <div class="offer-content">
                          <h3>LAGOA DE MARICÁ</h3>
                          <p>Passeio pela maior lagoa do município</p>
                          <div class="offer-details">
                              <span><i class="fas fa-clock"></i> Passeio de 1 dia</span>
                              <span><i class="fas fa-map-marker-alt"></i> Maricá, RJ</span>
                          </div>
                          <a href="#destinos" class="offer-button">VER DETALHES</a>
                      </div>
                  </div>
                  <div class="offer-card">
                      <div class="offer-image">
                          <img 
                              src={Serra}
                              alt="Serra de Maricá"
                          />
                          <div class="offer-price">A partir de R$ 399</div>
                      </div>
                      <div class="offer-content">
                          <h3>SERRA DE MARICÁ</h3>
                          <p>Trilhas e mirantes com vista panorâmica</p>
                          <div class="offer-details">
                              <span><i class="fas fa-clock"></i> Passeio de 1 dia</span>
                              <span><i class="fas fa-map-marker-alt"></i> Maricá, RJ</span>
                          </div>
                          <a href="#destinos" class="offer-button">VER DETALHES</a>
                      </div>
                  </div>
              </div>
              
          </section>
    </div>
  )
}

export default Offers
