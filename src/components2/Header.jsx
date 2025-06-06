

const Header = () => {
  return (
    <div>
      <header class="hero">
        <div class="container">
          <div class="top-bar">
            <h1 class="logo">ExploMar</h1>
            <div class="flags">
              <img src="https://flagcdn.com/w40/br.png" alt="BR" />   
              <input type="text" name="" class="top-bar-search" placeholder="Pesquise aqui"/>
            <button class="btn-login"><a href="#index -HOME">LOGIN</a></button>
            <button class="btn-outline"><a href="#">Cadastre-se</a></button>
          </div>
          </div>
          
          <div class="hero-content">
            <h2>Sua próxima viagem começa em Maricá</h2>
            <nav class="menu">
              <button class="menu-item active">Início</button>
              
              <div class="menu-suspenso">
                  <button class="botao-menu-suspenso">Destinos ▾</button>
                  <div class="conteudo-menu-suspenso">
                      <a href="#">Centro</a>
                      <a href="#">Inoã</a>
                      <a href="#">Ponta negra</a>
                      <a href="Itaipuaçu.html" target="_self">Itaipuaçu</a>
                  </div>
              </div>
              <button class="menu-item"><a href="Guias-turisticos.html" target="self">Guia Turísticos</a></button>
              <button class="menu-item"><a href="TrabalheConosco.html" target="_self">Trabalhe conosco</a></button>
              <button class="menu-item"><a href="PageFeedback.html" target="_self">Avaliação</a></button>
            </nav>

          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
