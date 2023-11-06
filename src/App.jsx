import React , { useState } from 'react'

import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
// @ts-ignore
import Main from './components/3-main/main'





function App() {


  return (
    <div className='container'>
     <Header />
     
      <Hero />
      <div className="divider"/>
      <Main />
      <div className="divider"/>
      <Contact />
      <div className="divider"/>
      <Footer />
    </div>
  )
}

export default App
