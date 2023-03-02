import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Knowledge from './components/Knowledge'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Connected from './components/Connected'
function App() {

  return (
    <>
    <Header/>
    <main className='hero'>
      <Hero/>
      <About/>
      <Knowledge/>
      <Portfolio/>
      <Contact/>
      <Connected/>
    </main>
    </>
  )
}

export default App