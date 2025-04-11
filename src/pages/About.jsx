import React from 'react'
import Hero from '../components/about/Hero'
import MyExpertise from '../components/home/MyExpertise'
import MyWorks from '../components/home/MyWorks'

const About = () => {
  return (
    <div className='px-5 md:px-0 md:mt-0 mt-2'>
        <Hero/>
        <MyExpertise/>
        <MyWorks/>
    </div>
  )
}

export default About