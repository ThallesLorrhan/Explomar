

const Main = () => {
  return (
    <div>
      <main className="container">
        <div className="search-box">
          <input type="text" id="cidade" placeholder="Nome da cidade" />
          <input type="date" />
          <input type="number" placeholder="Quantidade de pessoas" />
          <button className="btn-search">Pesquisar</button>
        </div>

        <div id="resposta"> </div>

        <section className="section">
          <h3>Destinos mais procurados</h3>
          <p>Lugares mais desejados por quem viaja por Maricá</p>
          <div className="grid grid-2-3">
            <div className="placeholder large"></div>
            <div className="placeholder large"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
          </div>
        </section>

        <section className="section">
          <h3>Favorite um lugar</h3>
          <p>Favorite uma viagem para não se esquecer</p>
          <div className="grid grid-2-3">
            <div className="placeholder">
              <button className="favorite-button">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
            <div className="placeholder">
              <button className="favorite-button">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
            <div className="placeholder">
              <button className="favorite-button">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>

          <h4>Itens Favoritos:</h4>
          <ul id="lista-favoritos"></ul>
        </section>

        <div id="modal-favoritos" style={{ display: "none" }}>
          <h3>Favoritos Salvos</h3>
          <ul id="lista-favoritos-salvos"></ul>
          <button id="fechar-modal">Fechar</button>
        </div>

        <section className="section">
          <h3>Organize sua viagem com praticidade e agilidade</h3>
          <p>Escolha seu destino e explore o melhor de Maricá</p>
          <div className="tags">
            <button className="tag active">Praia</button>
            <button className="tag">Cidade</button>
            <button className="tag">Natureza</button>
            <button className="tag">Descanso</button>
          </div>
          <div className="grid grid-5">
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
          </div>
        </section>

        <section className="promo-box">
          <div className="promo-text">
            <h4>Faça login e economize</h4>
            <p>Cadastre-se e ganhe 5% de desconto em determinados lugares</p>
            <button className="btn-black">Login</button>
            <button className="btn-outline">Cadastre-se</button>
          </div>
          <div className="promo-img">🎁</div>
        </section>
      </main>
    </div>
  );
};

export default Main;

