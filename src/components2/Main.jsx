import styles from '../styles/home.module.css'


const Main = () => {
  return (
    <div>
      <main className={styles.container2}>
        <div className={styles['search-box']}>
          <input type="text" id="cidade" placeholder="Nome da cidade" />
          <input type="date" placeholder="Data"/>
          <input type="number" placeholder="Quantidade de pessoas" />
          <button className={styles['btn-search']}>Pesquisar</button>
        </div>

        <div id="resposta"> </div>

        <section className={styles.section}>
          <h3>Destinos mais procurados</h3>
          <p>Lugares mais desejados por quem viaja por Maricá</p>
          <div className={`${styles.grid} ${styles['grid-2-3']}`}>
            <div className={styles.placeholder + ' ' + styles.large}></div>
            <div className={styles.placeholder + ' ' + styles.large}></div>
            <div className={styles.placeholder}></div>
            <div className={styles.placeholder}></div>
            <div className={styles.placeholder}></div>
          </div>
        </section>

        <section className={styles.section}>
          <h3>Favorite um lugar</h3>
          <p>Favorite uma viagem para não se esquecer</p>
          <div className={`${styles.grid} ${styles['grid-2-3']}`}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className={styles.placeholder}>
                <button className={styles['favorite-button']}>
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            ))}
          </div>

          <h4>Itens Favoritos:</h4>
          <ul id="lista-favoritos"></ul>
        </section>

        <div id="modal-favoritos" style={{ display: 'none' }}>
          <h3>Favoritos Salvos</h3>
          <ul id="lista-favoritos-salvos"></ul>
          <button id="fechar-modal">Fechar</button>
        </div>

        <section className={styles.section}>
          <h3>Organize sua viagem com praticidade e agilidade</h3>
          <p>Escolha seu destino e explore o melhor de Maricá</p>
          <div className={styles.tags}>
            <button className={`${styles.tag} ${styles.active}`}>Praia</button>
            <button className={styles.tag}>Cidade</button>
            <button className={styles.tag}>Natureza</button>
            <button className={styles.tag}>Descanso</button>
          </div>
          <div className={`${styles.grid} ${styles['grid-5']}`}>
            <div className={styles.placeholder}></div>
            <div className={styles.placeholder}></div>
            <div className={styles.placeholder}></div>
            <div className={styles.placeholder}></div>
          </div>
        </section>

        <section className={styles['promo-box']}>
          <div className={styles['promo-text']}>
            <h4>Faça login e economize</h4>
            <p>Cadastre-se e ganhe 5% de desconto em determinados lugares</p>
            <button className={styles['btn-black']}>Login</button>
            <button className={styles['btn-outline2']}>Cadastre-se</button>
          </div>
          <div className={styles['promo-img']}>🎁</div>
        </section>
      </main>
  </div>
  )
}

export default Main
