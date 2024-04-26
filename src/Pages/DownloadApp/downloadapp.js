import React from 'react'
import '../DownloadApp/downloadapp.css'
import download from '../../Assets/Download.png'

const downloadapp = () => {
  return (
    <div className='whole'>
      <img src={download} alt=''></img>
      <div className='head'>
        <h1>Revolutionize Your Online Experience with Game Fusion</h1>
        <h5>Your Website, Now in Your Pocket!</h5>
        <h5>Stay connected on-the-go with our upcoming mobile app, Game Fusion. Seamlessly access all the features of our website right from your smartphone. Don't miss out—download the app and elevate your online experience today!</h5>
      </div>
    </div>
  )
}

export default downloadapp