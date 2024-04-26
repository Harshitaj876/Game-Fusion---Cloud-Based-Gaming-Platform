import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'
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

    const handleClick = () => {
      window.open('https://f9ccjc7drq.ap-south-1.awsapprunner.com/', '_blank'); // Open link in a new tab
    };

  return (
    <div className='top'>

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
          <Link to="/game4">
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

          <button className='G1' onClick={handleClick}>
            <img src={DeadShot} alt=''></img>
            <div className='title'>Dead Shot</div>
          </button>

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
