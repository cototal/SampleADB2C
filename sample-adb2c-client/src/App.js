import React, { useEffect } from 'react';
import './App.css';
import { signIn, passTokenToApi } from './utils/authPopup';

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_SAMPLE);

  }, [])
  return (
    <div className="App">
      <h1>Sample AD B2C</h1>
      <button onClick={signIn}>Sign In</button>
      <button onClick={passTokenToApi}>Call API</button>
    </div>
  );
}

export default App;
