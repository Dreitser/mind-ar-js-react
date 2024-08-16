import React, { useState } from 'react';
import './App.css';
import MindARViewer from './mindar-viewer';

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <h1>Example React component with AR </h1>

      <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}

        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>

      {started === 'aframe' && (
        <div className="container h-screen" >
          < MindARViewer class="h-screen" />
          <video></video>
        </div>
      )}


    </div>
  );
}

export default App;