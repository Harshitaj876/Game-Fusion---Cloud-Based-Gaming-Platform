import React from "react";
import { links } from "../data";
import {NavLink, Link } from "react-router-dom";
import "../Components/NavBar.css"
import Logo from '../Assets/logo_navbar.png';

function NavBar() {
  return (
    <nav className="nav">
      <div><img src={Logo} alt=""/></div>


      <div className="Menu">
        <ul className="Nav_List">
          {links.map(({name, path}, index) =>{
            return(
              <li className="nav_item" key ={index}>
                <NavLink to={path} className="nav-link">
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="Menu2">
      <Link to='/settings' className="nav_name">Settings</Link>
      <Link to='/help&support' className="nav_name">Help and support</Link>
      <Link to='/login' className="nav_name">Login</Link>
      </div>

    </nav>
  );
}

export default NavBar;