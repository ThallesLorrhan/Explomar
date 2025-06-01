import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Itaipuacu from './pages/Itaipuacu.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/itaipuacu" element={<Itaipuacu />} />
    </Routes>
  )
}
