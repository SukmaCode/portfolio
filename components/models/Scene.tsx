"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Staircase from "./Staircase";
import Particles from "./Particles";
import SceneEffects from "./SceneEffects";
import CameraController from "./CameraController";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-linear-to-b from-base via-base/50 to-base pointer-events-none z-10" />
      <Canvas
        // camera={{ position: [5, 0, 0], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.6} color="#3b82f6" />
        <directionalLight
          position={[5, 3, 5]}
          intensity={1.5}
          color="#22d3ee"
        />
        <directionalLight
          position={[-5, -3, 5]}
          intensity={1.0}
          color="#a78bfa"
        />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#22d3ee" />
        <PerspectiveCamera makeDefault position={[-0.02, 0, 1]} fov={20} />

        <Staircase />
        <Particles />
        <SceneEffects />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
