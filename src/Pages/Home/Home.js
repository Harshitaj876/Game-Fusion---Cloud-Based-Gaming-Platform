import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import '../Home/Home.css'
import Mode from '../../Assets/Night_mode.png'
import Notification from '../../Assets/notification.png'
import tictactoe from '../../Assets/tictactoe.png'
import Snakes from '../../Assets/snake.jpeg'

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='top'>

      <div className='topBar'>
        <div className='namebox'>
          {!user ? (
              <h2><Link to="/login" className='name'>Click here to Login</Link></h2>
            ) : (
              <h2 className='name'>Hello {user.displayName}</h2>
            )}
            <h1>Welcome Back!</h1>
            
        </div>

        <div className='Icons'>
          <img src={Mode} alt='mode'></img>
          <img src={Notification} alt='notification'></img>
          {user && <button onClick={handleLogout} className='logoutbutton'>Logout</button>}
        </div>
      </div>
      
      <div className='Games'>
      Popular Games
        <div className='Gamename'>
          <div className='Gamename1'>
            <img src={tictactoe} alt=''></img>
            Tic Tac Toe
          </div>
          <Link to="/game">
            <button className="start-button">Start Game</button>
          </Link>
        </div>
        <div className='Gamename'>
          <div className='Gamename1'>
            <img src={Snakes} alt=''></img>
            Snakes
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
