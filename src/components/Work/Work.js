import React from 'react'
import './Work.css'
export default function Work() {
  return (
    <>
    <div className='work' id='work'>
        <p>/FEATURED WORKS</p>
        <h1>Here are some of our projects we have done lately.</h1>
        <div className='images'>
            <img src='/Image/1.png' alt='' className='work-img'/>
            <img src='/Image/2.png' alt='' className='work-img'/>
            <img src='/Image/3.png' alt='' className='work-img'/>
        </div>
    </div>
    <h1 className='cl-h1'>What Clients Are Saying.</h1>
    <hr className='line'/>
    <div className='clients'>
         
          <div className='user-1'>
            <img src='/Image/user-01.jpg' alt='' className='user-img' />
            <p>Design is very critical and important in solving problems in every field. Going through various different agencies, 
              we’ve learnt that StoryTech provides a clean and minimal approach in providing solutions.</p>
          </div>
          <div className='user-name1'>
              Bhargav Ram
              <span>CEO, Rely</span>
              </div>
          <div className='user-2'>
            <img src='/Image/user-02.jpg' alt='' className='user-img' />
            <p> Very happy with the design and development work, their attention to detail is something to look out for. 
              They do everything well.</p>
             
          </div>
          <div className='user-name2'>
              Manikanth C
              <span>Founder, Workruit</span>
              </div>
        </div>
    </>
  )
}
