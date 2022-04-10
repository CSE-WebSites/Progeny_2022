import React from 'react'
import Aboutcse from './Aboutcse/Aboutcse'
import FacultyCard from './Faculty/FacultyCard'
import './About.css'
// import Vedio from './vedio/Vedio'

const About = () => {
  return (
    <div className='container'>
       <div className="context"></div>
      <Aboutcse/>
      {/* <Vedio/> */}
      <FacultyCard/>      
    </div>
  )
}

export default About;
