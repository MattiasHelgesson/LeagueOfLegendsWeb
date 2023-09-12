// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Champions</a></li>
        <li><a href="#"><img src="/images/LeagueLogo.png"></img></a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Esport</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
