import React from "react"
import Products from "./Products"

const Home = () =>{
    return (
    <div className="hero">
        <div className="card">
            <img src="/assets/bg1.jpg" className="d-block w-100" alt="background1" height="550px" />
        </div>
        <Products/>
    </div>

    )


}

export default Home