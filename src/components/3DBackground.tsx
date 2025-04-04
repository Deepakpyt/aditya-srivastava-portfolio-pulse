
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Animated particle component
const Particles = ({ count = 100, color = "#d4af37" }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = new THREE.Object3D();

  // Animation frame hook
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    
    // Update each particle's position
    for (let i = 0; i < count; i++) {
      const time = clock.getElapsedTime();
      const x = Math.sin(i * 0.1 + time * 0.2) * 10;
      const y = Math.cos(i * 0.1 + time * 0.3) * 10;
      const z = Math.sin(i * 0.1 + time * 0.4) * 10;
      
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
};

// Animated floating sphere
const FloatingSphere = ({ position = [0, 0, 0], color = "#102a43", scale = 1 }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t) * 0.5;
    mesh.current.rotation.y = t * 0.2;
  });

  return (
    <mesh ref={mesh} position={position as [number, number, number]}>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
    </mesh>
  );
};

// Main 3D Background component
const ThreeDBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Particles count={150} />
        <FloatingSphere position={[-4, 0, 0]} scale={1.5} color="#243b53" />
        <FloatingSphere position={[4, 0, -2]} scale={1} color="#d4af37" />
        <FloatingSphere position={[0, 0, -5]} scale={2} color="#486581" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
