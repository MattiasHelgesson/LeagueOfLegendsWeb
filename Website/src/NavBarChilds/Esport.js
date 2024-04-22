// Esport.js
import React from 'react';
import './Esport.css';
import AllLeagueTeams from '../images/All League of legends Teams.jpg';
import LeagueEsport2 from '../images/League Of Legends Esport2.jpg';
import T1VSG2 from '../images/Samira.jpg';

function Esport() {
  return (
    <div className="Esport">
      {/* Första raden */}
      <div className="big-column">
        <div className="column-item">
          <img src={AllLeagueTeams} alt="Image 1" />
        </div>
        <div className="column-item">
          <p>VAD ÄR ESPORT?
          Esport är ett live event. Där flera proffitionella spleare sammals för att koll vilket lag som är best och få priser där efter
          </p>
        </div>
        <div className="column-item">
          <img src={LeagueEsport2} alt="Image 2" />
        </div>
      </div>

      {/* Andra raden */}
      <div className="small-column">
        <div className="column-item">
          <p>OM Esport
          Esport hålls lite var som. Det beror på år till år och vilket lag som vinner.
          </p>
        </div>
        <div className="column-item">
          <img src={LeagueEsport2} alt="Image 3" />
        </div>
        <div className="column-item">
          <p>ALL Teams
          Alla olika lag inom Leauge of legends. Där G2 och T1 så klart är dem två bästa lagen
          </p>
        </div>
        <div className="column-item">
          <img src={T1VSG2} alt="Image 4" />
        </div>
      </div>
    </div>
  );
}

export default Esport;
