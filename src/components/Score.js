import '../styles/Field.css';
import React, { useState, useEffect } from "react";

const Score = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "score">
        <p>This is the score</p>
    </div>
    
  );
};

export default Score;