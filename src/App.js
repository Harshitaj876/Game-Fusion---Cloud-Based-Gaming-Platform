import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './SplashScreen/Splash';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/Signup';
import Trending from './Pages/Trending/trending';
import GamesCategory from './Pages/Games Category/gamescategory';
import Esports from './Pages/Esports/esports';
import DownloadApp from './Pages/DownloadApp/downloadapp';
import Streams from './Pages/Streams/streams';
import Settings from './Pages/Settings/settings';
import Helpsupport from './Pages/Help&support/helpsupport';
import NavBar from './Components/NavBar';
import Profile from './Components/profile'
import Home from './Pages/Home/Home';
import Tictactoe from './TicTacToe/tictactoe';
import SnakeGame from './Snakegame/SnakeGame';
import Tetris from './Tetris/TetrisGame'
import Wordsearch from './WordSearch/wordsearch';
import './App.css';
import { auth } from './Firebase';

function App() {
  const [userName, setUserName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='layout'>
      {isLoaded ? (
        <BrowserRouter>
          <NavBar />
          <div style={{ flex: 1 }}> 
            <Profile/>
            <Routes>
              <Route path='/' element={<Home name={userName}/>}></Route>
              <Route path='/game' element={<Tictactoe/>}></Route>
              <Route path='/game2' element={<SnakeGame/>}></Route>
              <Route path='/game3' element={<Tetris/>}></Route>
              <Route path='/game4' element={<Wordsearch/>}></Route>
              <Route path='/trending' element={<Trending />} />
              <Route path='/gamescategory' element={<GamesCategory />} />
              <Route path='/esports' element={<Esports />} />
              <Route path='/downloadapp' element={<DownloadApp />} />
              <Route path='/streams' element={<Streams />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/help&support' element={<Helpsupport />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <Splash />
      )}
    </div>
  );
}

export default App;
