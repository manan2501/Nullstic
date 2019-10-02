import React from "react";

const divStyle ={
    background: ["url(https://i.ibb.co/dDDG7k6/home-plastic.png)", "no-repeat", "center"]
}

const Home = ()=>{
    return(
        <div>
            <article className="athelas">
              <div className="vh-100 dt w-100 tc bg-dark-gray white cover" style={divStyle}>
                <div className="dtc v-mid">
                  <header className="navy">
                    <h1 className="f1 bg-black white">SAY NO TO PLASTIC</h1>
                  </header>
                </div>
              </div>
            </article>
        </div>
    );
}

export default Home;
