import React from 'react'
import Hero from '../components/home/Hero'
import MyExpertise from '../components/home/MyExpertise'
import MyWorks from '../components/home/MyWorks'
import Faq from '../components/home/Faq'

const Home = () => {
  return (
    <div className='mx-5 md:mx-0'>
        <Hero/>
        <MyExpertise/>
        <MyWorks/>
        <Faq/>
        

    </div>
  )
}

export default Home