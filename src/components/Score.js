import '../styles/Score.css';
import React, { useState, useEffect } from "react";

const Score = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "score">
        <p>Score: 0</p>
    </div>
    
  );
};

export default Score;