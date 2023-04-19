import "./Herostyle.css"
import React from 'react'
import IntroImg from "../assets/hero2.png"
import { Link } from "react-router-dom"



const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />

      </div>
      <div className="content">
        <h1>Vaishnavi Yadav</h1>
        <p>I am a designer and developer</p>


        <Link to="https://drive.google.com/file/d/1NvSsvRQnL1RDR-6w1ZzK86nZUFg4g_vO/view?usp=sharing">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span> Resume</button>
        </Link>
        


      </div>





    </div>
  )
}

export default Heroimg

