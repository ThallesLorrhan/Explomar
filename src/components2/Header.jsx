import Brasil from '../assets/Brasil.png'
import Search from '../assets/Search.png'
import styles from '../styles/home.module.css'
import Line from '../assets/Line.png'
import Word from '../assets/Word.png'

const Header = () => {
  return (
    <div>
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles['top-bar']}>
            <h1 className={styles.logo}>ExploMar</h1>
            <div className={styles.flags}>
              <img 
                src={Brasil} 
                alt="BR" 
                width={40}
                />   
              <div className={styles['search-wrapper']}>
                <input
                  
                  className={styles['top-bar-search']}
                  placeholder="Pesquise"
                />
                <span className={styles['search-icon']}>
                  <img 
                    src={Search} 
                    alt="Lupa"
                  />
                </span>
              </div>
                
              <button className={styles['btn-login']}>
                <a href="#index -HOME">LOGIN</a>
              </button>
              <button className={styles['btn-outline']}>
                <a href="#">CADASTRE-SE</a>
              </button>
            </div>
          </div>

          <div className={styles['hero-content']}>
            <div>
              <h2>Sua próxima viagem <br></br>começa em Maricá</h2>
            </div>

            
              <nav className={styles.menu}>
                <button 
                  className={`${styles['menu-item']} ${styles.active}`}>
                    Início
                </button>

                <div className={styles['menu-suspenso']}>
                  <button className={styles['botao-menu-suspenso']}>Destinos</button>
                  <div className={styles['conteudo-menu-suspenso']}>
                    <a href="#">Centro</a>
                    <a href="#">Inoã</a>
                    <a href="#">Ponta negra</a>
                    <a href="Itaipuaçu.html" target="_self">Itaipuaçu</a>
                  </div>
                </div>

                <button className={styles['menu-item']}>
                  <a href="Guias-turisticos.html" target="_self">Guia Turísticos</a>
                </button>
                <button className={styles['menu-item']}>
                  <a href="TrabalheConosco.html" target="_self">Trabalhe conosco</a>
                </button>
                <button className={styles['menu-item']}>
                  <a href="PageFeedback.html" target="_self">Avaliação</a>
                </button>
              </nav>
          
          </div>
        </div>
      </header>
      <div className={styles.imgsHero}>
        <img src={Line} alt="" className={styles.lineImg} />
        <img src={Word} alt="" className={styles.wordImg} />
      </div>
    </div>
  )
}

export default Header
