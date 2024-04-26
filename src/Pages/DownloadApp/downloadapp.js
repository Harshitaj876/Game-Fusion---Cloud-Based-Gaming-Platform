import React from 'react'
import '../DownloadApp/downloadapp.css'
import download from '../../Assets/Download.png'
import playstore from '../../Assets/playstore.png'
import appStore from '../../Assets/appstore.png'

const downloadapp = () => {

  const handleClick = (link) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  return (
    <div className='whole'>
      <img src={download} alt=''></img>
      <div className='head'>
        <h1>Revolutionize Your Online Experience with Game Fusion</h1>
        <h5>Your Website, Now in Your Pocket!</h5>
        <h5>Stay connected on-the-go with our upcoming mobile app, Game Fusion. Seamlessly access all the features of our website right from your smartphone. Don't miss out—download the app and elevate your online experience today!</h5>
      </div>
      <div className='bottom'>
        <div className='btitle'>
          <div className='horizontal-line'></div>
          <h5>Download the app from</h5>
          <div className='horizontal-line'></div>
        </div>
        <div className='bottomicons'>
          <img src={playstore} alt='' onClick={()=>handleClick('https://play.google.com/store/games?hl=en_IN&gl=US')}></img>
          <img src={appStore} alt='' onClick={()=>handleClick('https://www.apple.com/in/app-store/')}></img>
        </div>
      </div>
    </div>
  )
}

export default downloadapp