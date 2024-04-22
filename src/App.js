import React, { useState } from 'react';
import CameraControl from './components/sketchfab/CameraControl';
import Viewer from './components/sketchfab/Viewer';
import './styles.css';


function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div className='canvasStyle'>
      <Viewer setPosition={setPosition} setTarget={setTarget} />
      <CameraControl position={position} setPosition={setPosition} target={target} setTarget={setTarget} />
    </div>
  );
}

export default App



/*position (-11.275731704365285, 8.560231150026695, 1.9859704541419265) */

/* target (-6.300441369773406,2.1153088691086257,1.9888712489808216 ) */