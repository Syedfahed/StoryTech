import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer>
        <div className='footer' id='contact'>
            <span>/ CONTACT US</span>
            <h1>
            Have an idea or the next big project in mind? Talk to us. Let’s work together and make something great.

            </h1>
            <h4>info@storytech.in</h4>
            <h6>+91 8639217011</h6>
            <div className='location'>
                <div className='address'>
                    <span>/ WHERE TO FIND US</span> 
                    <h3>Road No 13, Jubilee Hills
Hyderabad, Telangana
500033 India</h3>
                </div>
                <div className='app'>
                    <span>/ FOLLOW US</span>
                    <div className='icons'>
                        <i className='bi bi-facebook'/>
                        <i className='bi bi-twitter'/>
                        <i className='bi bi-instagram'/>
                    </div>
                </div>
            </div>
            <div>
       <a href='#top'> <i className='bi bi-arrow-up'/></a>
        </div>
        </div>
        
    </footer>
  )
}
