import styles from '../styles/home.module.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={` ${styles['footer-content']}`}>
          <div className={styles.textFooter}>
            <p>© 2025 ExploMar - Todos os direitos reservados.</p>
          </div>
          <div className={styles['footer-links']}>
            <div className={styles.links}>
              <p><strong>Termos</strong></p>
              <p><a href="#">Privacidade e Cookies</a></p>
              <p><a href="#">Termos</a></p>
              <p><a href="#">Trabalhe conosco</a></p>
            </div>
            <div className={styles.links}>
              <p><strong>Parceiros</strong></p>
              <p>Prefeitura</p>
              <p>Codemar</p>
            </div>
            <div className={styles.links}>
              <p><strong>Redes Sociais</strong></p>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Instagram</a></p>
            </div>
          </div>
        </div>
     </footer>
    </div>
  )
}
  
export default Footer
