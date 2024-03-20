import React from 'react'
import '../SplashScreen/Splash.css'
import Logo from '../../src/Assets/Logo.png'
import { useState, useEffect } from 'react';

const Splash = () => {

    const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='splash'>
        <img src={Logo} alt="Logo" />
        {showName && <h1 className='Text'>Game Fusion</h1>}
    </div>
  )
}

export default Splash