import React from 'react'
import pp from '../styles/pproficionalcss.module.css'

const PProficional = () => {
  return (
    <div>
      <div className={pp.bgWrap}>
      <div className={pp.topText}>Início &gt; Destinos &gt; Guia Irineu Carvalho Souza</div>
      <div className={pp.profileCard}>
        <div className={pp.profileHeader}>
          <div className={pp.profileImage}>
            {/* Placeholder quadrado */}
            <div className={pp.imgPlaceholder}></div>
          </div>
          <div className={pp.profileInfo}>
            <h1>Irineu Carvalho Souza</h1>
            <div className={pp.age}>37 anos</div>
            <div className={pp.expTitle}><b>Experiência:</b> <span className={pp.expArea}>Trilhas e Florestas</span></div>
          </div>
        </div>
        <div className={pp.section}>
          <div className={pp.recommendTitle}>Recomendação:</div>
          <div className={pp.recommendText}>
            Explore as trilhas e florestas com nosso guia especializado, oferecendo experiências únicas em meio à natureza. Descubra a fauna e flora locais, respirando o ar puro das trilhas, enquanto se conecta com paisagens intocadas. Perfeito para aventureiros de todos os níveis, com o suporte de guias experientes que compartilham seus conhecimentos.
          </div>
        </div>
        <div className={pp.section}>
          <div className={pp.tripsTitle}>Viagens feitas:</div>
          <div className={pp.tripsRow}>
            <div className={pp.tripBox}></div>
            <div className={pp.tripBox}></div>
            <div className={pp.tripBox}></div>
            <div className={pp.tripBox}></div>
          </div>
        </div>
        <div className={pp.bottomRow}>
          <div className={pp.ratingWrap}>
            <span className={pp.ratingPercent}>99%</span>
            <span className={pp.ratingText}> avaliações positivas</span>
            <div className={pp.stars}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <button className={pp.guideBtn}>QUERO ESSE GUIA</button>
        </div>
      </div>
      {/* Elementos decorativos laranja */}
      <div className={pp.orangeDeco + ' ' + pp.deco1}></div>
      <div className={pp.orangeDeco + ' ' + pp.deco2}></div>
      <div className={pp.orangeDeco + ' ' + pp.deco3}></div>
      <div className={pp.orangeDeco + ' ' + pp.deco4}></div>
    </div>
    </div>
  )
}

export default PProficional
