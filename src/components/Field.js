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



  return (
    <div className = "field">
        <Card
          logo = {alabamaLogo}
          team = 'Alabama'
          />
        <Card
          logo = {arkansasLogo}
          team = 'Arkansas'
          />
        <Card
          logo = {auburnLogo}
          team = 'Auburn'
          />
        <Card
          logo = {floridaLogo}
          team = 'Florida'
          />
        <Card
          logo = {georgiaLogo}
          team = 'Georgia'
          />
        <Card
          logo = {kentuckyLogo}
          team = 'Kentucky'
          />
        <Card
          logo = {lsuLogo}
          team = 'LSU'
          />
        <Card
          logo = {mississippiLogo}
          team = 'Ole Miss'
          />
        <Card
          logo = {missouriLogo}
          team = 'Missouri'
          />
        <Card
          logo = {mstateLogo}
          team = 'Mississippi State'
          />
        <Card
          logo = {oklahomaLogo}
          team = 'Oklahoma'
          />
        <Card
          logo = {scarolinaLogo}
          team = 'South Carolina'
          />
        <Card
          logo = {tamLogo}
          team = 'Texas A&M'
          />
        <Card
          logo = {tennesseeLogo}
          team = 'Tennessee'
          />
        <Card
          logo = {texasLogo}
          team = 'Texas'
          />
        <Card
          logo = {vanderbiltLogo}
          team = 'Vanderbilt'
          />
        
    </div>
    
  );
};

export default Field;