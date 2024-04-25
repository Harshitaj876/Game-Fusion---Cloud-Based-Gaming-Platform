import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import '../Home/Home.css'
import Mode from '../../Assets/Night_mode.png'
import Notification from '../../Assets/notification.png'
import Snakes from '../../Assets/snake_poster.png'
import Tetris from '../../Assets/tetris.png'
import TicTacToe_Poster from '../../Assets/TicTacToe_poster.png'
import casino from '../../Assets/casino.png'
import Jackpot from '../../Assets/jackpot.png'
import remote from '../../Assets/remote.png'
import Cards from '../../Assets/card.png'
import gun from '../../Assets/gun.png'
import wordSearch from '../../Assets/Word search.png'
import DeadShot from '../../Assets/deadshot.png'

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

      <div className='Genres'>
          <button className='gen1'>
            <img src={casino} alt=''></img>
            <div className='rightText'>
              <h5>Crypto Casino</h5>
              <h4>Crypto Casino games</h4>
            </div>
          </button>
          <button className='gen1'>
            <img src={remote} alt=''></img>
            <div className='rightText'>
              <h5>Games</h5>
              <h4>Blockchain make games</h4>
            </div>
          </button>
          <button className='gen1'>
            <img src={Jackpot} alt=''></img>
            <div className='rightText'>
              <h5>Jackpot</h5>
              <h4>Jackpots to play online</h4>
            </div>
          </button>
          <button className='gen1'>
            <img src={Cards} alt=''></img>
            <div className='rightText'>
              <h5>Poker</h5>
              <h4>Worlds most popular</h4>
            </div>
          </button>
          <button className='gen1'>
            <img src={gun} alt=''></img>
            <div className='rightText'>
              <h5>Action</h5>
              <h4>Shooting Games</h4>
            </div>
          </button>
      </div>

      <div className='Games'>
        Continue playing
        <div className='gameContent'>
          <Link to="/game">
          <button className='G1'>
            <img src={TicTacToe_Poster} alt=''></img>
            <div className='title'>Tic Tac Toe</div>
          </button>
          </Link>

          <Link to="/game2">
          <button className='G1'>
            <img src={Snakes} alt=''></img>
            <div className='title'>Snakes</div>
          </button>
          </Link>
        </div>
        
        
      </div>

      <div className='Games'>
        Popular Games
        <div className='gameContentexp'>
          <Link to="/game">
          <button className='G1'>
            <img src={wordSearch} alt=''></img>
            <div className='title'>Word Search</div>
          </button>
          </Link>

          <Link to="/game3">
          <button className='G1'>
            <img src={Tetris} alt=''></img>
            <div className='title'>Tetris</div>
          </button>
          </Link>

          <Link to="/game2">
          <button className='G1'>
            <img src={DeadShot} alt=''></img>
            <div className='title'>Dead Shot</div>
          </button>
          </Link>

          <Link to="/game2">
          <button className='G1'>
            <img src={Snakes} alt=''></img>
            <div className='title'>Snakes</div>
          </button>
          </Link>

          <Link to="/game">
          <button className='G1'>
            <img src={TicTacToe_Poster} alt=''></img>
            <div className='title'>Tic Tac Toe</div>
          </button>
          </Link>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default Home;
