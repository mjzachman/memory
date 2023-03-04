import '../styles/Field.css';
import React, { useState, useEffect } from "react";

const Title = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "title">
        <p>This is the title</p>
    </div>
    
  );
};

export default Title;