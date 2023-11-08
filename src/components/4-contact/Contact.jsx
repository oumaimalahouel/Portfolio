import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className='contactUs'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='subtitle'>Contact us for more information and Get notified when I publish somthing new.</p>
   
      <div className="flex">
      <form>
    <div className='flex'>
    <label htmlFor="email">Email Adress : </label>
    <input required type="email" id="email" />
    </div>
    <div className="flex" style={{marginTop:"24px"}}>
    <label htmlFor="message">Your message:</label>
    <textarea required name="" id="message" ></textarea>
    </div>
    <button className='submit'>Submit</button>
      </form>
      <div className="animation">animation</div>


      </div>
   
   
    </section>
  
  )
}

export default Contact;