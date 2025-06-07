import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Itaipuacu from './pages/Itaipuacu.jsx'
import Inicio from './pages/Inicio.jsx'
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/home" element={<Home />} />
      <Route path="/itaipuacu" element={<Itaipuacu />} />
    </Routes>
  )
}
