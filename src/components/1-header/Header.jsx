import { useState } from "react";
import "./header.css";
import { useEffect } from "react";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode")?? "dark");
  useEffect(() => {
    if(theme =="light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
 
  }, [theme])
  
  return (
    <header className="flex">
      <button
        onClick={() => setshowModal(true)}
        className="menu icon-menu flex"
      ></button>
      <img className="logo" src="./o.png" alt="" />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={()=>{
        //send value to local storage
        localStorage.setItem("currentMode",theme === "dark" ? "light":"dark")

        //get value from local storage
        setTheme(localStorage.getItem("currentMode"))

      }}
      className="mode flex">
        {theme ==="dark" ?(
        <span className="icon-moon-o"></span>
        ): (
        <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cross"
                onClick={() => setshowModal(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
