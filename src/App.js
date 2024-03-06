import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { BakeShadows, Grid, ContactShadows, Environment, OrbitControls, Sky, Bvh } from '@react-three/drei';
import { EffectComposer} from "@react-three/postprocessing";
import Model from './Model';

const CameraLogger = () => {
  useFrame(({ camera }) => {
    // Log camera details or perform operations with the camera on each frame
  });

  return null; // This component does not render anything
};

const Effects = () => {
  const { size } = useThree();
  useFrame((state, delta) => {
    // Optional: Add any frame-based effects here
  });

  return (
    <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
    </EffectComposer>
  );
};

function App() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight, // Adjusted for full screen height
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * 0.8,
        height: window.innerHeight, // Ensure full height on resize
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', width: '100%', alignItems: 'center' }}>
      <Canvas
        style={{ width: dimensions.width, height: dimensions.height, display: 'block' }}
        shadows
        dpr={[1, 2]}
        camera={{ position: [0.8515534819273672, -0.026203074206362767, 0.8802849734264871], fov: 50, near: 0.001 }}
      >
        <ambientLight intensity={0.1} />
  
        <Bvh firstHitOnly>
        <Suspense fallback={null}>
          <Model limit={50} position={[0, -0.36, 0]} castShadow receiveShadow />
          <ContactShadows frames={0.1} rotation-x={Math.PI / 2} position={[0, -0.359, 0]} far={1} width={1.5} height={1.5} blur={0.2} opacity={0.5} />
          <Environment preset="sunset" />
          <BakeShadows />
        </Suspense>
        <Effects />
        <OrbitControls
          enablePan={false}
          enableZoom={true} // Disables zoom to keep the camera fixed
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
          minDistance={0.5}
          maxDistance={3}
        />
    <Grid
  renderOrder={0}
  position={[0, -0.36, 0]}
  cellSize={0.05}
  cellThickness={0.6}
  sectionSize={0.6}
  sectionThickness={1.0}
  sectionColor={[0, 0, 0]}
  // Assuming fadeDistance is a new property to control the fading effect
  fadeDistance={1.5} // Distance from the camera at which cells start to fade
/>
        <CameraLogger />
        </Bvh>
      </Canvas>
    </div>
  );
}

export default App;
