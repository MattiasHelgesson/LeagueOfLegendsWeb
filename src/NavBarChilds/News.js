import React from 'react';
import './News.css';
import Arena_GameMode from '../images/2v2v2.png';
import League_Items from '../images/League items.jpg';
import Samira from '../images/Samira.jpg';
import soul_fighter_viego_final from '../images/soul-fighter-viego-final.png';

function News(props) {
  return (
    <div className="News">
      <div className="column">
        <img src={League_Items} alt="" />
        <h2>Patch 13.16</h2>
        <p>Fakta om Patch 13.16 kommer här, Det kan vara allt från himmel till jord. Ignorera detta dock. Detta är bara för att fylla ut och vissa hur det kommer se ut med text i rutan</p>
      </div>
      <div className="column">
        <img src={Samira} alt="" />
        <h2>Tft Uppdates</h2>
        <p>Fakta om tft uppdates kommer här. Nya saker som händer och nya karaktärs uppdelningar</p>
      </div>
      <div className="column">
        <img src={Arena_GameMode} alt="" />
        <h2>Arena Uppdate</h2>
        <p>Nya saker som händer med game modes. Nya tillägg och gammla bortagelser. </p>
      </div>
      <div className="column larger-column">
        <img src={soul_fighter_viego_final} alt="" />
        <h2>Generell Info Som Hänt</h2>
        <p>Bara lite text om vad som hänt. Saker som till kommit. Samt saker som hänt under League community. 
Saker som kan vara användbara för spelaren eller bara generella saker som inte passar in någon annan stans</p>
      </div>
    </div>
  );
}

export default News;
