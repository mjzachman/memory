import '../styles/Score.css';
import React from "react";

const Score = (props) => {
  
  return (
    <div className = "score">
        <p>Score: {props.score}</p>
    </div>
    
  );
};

export default Score;