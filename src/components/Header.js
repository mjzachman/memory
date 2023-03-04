import '../styles/Title.css';
import React, { useState, useEffect } from "react";
import Score from './Score.js';

const Header = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "header">
        <p class = "title">This is the title!</p>
        <Score />
    </div>
    
  );
};

export default Header;