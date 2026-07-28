'use client'

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Staircase from "./Staircase";
import Particles from "./Particles";
import SceneEffects from "./SceneEffects";

function CameraController() {
  const target = useRef({ x: 0, y: 0 });

  useFrame(({ pointer, camera }) => {
    const dx = pointer.x * 0.3 - target.current.x;
    const dy = -pointer.y * 0.2 - target.current.y;
    target.current.x += dx * 0.05;
    target.current.y += dy * 0.05;
    camera.position.x += (target.current.x - camera.position.x) * 0.02;
    camera.position.y += (target.current.y - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.4} color="#3b82f6" />
        <directionalLight
          position={[5, 3, 5]}
          intensity={1.2}
          color="#22d3ee"
        />
        <directionalLight
          position={[-5, -3, 5]}
          intensity={0.8}
          color="#a78bfa"
        />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#22d3ee" />
        <Staircase />
        <Particles />
        <CameraController />
        <SceneEffects />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
