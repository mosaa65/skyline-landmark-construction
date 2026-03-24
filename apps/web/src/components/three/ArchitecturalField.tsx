"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type FieldProps = {
  className?: string;
};

function WireField() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = -Math.PI / 2.2;
    mesh.current.rotation.z = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <mesh ref={mesh} position={[0, -0.2, 0]}>
      <planeGeometry args={[6, 6, 20, 20]} />
      <meshBasicMaterial color="#c9a96e" wireframe opacity={0.35} transparent />
    </mesh>
  );
}

export default function ArchitecturalField({ className }: FieldProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 2, 3], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <WireField />
      </Canvas>
    </div>
  );
}
