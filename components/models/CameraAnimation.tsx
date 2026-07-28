"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CameraAnimation() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: 5,
      y: 3,
      z: 2,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(camera.rotation, {
      x: 0,
      y: Math.PI / 4,
      z: 0,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [camera]);

  return null;
}