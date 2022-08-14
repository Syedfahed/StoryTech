import React from 'react'
import './Services.css'
export default function Services() {
  return (
    <>
    <div className='services' id='services'>
        <p>/WHAT WE DO</p>
        <h1>We have everything you need to launch and grow a successful digital business.</h1>
        <h3>We’re a digital product agency in Hyderabad that designs and develops extraordinary experiences for mobile and other platforms.
</h3>
    </div>
    <div className='three-box'>
        <div className='Design'>
          <i className='bi bi-calendar'/>
          <h2>Design and UX</h2>
          <p>Our product and UX designers work closely to research, iterate and innovate on how our apps will work. We design attention to detail and make sure our apps are both useful and usable.</p>
        </div>
        <div className='Product'>
            <i className='bi bi-box'/>
            <h2>Product</h2>
            <p>We're product people. We focus on building the right product the right way, communicating across disciplines, and balancing business and user needs with technical feasibility.</p>
            </div>
            <div className='Development'>
            <i className='bi bi-archive'/>
            <h2>Development</h2>
            <p>Our dedicated engineers excel in all areas of their craft, from iOS to Android to back-end development. We're masters of writing elegant code and solving complex problems.</p>
            </div>
    </div>
    </>
  )
}
