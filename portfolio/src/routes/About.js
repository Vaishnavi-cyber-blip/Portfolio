import React from 'react'

import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import Extra from '../components/Extra'


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="Know about Me!"/>
      <AboutContent/>
      <Extra/>
      <Footer />   
    </div>
  )
}

export default About