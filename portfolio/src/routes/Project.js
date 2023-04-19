import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import SkillsCard from '../components/SkillsCard'
import Work from '../components/Work'
import Blog from '../components/pages/Blog'
import WorkEx from '../components/WorkEx'





const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2  heading="PROJECTS."  text="Some of the most recent works"/>
      <Work/>
      <WorkEx/>
      <SkillsCard/>
      <Blog/>
      
      
      
      <Footer/>
    </div>
  )
}

export default Project