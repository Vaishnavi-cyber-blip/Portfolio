import "./AboutContStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/letme.png"
// import React2 from "../assets/port.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
        
        
        <div className="left">
            <h1 className="head">Who Am I?</h1>
            <p>I am a hardworking, focused, and determined individual who is passionate about technology and dedicated to my craft. My skill as a developer and designer, coupled with my ability to work independently and collaboratively, make me a valuable asset to any team. </p>
            <Link to="/contact">
                <button className="btn">Connect</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="intro" alt="true"/>
                </div>
                {/* <div className="img-stack bottom">
                    <img src={React2} className="intro2" alt="true"/>
                </div> */}
            </div>
        </div>

    </div>
    
  )
}

export default AboutContent