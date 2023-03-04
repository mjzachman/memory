import '../styles/App.css';
import React, { useState, useEffect } from "react";
import Title from './Title.js';
import Score from './Score.js';
import Field from './Field.js';

const App = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "app">
      <Title />
      <Score />
      <Field />
    </div>
    
  );
};

export default App;
