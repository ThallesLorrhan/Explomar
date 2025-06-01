import React from 'react'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'
import Itaipuacu from '../assets/itaipuacu.jpg'

const Testimonials = () => {
  return (
    <div>
      <section class="testimonials">
              <h2>O QUE NOSSOS CLIENTES DIZEM</h2>
              <div class="testimonial-container">
                  <div class="testimonial">
                      <div class="testimonial-image">
                          <img 
                              src={Itaipuacu}
                              alt="Cliente"
                          />
                      </div>
                      <i class="fas fa-quote-left"></i>
                      <p>Uma experiência incrível! A equipe foi muito atenciosa e profissional. Recomendo fortemente para quem busca uma viagem inesquecível.</p>
                      <h4>JOÃO SILVA</h4>
                      <div className="testimonial-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
      
                  </div>
              </div>
          </section>
      
    </div>
  )
}

export default Testimonials
