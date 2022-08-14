import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
    <div id='about' className='about'>
        <p>/WHO WE ARE</p>
        <h1>We are a design and development studio building world-class mobile applications.</h1>
        <h3>We’re a digital product agency in Hyderabad that designs and develops extraordinary experiences for mobile and other platforms. We work with exceptional entrepreneurs and brands. We don't just build apps. We create the kind of apps that people use, everyday. We have the experience and knowledge to get there</h3>
    </div>
    <div className='about-other'>
        <div className='Story'>
            <i className='bi bi-1-circle cr'></i><h1>Story</h1>
            <p>We help clients understand the shift that happening from ideas to implementation. StoryTech connects the dots that connect ideation, implementation and transformation. We know how to create apps that people love, use and create a noise.

</p>
        </div>
        <div className='Design'>
            <i className='bi bi-2-circle cr'></i><h1>Design</h1>
           <p>We help clients understand and revamp the way consumers discover and interact with products and services. StoryTech works as one team to create products that people love to use with a minimalistic approach.</p>

        </div>
    </div>
   </>
  )
}
