import React, { useState, useEffect } from 'react';
import Splash from './SplashScreen/Splash';
import Login from './Pages/Login/Login'
import './App.css';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {isLoaded ? <Login /> : <Splash />}
    </div>
  );
}

export default App;
