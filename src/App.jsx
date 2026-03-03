import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoItem } from './components/todoItem'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Link } from 'react-router-dom'
import { Pokemon } from './pages/pokemon'

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pokemon">POKEMON!!!!</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </>
  )
}

export default App
