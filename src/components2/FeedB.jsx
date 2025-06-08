import React from 'react'
import feedBcss  from '../styles/feedbackcss.module.css'

const FeedB = () => {
  return (
    <div>
      <div className={feedBcss['breadcrumb']}>Início &gt; Avaliação</div>

      <h1 className={feedBcss['h1feed']}>Avalie sua viagem</h1>

      <form id="avaliacaoForm" onSubmit={() => validarFormulario()} className={feedBcss['form2']}>
        <div>
          <fieldset>
            <legend className={feedBcss['legend']}><strong>📅 Dados para contato</strong></legend>

            <div className={feedBcss['form-group']}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Nome completo" className={feedBcss['error']} />
              <span className={feedBcss['error-text']}>Campo obrigatório</span>
            </div>

            <div className={feedBcss['form-group']}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="exemplo@email.com" />
            </div>

            <div className={feedBcss['form-group']}>
              <label htmlFor="foto">Envie foto da sua viagem</label>
              <div className={feedBcss['file-upload']}>
                <input type="file" id="foto" />
              </div>
            </div>

            <div className={feedBcss['form-group']}>
              <label htmlFor="estrelas">Avalie com estrelinha</label>
              <div className={feedBcss['stars']}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </fieldset>
        </div>

        <div className={feedBcss['form-group']}>
          <label htmlFor="comentario">Comentário</label>
          <textarea id="comentario" placeholder="Escreva aqui seu comentário"></textarea>
        </div>

        <div className={feedBcss['submit-button']}>
          <button type="submit">ENVIAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  )
}

export default FeedB
