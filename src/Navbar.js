// Navbar.js
import React from 'react';
import './Navbar.css';
import LeagueLogo from './images/LeagueLogo.png';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Champions</a></li>
        <li><a href="#"><img src={LeagueLogo}></img></a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Esport</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
