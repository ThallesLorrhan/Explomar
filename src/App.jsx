import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Itaipuacu from './pages/Itaipuacu.jsx'
import Inicio from './pages/Inicio.jsx'
import Guias from './pages/Guias.jsx'
import TrabalheConosco from './pages/TrabalheConosco.jsx'
import Destinos from './pages/Destinos.jsx'
import PerfilProficional from './pages/PerfilProficional.jsx'
import FeedBack from './pages/FeedBack.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/home" element={<Home />} />
      <Route path="/guias" element={<Guias />} />
      <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      <Route path='/feedback' element={<FeedBack />} />
      <Route path="/destinos" element={<Destinos />} />
      <Route path='/perfil-proficional' element={<PerfilProficional />} />
      <Route path="/itaipuacu" element={<Itaipuacu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}
