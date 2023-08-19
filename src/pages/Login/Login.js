import React from 'react'
import LoginPage from '../../components/LoginPage/LoginPage'
import Bglogin from '../../assets/person/bglogin.jpg'

import './Login.css'
// import LoginPageNavbar from '../../components/LoginPageNavbar/LoginPageNavbar'
const Login = () => {
  return (
    <>  
   
    <div className='LoginDiv'>
        <div className='LoginImage'>
          <img src={Bglogin} alt=''></img>

        </div>
        <div> <LoginPage></LoginPage>  </div>

    </div>

    </>
    
    
    
  )
}

export default Login