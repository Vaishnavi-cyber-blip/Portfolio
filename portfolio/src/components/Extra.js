import "./Extra.css"
import React from 'react'
import { Link } from "react-router-dom"
import React2 from "../assets/ssf2.png"

const Extra = () => {
  return (
    <div className="extra">

        

            <div className="left1">
                <div className="img-container1">
                    <div className="img">
                        <img src={React2} classname="pic" alt="true"/>
                    </div>
                </div>
            </div>

            <div className="ryt">
                <h1>Member of Slum Swaraj Foundation</h1>
                <p>Volunteer in NGO which works in the direction of a well co-ordinated mission of uprooting the social evils by spreading education.</p>
                <Link to="https://twitter.com/slumswaraj?lang=en">
                    <button className="btn">Visit</button>
                </Link>
                    
                
                
            </div>
            




            {/* <div className="left">
                <div className="img-container">
                    <img src={React2} className="intro" alt="true"/>
                </div>

            </div> */}
        
        
    </div>
  )
}

export default Extra