import '../styles/Card.css';
import React from "react";


const Card = (props) => {
  

  return (
    <div className = "card" onClick = {props.onClick}>
      <img src={props.logo} alt={props.name}></img>
      <p className="team-name">{props.name}</p>
    </div>
  );
};

export default Card;