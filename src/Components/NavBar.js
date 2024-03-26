import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "../Components/NavBar.css"
import Logo from '../Assets/logo_navbar.png';
import Home_inactive from '../Assets/home_inactive.png'
import trending_inactive from '../Assets/trending_inactive.png'
import games_category_inactive from '../Assets/games_category_inactive.png'
import esports_inactive from '../Assets/esports_inactive.png'
import download_inactive from '../Assets/download_inactive.png'
import streams_inactive from '../Assets/streams_inactive.png'
import settings_inactive from '../Assets/settings_inactive.png'
import helpsupport_inactive from '../Assets/helpsupport_inactive.png'

function NavBar() {
  
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav">
      <div className="Conatiner">
        <img src={Logo} alt="logo"></img>
        <ul>
        <li>
          <NavLink to="/" activeClassName="active" onClick={() => handleSetActiveLink('home')} className="link"><span><img src={Home_inactive} alt=""></img></span>Home</NavLink>
        </li>
        <li>
          <NavLink to="/trending" activeClassName="active" onClick={() => handleSetActiveLink('trending')} className="link"><span><img src={trending_inactive} alt=""></img></span>Trending</NavLink>
        </li>
        <li>
          <NavLink to="/gamescategory" activeClassName="active" onClick={() => handleSetActiveLink('GamesCategory')} className="link"><span><img src={games_category_inactive} alt=""></img></span>Games Category</NavLink>
        </li>
        <li>
          <NavLink to="/esports" activeClassName="active" onClick={() => handleSetActiveLink('Esports')} className="link"><span><img src={esports_inactive} alt=""></img></span>Esports</NavLink>
        </li>
        <li>
          <NavLink to="/downloadapp" activeClassName="active" onClick={() => handleSetActiveLink('DownloadApp')} className="link"><span><img src={download_inactive} alt=""></img></span>Download App</NavLink>
        </li>
        <li>
          <NavLink to="/streams" activeClassName="active" onClick={() => handleSetActiveLink('Streams')} className="link"><span><img src={streams_inactive} alt=""></img></span>Streams</NavLink>
        </li>
        
      </ul>
        <div className="Menu2">
          <ul>
            <li>
              <NavLink to="/settings" activeClassName="active" onClick={() => handleSetActiveLink('settings')} className="link"><span><img src={settings_inactive} alt=""></img></span>Settings</NavLink>
            </li>
            <li>
              <NavLink to="/help&support" activeClassName="active" onClick={() => handleSetActiveLink('help')} className="link"><span><img src={helpsupport_inactive} alt=""></img></span>Help and Support</NavLink>
            </li>
          </ul>  
        </div>
      </div>
    </nav>
  );
}

export default NavBar;