import { useState } from "react";
import "./main.css";
import { myProjects } from "./myprojects";
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [array, setarray] = useState(myProjects);
  const handleClick= (buttonCategory) => { 
    setcurrentActive(buttonCategory);
            const newArr = myProjects.filter((item) => {
              return item.category === buttonCategory;
            });

            setarray(newArr);
   }
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarray(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        
        
        <button
          onClick={() => {
            handleClick("reactjs")
          }}
          className={currentActive === "reactjs" ? "active" : null}
        >
          React js
        </button>
        <button
          onClick={() => {
            handleClick("js")
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setcurrentActive("angular");
            handleClick("angular")
          }}
          className={currentActive === "angular" ? "active" : null}
        >
          Angular
        </button>
        
      </section>

      <section className="right-section flex">
        {array.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "250px" }} className="box">
                <h1 className="title">{item.projectTitre}</h1>
                <p className="subtitle">{item.description} </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                   
                   
                    <div>
                     <a className="icon-github" href={item.href}></a>
                    </div>
                  </div>
                  <a className="link flex" href={item.href}>
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
