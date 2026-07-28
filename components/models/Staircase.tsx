"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";
const STAIR_MODEL = "/models/stair_without_texture.glb";

export default function Staircase() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(STAIR_MODEL);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <group ref={group} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}
