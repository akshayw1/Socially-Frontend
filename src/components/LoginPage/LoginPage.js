import React from 'react'
import './LoginPage.css'
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='LoginWrapper'>
        <h2> Login in to Socailly</h2>

        <div className='LoginForm'>
        <input type='text' placeholder='Email' name='email' className='Linput'/> 
        <input type='password' placeholder='Password' name='password' className='Linput'/>
        <button className='LoginBtn'><Link to = "/profile">Login </Link> </button>
        </div>
        <div className='LoginBottom'>
        Dont have a Account <span>Register</span>
        </div>
        <div className='ExtLogin'>
        <button className='LoginBtn'> Login with Google</button>
        <button className='LoginBtn'> Login With FaceBook</button>
        </div>
       

        </div>
  )
}

export default LoginPage