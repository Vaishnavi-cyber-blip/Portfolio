import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go";
import { SiFreelancer } from "react-icons/si";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={27} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <h4>Lucknow</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                7985010351</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                vaishnaviy502@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About this project</h4>
                <p>This my first ever frontend project. Hope you like it!
                </p>
                <div className="social">
                    <a href="https://github.com/Vaishnavi-cyber-blip">
                        <GoMarkGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                    <a href="https://www.freelancer.in/u/Vaishnavi502">
                        <SiFreelancer size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/vaishnavi-yadav-185464215/">
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default footer