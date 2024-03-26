import React from "react";
import {Link } from "react-router-dom";
import "../Components/NavBar.css"
import Logo from '../Assets/logo_navbar.png';
import Home_active from '../Assets/Home_active.png'
import trending_inactive from '../Assets/trending_inactive.png'
import games_category_inactive from '../Assets/games_category_inactive.png'
import esports_inactive from '../Assets/esports_inactive.png'
import download_inactive from '../Assets/download_inactive.png'
import streams_inactive from '../Assets/streams_inactive.png'
import settings_inactive from '../Assets/settings_inactive.png'
import helpsupport_inactive from '../Assets/helpsupport_inactive.png'

function NavBar() {
  return (
    <nav className="nav">
      <div className="Conatiner">
        <img src={Logo} alt="logo"></img>
        <div className="Menu1">
          <Link to='/' className="link"><span><img src={Home_active} alt=""/></span>Home</Link>
          <Link to='/trending' className="link"><span><img src={trending_inactive} alt=""/></span>Trending</Link>
          <Link to='/gamescategory' className="link"><span><img src={games_category_inactive} alt=""/></span>Games Category</Link>
          <Link to='/esports' className="link"><span><img src={esports_inactive} alt=""/></span>Esports</Link>
          <Link to='/downloadapp' className="link"><span><img src={download_inactive} alt=""/></span>Download App</Link>
          <Link to='/streams' className="link"><span><img src={streams_inactive} alt=""/></span>Streams</Link>
        </div>
        <div className="Menu2">
          <Link to='/settings' className="link"><span><img src={settings_inactive} alt=""/></span>Settings</Link>
          <Link to='/help&support' className="link"><span><img src={helpsupport_inactive} alt=""/></span>Help and support</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;