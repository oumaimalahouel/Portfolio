import React from 'react';
import './hero.css';
const Hero = () => {
  return (
    <section className='hero flex'>
    
        <div className="right-section">
        <span className='hello'>Hello,</span><br /><br />
        <span className="inroduction">I'm <span className="introName">Oumaima</span><br/> Passionate Front-End Developer with a Focus on React.js</span><br/>
      <p className="introPara"> I'm an enthusiastic and creative front-end developer, specializing in JavaScript web development with a particular passion for React.js. My goal is to create outstanding user experiences and develop high-performance web applications.</p>
   <div className="icons flex">
    <div className="icon icon-linkedin"></div>
    <div className="icon icon-github"></div>
    <div className="icon icon-instagram"></div>
    <div className="icon icon-facebook2"></div>
   </div>
        
      </div>
      
      <img className='avatar ' src="./me.png" alt="" />
    </section>
  )
}

export default Hero;