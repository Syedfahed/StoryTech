import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export default function Signup() {
  return (
 <>
 <div className='login-page'>
    <div className='resume-login' >
        <img src='/Image/c1.png' alt='' className='img'/>
        <h2>Sign up and get your resume right away:
</h2>
        <span className='one' >Sign into your account here:
</span>
<form>
<div className='email'>
    <i className='bi bi-person'/>
    <input type='name' placeholder='First Name'/>
    </div>
    <div className='email'>
    <i className='bi bi-person'/>
    <input type='name' placeholder='Last Name'/>
    </div>
    <div className='email'>
    <i className='bi bi-envelope'/>
    <input type='email' placeholder='Email address'/>
    </div>
    <div className='password'>
    <i className='bi bi-phone'/>
    <input type='num' placeholder='Number'/>
    </div>
    <div className='password'>
    <i className='bi bi-lock'/>
    <input type='password' placeholder='Password'/>
    </div>
    <div className='grid'>
    <span className='forgot-pass'>Forgot password?</span>
    <button>Sign Up</button>
   
    <span className='signup'>Don't have an account? <Link to='/login'>Login</Link></span>
    </div>
</form>
    </div>
 </div>
 </>
  )
}
