import '../styles/Field.css';
import React, { useState, useEffect } from "react";
import Card from './Card.js';
import alabamaLogo from '../logos/alabama.png';
import arkansasLogo from '../logos/arkansas.png';
import auburnLogo from '../logos/auburn.png';
import floridaLogo from '../logos/florida.png';
import georgiaLogo from '../logos/georgia.png';
import kentuckyLogo from '../logos/kentucky.png';
import lsuLogo from '../logos/lsu.png';
import mississippiLogo from '../logos/mississippi.png';
import missouriLogo from '../logos/missouri.png';
import mstateLogo from '../logos/mstate.png';
import oklahomaLogo from '../logos/oklahoma.png';
import scarolinaLogo from '../logos/scarolina.png';
import tamLogo from '../logos/tam.png';
import tennesseeLogo from '../logos/tennessee.png';
import texasLogo from '../logos/texas.png';
import vanderbiltLogo from '../logos/vanderbilt.png';
import Score from './Score.js';

const Field = () => {
  
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  
  const teams = [
    {
      logo: alabamaLogo,
      name: 'Alabama'
    },
    {
      logo: arkansasLogo,
      name: 'Arkansas'
    },
    {
      logo: auburnLogo,
      name: 'Auburn'
    },
    {
      logo: floridaLogo,
      name: 'Florida'
    },
    {
      logo: georgiaLogo,
      name: 'Georgia'
    },
    {
      logo: kentuckyLogo,
      name: 'Kentucky'
    },
    {
      logo: lsuLogo,
      name: 'LSU'
    },
    {
      logo: mississippiLogo,
      name: 'Mississippi'
    },
    {
      logo: missouriLogo,
      name: 'Missouri'
    },
    {
      logo: mstateLogo,
      name: 'Mississippi State'
    },
    {
      logo: oklahomaLogo,
      name: 'Oklahoma'
    },
    {
      logo: scarolinaLogo,
      name: 'South Carolina'
    },
    {
      logo: tamLogo,
      name: 'Texas A&M'
    },
    {
      logo: tennesseeLogo,
      name: 'Tennessee'
    },
    {
      logo: texasLogo,
      name: 'Texas'
    },
    {
      logo: vanderbiltLogo,
      name: 'Vanderbilt'
    }
  ];

  function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  
 
  

  useEffect(() => {
    console.log('useEffect');
  });

  

  const handleClick = (e) => {
    const userChoice = e.target.parentNode.lastChild.textContent;
    console.log(userChoice);
    if (clicked.includes(userChoice)){
      setScore(0);
      setClicked([]);
    } else {
      setScore(score + 1);
      setClicked([...clicked, userChoice]);
    }
    
  }



  return (
    <div className = "gameHandler">
       <Score score = {score}/>
       <div className = "field">
        
        { 
          shuffle(teams).map((team) => 
          <Card 
            logo = {team.logo}
            name = {team.name}
            key = {team.name}
            onClick = {handleClick}
            />
        )
        }
    </div>
    </div>
   
    
  );
};

export default Field;