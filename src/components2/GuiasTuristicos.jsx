import React from 'react';
import guiascss from '../styles/guiasturisticos.module.css';
import { Link } from 'react-router-dom'

const GuiasTuristicos = () => {
  return (
    <main className={guiascss.container3}>
      <div className={guiascss['breadcrumb']}>Início &gt; Guias turísticos</div>

      <aside className={guiascss['filtros']}>
        <h2><span className={guiascss['icon']}>⚙️</span> FILTROS</h2>

        <div className={guiascss['filtro-item']}>
          <strong>SEXO:</strong>
          <label><input type="radio" name="sexo" /> MASCULINO</label>
          <label><input type="radio" name="sexo" /> FEMININO</label>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>EXPERIÊNCIA:</strong> XXXXXX
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>LOCALIZAÇÃO / REGIÃO:</strong>
          <input type="text" placeholder="Bairro, cidade ou região" />
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>TIPO DE PASSEIO:</strong>
          <select>
            <option>Aventura</option>
            <option>Histórico</option>
            <option>Cultural</option>
            <option>Gastronômico</option>
            <option>Ecológico</option>
            <option>Rural</option>
            <option>Urbano</option>
          </select>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>DISPONIBILIDADE:</strong>
          <input type="date" />
          <span className={guiascss['sub-label']}>ou período</span>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>AVALIAÇÃO:</strong>
          <span className={guiascss['estrelas']}>★★★★★</span>
          <span className={guiascss['sub-label']}>(nota ou feedback)</span>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>FAIXA DE PREÇO:</strong>
          <input type="number" placeholder="R$ XX" className={guiascss['preco-input']} />
          até
          <input type="number" placeholder="R$ YY" className={guiascss['preco-input']} />
        </div>
      </aside>

      <section className={guiascss['conteudo']}>
        <div className={guiascss['busca']}>
          <input type="text" placeholder="BUSCAR" />
          <button>🔍</button>
        </div>

        <div className={guiascss['cards']}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className={guiascss['card']} key={item}>
              <div className={guiascss['avatar']}></div>
              <div className={guiascss['info']}>
                <div><strong>NOME:</strong> XXXXXXXX</div>
                <div><strong>IDADE:</strong> XX</div>
                <div><strong>EXPERIÊNCIA:</strong> XXXXX</div>
                 <Link
                    to='/perfil-proficional'
                    >
                      <button className={guiascss['ver-mais']}>VER MAIS</button>
                    </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GuiasTuristicos;
