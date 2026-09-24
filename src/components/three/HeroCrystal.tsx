"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, Mesh, Points as ThreePoints } from "three";
import { Color } from "three";

export const ENABLE_ORBITAL_BADGES = true;

type HeroCrystalProps = {
  active: boolean;
  dark: boolean;
  mobile: boolean;
};

const darkCrystal = new Color("#23d7ff");
const lightCrystal = new Color("#6758e8");
const darkParticle = new Color("#baf7ff");
const lightParticle = new Color("#6758e8");

function Crystal({ dark, mobile }: Pick<HeroCrystalProps, "dark" | "mobile">) {
  const crystalRef = useRef<Mesh>(null);
  const targetColor = dark ? darkCrystal : lightCrystal;
  const targetEmissive = dark ? new Color("#725cff") : new Color("#f5d35f");

  useFrame(({ pointer }, delta) => {
    if (!crystalRef.current) return;
    crystalRef.current.rotation.x += (pointer.y * 0.4 - crystalRef.current.rotation.x) * Math.min(delta * 3, 1);
    crystalRef.current.rotation.y += (pointer.x * 0.4 - crystalRef.current.rotation.y) * Math.min(delta * 3, 1);
    const material = crystalRef.current.material as unknown as { color: Color; emissive: Color; emissiveIntensity: number };
    material.color.lerp(targetColor, Math.min(delta * 3, 1));
    material.emissive.lerp(targetEmissive, Math.min(delta * 2, 1));
    material.emissiveIntensity = dark ? 0.28 : 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.28}>
      <mesh ref={crystalRef} scale={mobile ? 1.05 : 1.25}>
        <icosahedronGeometry args={[1.35, 3]} />
        <MeshDistortMaterial
          color={targetColor}
          emissive={targetEmissive}
          emissiveIntensity={dark ? 0.28 : 0.1}
          distort={0.3}
          speed={1.5}
          metalness={dark ? 0.45 : 0.18}
          roughness={dark ? 0.24 : 0.42}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function OrbitalBadges() {
  const orbitRef = useRef<Group>(null);
  useFrame((_, delta) => {
    if (orbitRef.current) orbitRef.current.rotation.z += delta * 0.16;
  });
  return (
    <group ref={orbitRef}>
      <Html position={[1.95, 0.55, 0]} center distanceFactor={5} transform>
        <span className="rounded-full border border-[#23d7ff]/35 bg-[#120d2e]/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#d9f8ff]">Next.js</span>
      </Html>
      <Html position={[-1.8, 0.65, 0]} center distanceFactor={5} transform>
        <span className="rounded-full border border-[#f5d35f]/35 bg-[#120d2e]/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#f5d35f]">React</span>
      </Html>
      <Html position={[0, -1.9, 0]} center distanceFactor={5} transform>
        <span className="rounded-full border border-[#b14cff]/35 bg-[#120d2e]/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#e2baff]">Laravel</span>
      </Html>
    </group>
  );
}

function CrystalParticles({ dark, mobile }: Pick<HeroCrystalProps, "dark" | "mobile">) {
  const pointsRef = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const count = mobile ? 55 : 150;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      values[offset] = (Math.random() - 0.5) * 5.2;
      values[offset + 1] = (Math.random() - 0.5) * 4.2;
      values[offset + 2] = (Math.random() - 0.5) * 2.2;
    }
    return values;
  }, [mobile]);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.035;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial color={dark ? darkParticle : lightParticle} size={mobile ? 0.035 : 0.045} sizeAttenuation transparent opacity={dark ? 0.32 : 0.2} depthWrite={false} />
    </Points>
  );
}

function Scene({ dark, mobile }: Pick<HeroCrystalProps, "dark" | "mobile">) {
  return (
    <>
      <ambientLight intensity={dark ? 0.55 : 0.8} />
      <directionalLight position={[3, 4, 4]} intensity={dark ? 2 : 1.2} color={dark ? "#baf7ff" : "#ffffff"} />
      <pointLight position={[-3, -2, 2]} intensity={dark ? 1.2 : 0.55} color="#f5d35f" />
      <CrystalParticles dark={dark} mobile={mobile} />
      <Crystal dark={dark} mobile={mobile} />
      {ENABLE_ORBITAL_BADGES && !mobile && <OrbitalBadges />}
    </>
  );
}

export default function HeroCrystal({ active, dark, mobile }: HeroCrystalProps) {
  return (
    <Canvas
      aria-hidden="true"
      frameloop={active ? "always" : "never"}
      dpr={mobile ? [1, 1] : [1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Scene dark={dark} mobile={mobile} />
    </Canvas>
  );
}
