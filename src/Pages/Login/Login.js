import React from 'react'
import FrontImage from '../../Assets/LoginImage.png'
import Logo from '../../Assets/Logo.png'
import '../Login/Login.css'

const Login = () => {
  return (
    <div className='Login'>
    <div className='loginform'>
      <img src={Logo} alt='Logo'></img>
      <h1 className='LoginText'>Login</h1>
    </div>
      <img src={FrontImage} alt="FrontImage"></img>
    </div>
  )
}

export default Login