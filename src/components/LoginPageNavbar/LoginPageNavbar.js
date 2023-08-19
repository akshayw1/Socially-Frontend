import React from 'react'
import './LoginPageNavbar.css'
const LoginPageNavbar = () => {
  return (
    <div className='LoginNavbar'>
        <div className='Logo'>
            Socailly
        </div>
    <div className='ActionBtn'>
    <button className='AuthAction black'> 
            Login</button>
        <button  className='AuthAction violet'>
        Register</button>
    </div>
       
        </div>
  )
}

export default LoginPageNavbar