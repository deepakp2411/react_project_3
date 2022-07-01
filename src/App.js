import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <Skills />
    </div>
  )
}

export default App