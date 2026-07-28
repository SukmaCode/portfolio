"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";

const STAIRCASE_URL = "/models/stair_without_texture_v2.glb";

export default function Staircase() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(STAIRCASE_URL);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#fff",
          metalness: 0.6,
          roughness: 0.2,
          emissive: "#22d3ee",
          emissiveIntensity: 0.1,
        });
        console.log("mesh:", mesh);
      }
    });
  }, [scene]);

  // useFrame(({ clock }) => {
  //   if (group.current) {
  //     group.current.rotation.y = clock.getElapsedTime() * 0.1;
  //     group.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
  //   }
  // });

  return (
    <group ref={group} scale={1} position={[-0.5, 0.35, 0 ]} rotation={[0, 3, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(STAIRCASE_URL);
