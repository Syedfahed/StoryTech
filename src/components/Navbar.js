import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import "../components/Navbar.css"
export default function Navbar() {
    const [menu, setmenu] = useState(false)
    const off = ()=>{
     setmenu(false)
    }
    const topbar = ()=>{
      setmenu(false)
      window.scroll({
        top:0,
        behavior:'smooth'
      })
    }
  return (
    <>
    <div className='navbar' id='top'>
        <nav className=''>
            <div className='nav-lo'>
              <img src='/Image/storytech.png' alt='' className='logo'/>
            </div>
            <div className={menu ? "nav-menu mobile-nav" :"nav-menu"}>
              <i onClick={off} className='bi bi-x-circle'/>
                <ul>
                  
                <Link href='#home' to='/' onClick={topbar}>Home</Link>
                <a onClick={off} href='#about'>About</a>
                <a onClick={off} href='#services'>Services</a>
                <a onClick={off} href='#work'>Work</a>
                <a onClick={off} href='#clients'>Clients</a>
                <a onClick={off} href='#contact'>Contact</a>
                <Link onClick={off} to='/career'> Career</Link>
                <Link onClick={off} to='/login'> LogIn</Link>
                <Link onClick={off} to='/signup'>Sign Up</Link>
                <div className='icons' id='icons'>
                        <i className='bi bi-facebook'/>
                        <i className='bi bi-twitter'/>
                        <i className='bi bi-instagram'/>
                    </div>
                </ul>
                
            </div>
        </nav>
       
        <div className='ham'> 
              <i   onClick={()=>{
                     setmenu(!menu)}}  class="bi bi-list"></i>
            </div>
    </div>
    
    </>
  )
}
