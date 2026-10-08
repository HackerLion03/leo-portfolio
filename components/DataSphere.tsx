// DataSphere v1.2 — Responsive Data Core

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Billboard,
  Float,
  Points,
  PointMaterial,
  Text,
} from "@react-three/drei";

import { useMemo, useRef } from "react";
import * as THREE from "three";

function DataPlanet() {
  const sphere = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const points: number[] = [];

    for (let i = 0; i < 3000; i++) {
      const radius = 1.65;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const variation = Math.random() * 0.08;
      const r = radius + variation;

      points.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!sphere.current) return;

    sphere.current.rotation.y += 0.0015;

    sphere.current.rotation.x = THREE.MathUtils.lerp(
      sphere.current.rotation.x,
      state.pointer.y * 0.1,
      0.03
    );
  });

  return (
    <Points
      ref={sphere}
      positions={particles}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

function OrbitRings() {
  const one = useRef<THREE.Mesh>(null);
  const two = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (one.current) one.current.rotation.z += 0.0013;
    if (two.current) two.current.rotation.z -= 0.0009;
  });

  return (
    <>
      <mesh
        ref={one}
        rotation={[1.15, 0.3, 0]}
      >
        <torusGeometry args={[2.1, 0.008, 16, 160]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.23}
        />
      </mesh>

      <mesh
        ref={two}
        rotation={[0.3, 1.1, 0.5]}
      >
        <torusGeometry args={[2.45, 0.004, 16, 160]} />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
        />
      </mesh>
    </>
  );
}

function Node({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) {
  return (
    <Float
      speed={1.1}
      floatIntensity={0.25}
      rotationIntensity={0}
    >
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.04, 20, 20]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        <Billboard>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.13}
            color="#a5f3fc"
            anchorX="center"
          >
            {label}
          </Text>
        </Billboard>
      </group>
    </Float>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.07,
      0.025
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.1,
      0.025
    );
  });

  return (
    <group ref={group}>
      <DataPlanet />
      <OrbitRings />

      <Node position={[2.5, 1, 0]} label="PYTHON" />
      <Node position={[-2.2, 0.8, 0]} label="ECONOMICS" />
      <Node position={[1.6, -1.8, 0]} label="DATA" />
      <Node position={[-1.5, -1.7, 0]} label="SQL" />
    </group>
  );
}

export default function DataSphere() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6.8],
        fov: 44,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1} />

      <pointLight
        position={[4, 4, 5]}
        intensity={8}
        color="#67e8f9"
      />

      <Scene />
    </Canvas>
  );
}