import React , { useEffect, useState } from 'react'

import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
// @ts-ignore
import Main from './components/3-main/main'





function App() {

useEffect(()=>{
  window.addEventListener("scroll",(first) => {
    if(window.scrollY>350){
      setshowScrollBTN(true)
    }else{
      setshowScrollBTN(false) 
    }
    
  })
},[])
const [showScrollBTN, setshowScrollBTN] = useState(false)
  return (
    <div id="up" className='container'>
     <Header />
     
      <Hero />
      <div className="divider"/>
      <Main />
      <div className="divider"/>
      <Contact />
      <div className="divider"/>
      <Footer />
      
      {showScrollBTN && (
        <a href="#up">
        
        <button className=' icon-keyboard_arrow_up scrollTop'></button>
        </a>
      )}
    </div>
  )
}

export default App
