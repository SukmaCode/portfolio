import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraController() {
  const target = useRef({ x: 0, y: 50, z: 0 });

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