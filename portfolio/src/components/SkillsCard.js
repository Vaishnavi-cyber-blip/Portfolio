import "./SkillStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const SkillsCard = () => {
  return (
    <div className="skills">
      <h1>-   SKILLS   -</h1>
        <div className="card-container">
            <div className="card">

              <p className="btc"> Android development </p>
                <Link to="https://drive.google.com/file/d/1QIGvlj7fH2Xf1KUkG5Yz73rRvwxpjPg-/view?usp=sharing" className="bt">
                  Skills
                </Link>               
            </div>

            <div className="card">
              <p className="btc"> Graphic Design </p>              
                <Link to="https://www.freelancer.in/u/Vaishnavi502" className="bt">
                  Skills
                </Link>               
            </div>

            <div className="card">
              <p className="btc"> UI/UX design </p>              
                <Link to="https://dribbble.com/cyberblipp" className="bt">
                  Skills
                </Link>               
            </div>

            <div className="card">
              <p className="btc"> Machine Learning </p>              
                <Link to="https://drive.google.com/file/d/1ULx_itnTSGMqd9qKJVih3KcFC1AUGgs3/view?usp=sharing" className="bt">
                  Skills
                </Link>                
            </div>

            <div className="card">
              <p className="btc"> Digital Marketing </p>              
                <Link to="https://drive.google.com/file/d/1GO_AJ7qMRF4qsA2cBER5yrJwy6HNMhBG/view?usp=sharing" className="bt">
                  Skills
                </Link>                
            </div>

            <div className="card">
              <p className="btc"> Technical Writing </p>             
                <Link to="/Blog" className="bt">
                  Skills
                </Link>                
            </div>
            
        </div>
    </div>
  )
}

export default SkillsCard