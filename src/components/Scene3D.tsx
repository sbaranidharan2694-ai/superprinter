import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

const BusinessCard = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef}>
        {/* Main card body */}
        <RoundedBox args={[3.6, 2.1, 0.05]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.15}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={0.8}
          />
        </RoundedBox>

        {/* Gold accent strip */}
        <mesh position={[-1.2, 0, 0.03]}>
          <boxGeometry args={[0.08, 1.8, 0.01]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Logo circle */}
        <mesh position={[0.3, 0.4, 0.03]}>
          <circleGeometry args={[0.3, 32]} />
          <meshPhysicalMaterial color="hsl(152, 57%, 42%)" metalness={0.3} roughness={0.2} clearcoat={0.8} />
        </mesh>

        {/* SP text on logo */}
        <Text
          position={[0.3, 0.4, 0.045]}
          fontSize={0.22}
          font="/fonts/Inter-Bold.woff"
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          SP
        </Text>

        {/* Company name */}
        <Text
          position={[0.3, -0.05, 0.04]}
          fontSize={0.16}
          color="#1a2332"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          SUPER PRINTERS
        </Text>

        {/* Tagline */}
        <Text
          position={[0.3, -0.3, 0.04]}
          fontSize={0.08}
          color="#64748b"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          Premium Printing Since 1990
        </Text>

        {/* Phone */}
        <Text
          position={[0.3, -0.55, 0.04]}
          fontSize={0.07}
          color="#94a3b8"
          anchorX="center"
          anchorY="middle"
        >
          +91 9840199878
        </Text>
      </group>
    </Float>
  );
};

const FloatingOrb = ({ position, color, size = 0.5 }: { position: [number, number, number]; color: string; size?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <MeshDistortMaterial color={color} speed={3} distort={0.3} radius={1} transparent opacity={0.15} />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, 3, 2]} intensity={0.4} color="#F59E0B" />
        <pointLight position={[0, -2, 3]} intensity={0.3} color="hsl(152, 57%, 42%)" />

        <BusinessCard />
        <FloatingOrb position={[-3, 1.5, -2]} color="hsl(152, 57%, 42%)" size={0.8} />
        <FloatingOrb position={[3, -1, -3]} color="#F59E0B" size={0.6} />
        <FloatingOrb position={[2.5, 2, -4]} color="#60a5fa" size={0.4} />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
