import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Splash from './SplashScreen/Splash';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/Signup'
import Home from './Pages/Home/Home'
import './App.css';
import { auth } from './Firebase';

function App() {
  const [userName, setUserName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("");
      }
    })
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      <div>
        {isLoaded ? (
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home name = {userName}/>} />
          </Routes>
        ) : (
          <Splash />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
