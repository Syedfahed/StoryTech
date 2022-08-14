import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export default function Login() {
  return (
 <>
 <div className='login-page'>
    <div className='resume-login' >
        <img src='/Image/c1.png' alt='' className='img'/>
        <h2>New Resume. New Job.</h2>
        <span className='one' >Sign into your account here:
</span>
<form>
    <div className='email'>
    <i className='bi bi-envelope'/>
    <input type='email' placeholder='Email address/Phone number'/>
    </div>
    <div className='password'>
    <i className='bi bi-lock'/>
    <input type='password' placeholder='Password'/>
    </div>
    <div className='grid'>
    <span className='forgot-pass'>Forgot password?</span>
    <button>Login</button>
    <button>Login with OTP</button>
    <span className='signup'>Don't have an account? <Link to='/signup'>Sign up</Link></span>
    </div>
</form>
    </div>
 </div>
 </>
  )
}
