"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MODEL = "/models/stair_without_texture_v2.glb";

export default function Staircase() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL);

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
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!group.current) return;
    ScrollTrigger.refresh();

    gsap.to(group.current.rotation, {
      y: 3 + Math.PI * 4,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(group.current.position, {
      y: -0.2,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <group ref={group} scale={1} position={[-0.5, 0.35, 0]} rotation={[0, 3, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL);
