import React from 'react'
import FrontImage from '../../Assets/LoginImage.png'
import Logo from '../../Assets/Logo.png'
import '../Login/Login.css'
import Discord from '../../Assets/discord.png'
import Google from '../../Assets/google.png'

const Login = () => {

  return (
    <div className='Login'>
      <div className='form'>
        <div className='LogoSection'>
          <img src={Logo} alt='logo'></img>
          <h1>Login</h1>
        </div>
        <div className='Options'>
          <div className='buttons'>
            <button><img src={Discord} alt='Discord'></img></button>
            <button><img src={Google} alt='Google'></img></button>
          </div>
          <div className="text-with-lines">
            <div className="horizontal-line"></div>
            <div className="blackText">OR</div>
            <div className="horizontal-line"></div>
          </div>

        </div>
        <div className='Inputs'>
          <input type="text" id="Username" name="Username" placeholder="Username"></input>
          <input type="Password" id="Password" name="Password" placeholder="Password"></input>
          <div className='space'>
            Forgot Password?
            <button>Login</button>
          </div>
          <button className='normal'>Create account</button>
        </div>
      </div>
      <img src={FrontImage} alt='frontImage'></img>
    </div>
  )
}

export default Login