import React, { useState } from 'react'
import FrontImage from '../../Assets/LoginImage.png'
import Logo from '../../Assets/Logo.png'
import '../Login/Login.css'
import Discord from '../../Assets/discord.png'
import Google from '../../Assets/google.png'
import InputControl from '../../InputControls/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../Firebase'

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: " ",
    pass: " ",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () =>{
    if(!values.email && !values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
      setSubmitButtonDisabled(false);
      navigate("/");
    }).catch((err) =>{ 
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message)});
  }

  return (
    <div className='Login'>
      <div className='form'>
        <div className='LogoSection'>
          <img src={Logo} alt='logo'></img>
          <h1>LOGIN</h1>
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
        <InputControl placeholder="Email address"
          onChange={event=>setValues(prev=>({...prev,email: event.target.value}))}
        />
        <InputControl placeholder="Password"
          onChange={event=>setValues(prev=>({...prev,pass: event.target.value}))}
        />
        <div className='space'>
            <b className='errormsg'>{errorMsg}</b>
            <button onClick={handleSubmission} disabled ={submitButtonDisabled}>Login</button>
        </div>
          <div className='signup'>
          <Link to="/signup" className='normal'>Create account</Link>
          </div>
        </div>
      </div>
      <img src={FrontImage} alt='frontImage'></img>
    </div>
  )
}

export default Login