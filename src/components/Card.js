import '../styles/Card.css';
import React, { useState, useEffect } from "react";


const Card = (props) => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div className = "card">
      <img src={props.logo} alt={props.team}></img>
      <p className="team-name">{props.team}</p>
    </div>
  );
};

export default Card;