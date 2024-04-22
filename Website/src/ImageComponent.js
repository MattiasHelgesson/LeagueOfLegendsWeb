import React from 'react';
import './ImageComponent.css';
import League_of_Legends_logo_PNG1 from './images/League_of_Legends_logo_PNG1.png';

function ImageComponent() {
  const redirectToLeagueOfLegendsSignUp = () => {
    window.location.href = 'https://signup.leagueoflegends.com/en-gb/signup/index#/';
  };

  return (
    <div className="image-container">
      <img src={League_of_Legends_logo_PNG1} className="center-image" alt="League of Legends Logo" />
      <button onClick={redirectToLeagueOfLegendsSignUp} className="custom-button"> Play for FREE! </button>
    </div>
  );
}

export default ImageComponent;
