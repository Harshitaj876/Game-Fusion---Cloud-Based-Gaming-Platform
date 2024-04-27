import React from 'react'
import '../Games Category/gamescategory.css'
import poker from '../../Assets/poker.jpeg'
import games from '../../Assets/sdcsd.jpeg'
import jackpot from '../../Assets/jackpotg.jpeg'
import Action from '../../Assets/action.jpeg'
import crypto from '../../Assets/crpto.jpeg'
import puzzle from '../../Assets/puzzle.jpeg'
import multi from '../../Assets/multi.jpeg'

const gamescategory = () => {
  return (
    <div className='games'>

      <div className='row1'> 
        <button className='G1'>
          <img src={poker} alt=''></img>
            <div className='titleghj'>Poker</div>
        </button>

        <button className='G1'>
          <img src={games} alt=''></img>
            <div className='titleghj'>Games</div>
        </button>

        <button className='G1'>
          <img src={jackpot} alt=''></img>
            <div className='titleghj'>Jackpot</div>
        </button>

        <button className='G1'>
          <img src={Action} alt=''></img>
            <div className='titleghj'>Action</div>
        </button>

      </div>

      <div className='row2'> 
        <button className='G1'>
          <img src={crypto} alt=''></img>
            <div className='titleghj'>Crypto</div>
        </button>

        <button className='G1'>
          <img src={puzzle} alt=''></img>
            <div className='titleghj'>Puzzle</div>
        </button>

        <button className='G1'>
          <img src={multi} alt=''></img>
            <div className='titleghj'>Multiplayer</div>
        </button>

      </div>
        

    </div>
  )
}

export default gamescategory