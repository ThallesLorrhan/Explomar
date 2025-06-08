import homecss from '../styles/home.module.css';

const Main = () => {
  return (
    <div>
      <main className={homecss.container2}>
        <div className={homecss['search-box']}>
            <input type="text" id="cidade" placeholder="Nome da cidade" />
            <input type="date" placeholder="Data" />
            <input type="number" placeholder="Quantidade de pessoas" />
            <button className={homecss['btn-search']}>Pesquisar</button>
        </div>

        <div id="resposta"> </div>

        <section className={homecss.section}>
          <h3>Destinos mais procurados</h3>
          <p>Lugares mais desejados por quem viaja por Maricá</p>
          <div className={`${homecss.grid} ${homecss['grid-2-3']}`}>
            <div className={homecss.placeholder + ' ' + homecss.large}></div>
            <div className={homecss.placeholder + ' ' + homecss.large}></div>
            <div className={homecss.placeholder}></div>
            <div className={homecss.placeholder}></div>
            <div className={homecss.placeholder}></div>
          </div>
        </section>

        <section className={homecss.section}>
          <h3>Favorite um lugar</h3>
          <p>Favorite uma viagem para não se esquecer</p>
          <div className={`${homecss.grid} ${homecss['grid-2-3']}`}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className={homecss.placeholder}>
                <button className={homecss['favorite-button']}>
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

        <section className={homecss.section}>
          <h3>Organize sua viagem com praticidade e agilidade</h3>
          <p>Escolha seu destino e explore o melhor de Maricá</p>
          <div className={homecss.tags}>
            <button className={`${homecss.tag} ${homecss.active}`}>Praia</button>
            <button className={homecss.tag}>Cidade</button>
            <button className={homecss.tag}>Natureza</button>
            <button className={homecss.tag}>Descanso</button>
          </div>
          <div className={`${homecss.grid} ${homecss['grid-5']}`}>
            <div className={homecss.placeholder}></div>
            <div className={homecss.placeholder}></div>
            <div className={homecss.placeholder}></div>
            <div className={homecss.placeholder}></div>
          </div>
        </section>

        <section className={homecss['promo-box']}>
          <div className={homecss['promo-text']}>
            <h4>Faça login e economize</h4>
            <p>Cadastre-se e ganhe 5% de desconto em determinados lugares</p>
            <button className={homecss['btn-black']}>Login</button>
            <button className={homecss['btn-outline2']}>Cadastre-se</button>
          </div>
          <div className={homecss['promo-img']}>🎁</div>
        </section>
      </main>
    </div>
  );
};

export default Main;
