import '../styles/Card.css';
import React, { useState, useEffect } from "react";
import logo from '../logos/kentucky.png'

const Card = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div className = "card">
      <img src={logo} alt="kentucky"></img>
      <p>This is a card</p>
    </div>
  );
};

export default Card;