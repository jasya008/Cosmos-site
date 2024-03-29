import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import s from './index.module.scss'
import React, { Suspense } from 'react'
import * as THREE from "three";
import planetData from './planetData'
import sunTexture from './img/sun.jpg'
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from 'react-router-dom';
import { GetContext } from '../../components/context';
import { useEffect } from 'react';

export const SolarSystem = () => {
  const { user } = GetContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={s.solar}>
      <h2 className={s.title}>OUR SOLAR SYSTEM...</h2>
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Suspense fallback={null}>
          <Sun />
          {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
function Sun() {
  const texture = useLoader(THREE.TextureLoader, sunTexture);
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />

    </mesh>
  );
}
function Planet({
  planet: {
    color,
    xRadius,
    zRadius,
    size,
    speed,
    offset,
    rotationSpeed,
    textureMap
  }
}) {
  const planetRef = React.useRef();
  const texture = useLoader(THREE.TextureLoader, textureMap);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#393e46" linewidth={10} />
    </line>
  )

}

