import '../styles/Card.css';
import React, { useState, useEffect } from "react";

const Card = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "card">
      <p>This is a card</p>
    </div>
  );
};

export default Card;