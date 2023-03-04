import '../styles/Title.css';
import React, { useState, useEffect } from "react";

const Title = () => {
  const [state, setState] = useState("state");

  useEffect(() => {
      console.log('use state');
    });

  return (
    <div class = "title">
        This is the title!
    </div>
    
  );
};

export default Title;