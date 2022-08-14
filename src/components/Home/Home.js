import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div id='home' className='home'>
        <div className='center'>
            <h1>Hello, we are
StoryTech.</h1>
<p>We are focused to create incredible
mobile apps for startups and enterprise clients.</p>
        </div>
        <div className='follow-us'>
            <ul>
                <li>Follow Us</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
            <div  className='scroll-down'>
               <a href='#about'> <h4>Scroll Down</h4>
                <i className='bi bi-arrow-down'/></a>
            </div>
        </div>
    </div>
  )
}
