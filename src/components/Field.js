import '../styles/Field.css';
import React, { useState, useEffect } from "react";
import Card from './Card.js';
import alabamaLogo from '../logos/alabama.png'
import arkansasLogo from '../logos/arkansas.png'
import auburnLogo from '../logos/auburn.png'
import floridaLogo from '../logos/florida.png'
import georgiaLogo from '../logos/georgia.png'
import kentuckyLogo from '../logos/kentucky.png'
import lsuLogo from '../logos/lsu.png'
import mississippiLogo from '../logos/mississippi.png'
import missouriLogo from '../logos/missouri.png'
import mstateLogo from '../logos/mstate.png'
import oklahomaLogo from '../logos/oklahoma.png'
import scarolinaLogo from '../logos/scarolina.png'
import tamLogo from '../logos/tam.png'
import tennesseeLogo from '../logos/tennessee.png'
import texasLogo from '../logos/texas.png'
import vanderbiltLogo from '../logos/vanderbilt.png'

const Field = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

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
  const teamCards = teams.map((team) => 
    <Card 
      logo = {team.logo}
      team = {team.name}
      />
  );



  return (
    <div className = "field">
        { teamCards }
    </div>
    
  );
};

export default Field;