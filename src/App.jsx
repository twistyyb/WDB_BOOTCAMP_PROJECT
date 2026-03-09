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
import { Error404 } from './pages/error'

function App() {
  return (
    <>
      <nav className="topNav" aria-label="Primary navigation">
        <Link className="topNavLink" to="/">
          Home
        </Link>
        <Link className="topNavLink" to="/about">
          About
        </Link>
        <Link className="topNavLink" to="/pokemon">
          POKEMON!!!!
        </Link>
      </nav>
      <main className="appContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
      </main>
    </>
  )
}

export default App
