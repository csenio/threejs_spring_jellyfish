import * as THREE from 'three'
import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, a } from 'react-spring/three'
import { Canvas, useFrame } from 'react-three-fiber'
import './styles.css'

function Box({ position, color }) {
  const [big, setBig] = useState(false)
  const { scale } = useSpring({ scale: big ? [1, 1, 1.5] : [0.2, 0.2, 1.5] })

  return (
    <a.mesh onPointerOver={() => setBig(true)} onPointerOut={() => setBig(false)} scale={scale} rotation-x={2} position={position}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial shininess={30} color="#ff29c6" attach="material" />
    </a.mesh>
  )
}

const App = () => (
  <Canvas>
    <ambientLight intensity={0.4} />
    <spotLight intensity={1} position={[30, 30, 50]} angle={1} penumbra={1} />
    <Box color="#FF4F4F" position={[0, 0, 0]} />
  </Canvas>
)

render(<App />, document.querySelector('#root'))
