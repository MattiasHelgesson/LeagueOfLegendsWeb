import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LeagueLogo from './images/LeagueLogo.png';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/champions">Champions</Link></li>
        <li><Link to="/home"><img src={LeagueLogo} className="logo-image" alt="League of Legends Logo" /></Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/esport">Esport</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
