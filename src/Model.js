import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { selectColorForCategory, selectInstallationType } from './features/voletSlice'; // Ensure this path matches your project structure

// Mapping of color names to their hexadecimal values
const colorMap = {
  'Blanc': '#ffffff',
  'Gris-clair': '#d3d3d3',
  'Gris-métallique': '#808080',
  'Gris-anthracite': '#333333',
  'Marron': '#8b4513',
  'Chêne-doré': '#daa520',
};

export default function Model(props) {
  const { nodes, materials } = useGLTF('/volet-roulant-v20.glb');
  
  // Fetch the currently selected tablier color name from the Redux store
  const tablierColorName = useSelector(selectColorForCategory('tablier'));
  const installationType = useSelector(selectInstallationType); // Fetch the installation type

  // Use the color name to get the corresponding hexadecimal value from the colorMap
  // Defaults to white if the color name is not found
  const tablierColorHex = colorMap[tablierColorName] || '#ffffff';

  // useMemo to create a new material with the selected color hex value
  const dynamicMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: tablierColorHex
  }), [tablierColorHex]);

  return (
    <group {...props} dispose={null}>
      <group position={[0.002, 0.231, -0.011]} scale={0.165}>
        {/* Apply the dynamic material to all relevant meshes */}
        <mesh geometry={nodes.Cube.geometry} material={materials['Sandstone-brick wall']}  position={[-0.009, -1.397, 0.068]} rotation={[Math.PI, 0, Math.PI]} scale={2.245} />
        <mesh geometry={nodes.Cube001.geometry} material={dynamicMaterial} position={[-0.009, -1.397, 0.068]} rotation={[Math.PI, 0, Math.PI]} scale={0.113} />
        <mesh geometry={nodes.Cube002.geometry} material={dynamicMaterial} position={[-0.009, -1.4, 0.068]} scale={0.034} />
        {/* Conditionally render these meshes based on installation type */}
        {installationType === 'En applique' && (
          <>
            <mesh geometry={nodes.Cube004.geometry} material={dynamicMaterial} position={[-0.009, -1.397, 0.068]} rotation={[Math.PI, 0, Math.PI]} scale={0.121} />
            <mesh geometry={nodes.Cube005.geometry} material={dynamicMaterial} position={[-0.009, -1.397, 0.068]} scale={[0.034, 0.035, 0.034]} />
          </>
        )}
      </group>
    </group>
  );
}

useGLTF.preload('/volet-roulant-v20.glb');
