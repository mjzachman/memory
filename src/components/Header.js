import '../styles/Header.css';
import React, { useState, useEffect } from "react";
import Score from './Score.js';

const Header = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div className = "header">
        <p className = "title">SEC Memory Game</p>
        <Score />
    </div>
    
  );
};

export default Header;