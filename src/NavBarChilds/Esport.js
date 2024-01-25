import React from 'react';
import AllLeagueTeams from '../images/All League of legends Teams.jpg';
//import LeagueEsport from '../images/League Of Legends Esport.jpg';
import LeagueEsport2 from '../images/League Of Legends Esport2.jpg';
import T1VSG2 from '../images/Samira.jpg';


function Esport(props) {
  return (
    <div className="Esport">
      <div className="top-row">
        <div className="top-column">
          <div className="image-column">
            <img src={AllLeagueTeams} alt="All League of Legends Teams" />
          </div>
          <div className="text-column">
            <p>Text for top column 1</p>
          </div>
          <div className="picture-column">
            <img src={LeagueEsport2} alt="League of Legends Esport" />
          </div>
        </div>
        <div className="top-column">
          <p>Text for top column 2</p>
        </div>
      </div>
      <div className="bottom-row">
        <div className="bottom-column">
          <p>Text for bottom column 1</p>
        </div>
        <div className="bottom-column">
          <div className="image-column">
            <img src={T1VSG2} alt="Samira" />
          </div>
          <div className="text-column">
            <p>Text for bottom column 2</p>
          </div>
        </div>
        <div className="bottom-column">
          <p>Text for bottom column 3</p>
        </div>
        <div className="bottom-column">
          <div className="image-column">
            <img src={LeagueEsport2} alt="League of Legends Esport 2" />
          </div>
          <div className="text-column">
            <p>Text for bottom column 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Esport;
