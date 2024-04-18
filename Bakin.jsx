/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Bakin.glb -T 
Files: public/Bakin.glb [47.54MB] > C:\Users\Asus\Desktop\volet-roulant-config\Bakin-transformed.glb [190.14KB] (100%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Bakin-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.Wood} position={[1.231, 0, 0]} scale={6.401} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['spruce wood rough clean']} position={[1.154, -0.006, -0.152]} rotation={[0, -1.571, 0]} scale={2.471} />
    </group>
  )
}

useGLTF.preload('/Bakin-transformed.glb')
