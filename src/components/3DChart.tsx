
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface BarProps {
  position: [number, number, number];
  height: number;
  color: string;
  hoveredColor: string;
  label: string;
  value: number;
}

const Bar: React.FC<BarProps> = ({ position, height, color, hoveredColor, label, value }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.scale.y = THREE.MathUtils.lerp(
        mesh.current.scale.y,
        hovered ? height * 1.1 : height,
        0.1
      );
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={mesh}
        scale={[1, height, 1]}
        position={[0, height / 2, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial color={hovered ? hoveredColor : color} />
      </mesh>
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.4}
        color="#102a43"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      <Text
        position={[0, height + 0.5, 0]}
        fontSize={0.4}
        color="#102a43"
        anchorX="center"
        anchorY="middle"
      >
        {value}%
      </Text>
    </group>
  );
};

interface ThreeDChartProps {
  data?: {
    label: string;
    value: number;
  }[];
  className?: string;
}

const ThreeDChart: React.FC<ThreeDChartProps> = ({ 
  data = [
    { label: 'Q1', value: 32 },
    { label: 'Q2', value: 48 },
    { label: 'Q3', value: 40 },
    { label: 'Q4', value: 65 },
    { label: 'Q1', value: 72 }
  ],
  className = ""
}) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const scaleFactor = 5 / maxValue;
  
  return (
    <div className={`w-full h-64 md:h-80 ${className}`}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <group position={[-((data.length - 1) / 2), 0, 0]}>
          {data.map((item, i) => (
            <Bar
              key={i}
              position={[i, 0, 0]}
              height={item.value * scaleFactor / 10}
              color={i % 2 === 0 ? "#243b53" : "#d4af37"}
              hoveredColor={i % 2 === 0 ? "#486581" : "#f5e7b8"}
              label={item.label}
              value={item.value}
            />
          ))}
        </group>
        
        <gridHelper args={[20, 20, "#d9e2ec", "#d9e2ec"]} position={[0, -0.01, 0]} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 4} />
      </Canvas>
    </div>
  );
};

export default ThreeDChart;
