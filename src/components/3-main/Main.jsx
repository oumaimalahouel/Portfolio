import "./main.css";
const Main = () => {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React js</button>
        <button>Angular</button>
      </section>

   <section className="right-section flex">
          {["aa","bb","cc","dd"].map((item)=>{
            return (
        <article key={item}className="card">
        <img width={266} src="./pressing.png" alt="" />
        <div style={{width:"250px"}}className="box">
          <h1 className="title">landing page</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste quo debitis, dicta culpa nesciunt exercitationem sapiente officia deleniti ad quasi accusantium eius. Esse qui optio eum commodi aperiam possimus?</p>
          <div className="flex icons">
            
         <div style={{gap:"11px"}}className="flex">
         <div className="icon-link"></div>
          <div className="icon-github"></div>
         </div>
          <a className="link flex"  href="">more
          <span style={{alignSelf:"end"}} className="icon-arrow-right2"></span>
          </a>
          </div>
        </div>
        
        </article>    
            )
          })}



      
      </section>
     
    </main>
    
  );
};

export default Main;
