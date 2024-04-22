// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LeagueLogo from './images/LeagueLogo.png';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    console.log('Clicked item:', item);
    setSelectedItem(item);
    console.log('Selected item:', selectedItem);
  };

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/about" className={selectedItem === 'about' ? 'selected' : ''} onClick={() => handleItemClick('about')}>How to play</Link></li>
        <li><Link to="/champions" className={selectedItem === 'champions' ? 'selected' : ''} onClick={() => handleItemClick('champions')}>Champions</Link></li>
        <li><Link to="/home" onClick={() => handleItemClick(null)}><img src={LeagueLogo} className="logo-image" alt="League of Legends Logo" /></Link></li>
        <li><Link to="/news" className={selectedItem === 'news' ? 'selected' : ''} onClick={() => handleItemClick('news')}>News</Link></li>
        <li><Link to="/esport" className={selectedItem === 'esport' ? 'selected' : ''} onClick={() => handleItemClick('esport')}>Esport</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
