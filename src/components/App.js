import '../styles/App.css';
import React, { useState, useEffect } from "react";
import Header from './Header.js';

import Field from './Field.js';

const App = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "app">
      <Header />
      <Field />
    </div>
    
  );
};

export default App;
