import React, { useState } from "react";
import { NavLink ,Link} from "react-router-dom";
import "../Components/NavBar.css";
import Logo from '../Assets/logo_navbar.png';
import HomeInactive from '../Assets/home_inactive.png';
import HomeActive from '../Assets/Home_active.png';
import TrendingInactive from '../Assets/trending_inactive.png';
import TrendingActive from '../Assets/trending_active.png';
import GamesCategoryInactive from '../Assets/games_category_inactive.png';
import GamesCategoryActive from '../Assets/games_category_active.png';
import EsportsInactive from '../Assets/esports_inactive.png';
import EsportsActive from '../Assets/esports_active.png';
import DownloadInactive from '../Assets/download_inactive.png';
import DownloadActive from '../Assets/download_active.png';
import StreamsInactive from '../Assets/streams_inactive.png';
import StreamsActive from '../Assets/streams_active.png';
import SettingsInactive from '../Assets/settings_inactive.png';
import SettingsActive from '../Assets/settings_active.png';
import HelpSupportInactive from '../Assets/helpsupport_inactive.png';
import HelpSupportActive from '../Assets/helpsupport_active.png';

function NavBar() {

  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav">
      <div className="Conatiner">
      <Link to="/">
        <button className="logobutton">
        <img src={Logo} alt="logo"></img>
        </button>
      </Link>
        
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" onClick={() => handleSetActiveLink('home')} className="link">
              <span><img src={activeLink === 'home' ? HomeActive : HomeInactive} alt=""></img></span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/trending" activeClassName="active" onClick={() => handleSetActiveLink('trending')} className="link">
              <span><img src={activeLink === 'trending' ? TrendingActive : TrendingInactive} alt=""></img></span>Trending
            </NavLink>
          </li>
          <li>
            <NavLink to="/gamescategory" activeClassName="active" onClick={() => handleSetActiveLink('GamesCategory')} className="link">
              <span><img src={activeLink === 'GamesCategory' ? GamesCategoryActive : GamesCategoryInactive} alt=""></img></span>Games Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/esports" activeClassName="active" onClick={() => handleSetActiveLink('Esports')} className="link">
              <span><img src={activeLink === 'Esports' ? EsportsActive : EsportsInactive} alt=""></img></span>Esports
            </NavLink>
          </li>
          <li>
            <NavLink to="/downloadapp" activeClassName="active" onClick={() => handleSetActiveLink('DownloadApp')} className="link">
              <span><img src={activeLink === 'DownloadApp' ? DownloadActive : DownloadInactive} alt=""></img></span>Download App
            </NavLink>
          </li>
          <li>
            <NavLink to="/streams" activeClassName="active" onClick={() => handleSetActiveLink('Streams')} className="link">
              <span><img src={activeLink === 'Streams' ? StreamsActive : StreamsInactive} alt=""></img></span>Streams
            </NavLink>
          </li>
        </ul>
        <div className="Menu2">
          <ul>
            <li>
              <NavLink to="/settings" activeClassName="active" onClick={() => handleSetActiveLink('settings')} className="link">
                <span><img src={activeLink === 'settings' ? SettingsActive : SettingsInactive} alt=""></img></span>Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/help&support" activeClassName="active" onClick={() => handleSetActiveLink('help')} className="link">
                <span><img src={activeLink === 'help' ? HelpSupportActive : HelpSupportInactive} alt=""></img></span>Help and Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
