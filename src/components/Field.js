import '../styles/Field.css';
import React, { useState, useEffect } from "react";
import Card from './Card.js';

const Field = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "field">
        <p>This is the field</p>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    
  );
};

export default Field;