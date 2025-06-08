import React from 'react'
import styles from '../styles/conoscocss.module.css'

const TConosco = () => {
  return (
    <div>
      <section className={styles['cadastro-section']}>
      <nav className={styles['breadcrumb']}>
        Início &gt; Trabalhe conosco &gt; Cadastro
      </nav>

      <h1><span className={styles['icon']}>👤</span> CADASTRO</h1>
      <hr className={styles['divider']} />

      <form className={styles['cadastro-form']}>
        <div className={styles['form-group']}>
          <h2>Dados de Login</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Senha</label>
              <input type="password" placeholder="Senha" />
            </div>
            <div className={styles['form-col']}>
              <label>Confirmar Senha</label>
              <input type="password" placeholder="Confirmar Senha" />
            </div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <h2>Dados de Pessoais</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Nome</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className={styles['form-col']}>
              <label>Sobrenome</label>
              <input type="text" placeholder="Sobrenome" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>CPF</label>
              <input type="text" placeholder="CPF" />
            </div>
            <div className={styles['form-col']}>
              <label>RG</label>
              <input type="text" placeholder="RG" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Data de Nascimento</label>
              <input type="date" />
            </div>
            <div className={styles['form-col']}>
              <label>Gênero</label>
              <input type="text" placeholder="Gênero" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Telefone</label>
              <input type="text" placeholder="Telefone" />
            </div>
            <div className={styles['form-col']}>
              <label>Celular</label>
              <input type="text" placeholder="Celular" />
            </div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <h2>Dados de correspondência</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>
              <label>Nome do Endereço (ex: casa, trabalho)</label>
              <input type="text" placeholder="Nome do Endereço" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>CEP</label>
              <input type="text" placeholder="CEP" />
            </div>
            <div className={styles['form-col']}>
              <label>Cidade</label>
              <input type="text" placeholder="Cidade" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Endereço</label>
              <input type="text" placeholder="Endereço" />
            </div>
            <div className={styles['form-col']}>
              <label>Bairro</label>
              <input type="text" placeholder="Bairro" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Número</label>
              <input type="text" placeholder="Número" />
            </div>
            <div className={styles['form-col']}>
              <label>Complemento</label>
              <input type="text" placeholder="Complemento" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>
              <label>Referência</label>
              <input type="text" placeholder="Referência" />
            </div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <h2>Dados Profissionais</h2>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Experiências</label>
              <input type="text" placeholder="Experiências" />
            </div>
            <div className={styles['form-col']}>
              <label>Formação</label>
              <input type="text" placeholder="Formação" />
            </div>
          </div>

          <div className={styles['form-row']}>
            <div className={styles['form-col']}>
              <label>Cadastro</label>
              <input type="text" placeholder="Cadastro" />
            </div>
            <div className={styles['form-col']}>
              <label htmlFor="certificado">Certificados</label>
              <input
                type="file"
                id="certificado"
                name="certificado"
                className={styles['file-input']}
              />
            </div>
          </div>
        </div>
         <div className={styles['form-group2']}>
          <button type="submit" className={styles['btn-enviar']}>
            Enviar
          </button>
        </div>
        
      </form>
    </section>
    </div>
  )
}

export default TConosco
