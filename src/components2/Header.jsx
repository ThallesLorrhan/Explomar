import Brazil from '../assets/Brazil.png'
import Search from '../assets/Search.png'
import styles from '../styles/home.module.css'
import Line from '../assets/Line.png'
import Word from '../assets/Word.png'
import Hamburguer from '../assets/Hamburguer.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles['top-bar']}>
            <h1 className={styles.logo}>ExploMar</h1>
            <div className={styles.flags}>
              <img 
                src={Brazil} 
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
            <div className={styles.humburguer}>
              <button aria-label="Abrir menu" className={styles.hamburguerButton}>
                <img src={Hamburguer} alt="Ícone de menu" className={styles.hamburguerIcon} />
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
                    <Link
                    to='/home'
                    >
                      Início
                    </Link>
                    
                </button>

                <div className={styles['menu-suspenso']}>
                  <button className={styles['botao-menu-suspenso']}>Destinos</button>
                  <div className={styles['conteudo-menu-suspenso']}>
                    <Link
                    to='/destinos'
                    >
                      Centro
                    </Link>
                    <Link
                    to='/destinos'
                    >
                      Inoã
                    </Link>
                    <Link
                    to='/destinos'
                    >
                      Ponta negra
                    </Link>
                    <Link
                    to='/destinos'
                    >
                      Itaipuaçu
                    </Link>
                  </div>
                </div>

                <button className={styles['menu-item']}>
                  <Link
                    to='/guias'
                    >
                      Guia Turísticos
                    </Link>
                </button>
                <button className={styles['menu-item']}>
                  <Link
                    to='/trabalhe-conosco'
                    >
                    Trabalhe conosco
                  </Link>
                </button>
                <button className={styles['menu-item']}>
                 <Link
                    to='/feedback'
                    >
                      Avaliação
                    </Link>
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
