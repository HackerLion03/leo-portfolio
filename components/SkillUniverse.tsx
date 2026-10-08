// SkillUniverse v1.2 — Responsive Organic Orbit

"use client";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Billboard,
  Float,
  OrbitControls,
  Sphere,
  Text,
} from "@react-three/drei";

import { useRef, useState } from "react";
import * as THREE from "three";

export type Skill = {
  name: string;
  position: [number, number, number];
  description: string;
  tools: string[];
};

const skills: Skill[] = [
  {
    name: "Python",
    position: [2.9, 1.45, 0.35],
    description:
      "Python for data analysis, automation, and quantitative workflows.",
    tools: ["Pandas", "NumPy", "Data Cleaning", "Automation"],
  },
  {
    name: "SQL",
    position: [-2.3, 1.1, -0.45],
    description:
      "Working with structured datasets and relational databases.",
    tools: ["Queries", "Joins", "Filtering", "Aggregation"],
  },
  {
    name: "R",
    position: [1.9, -1.8, 0.55],
    description:
      "Statistical analysis, probability, and econometric modeling.",
    tools: ["Regression", "Probability", "Statistics", "Visualization"],
  },
  {
    name: "Excel",
    position: [-2.8, -1.1, 0.25],
    description:
      "Data organization, analysis, reporting, and spreadsheet modeling.",
    tools: ["Pivot Tables", "Functions", "Data Cleaning", "Analysis"],
  },
  {
    name: "Tableau",
    position: [-0.8, 2.45, -0.6],
    description:
      "Interactive dashboards and visual storytelling.",
    tools: ["Dashboards", "Charts", "Visualization", "Data Stories"],
  },
  {
    name: "Power BI",
    position: [0.55, -2.5, -0.35],
    description:
      "Business intelligence, dashboards, and reporting.",
    tools: ["Dashboards", "Data Models", "Visualization"],
  },
  {
    name: "Java",
    position: [3.25, -0.3, -0.25],
    description:
      "Programming fundamentals and object-oriented development.",
    tools: ["OOP", "Logic", "Algorithms"],
  },
  {
    name: "Git",
    position: [-3.35, 0.25, 0.45],
    description:
      "Version control and software development workflow.",
    tools: ["GitHub", "Branches", "Version Control"],
  },
  {
    name: "Econometrics",
    position: [1.2, 2.25, 0.55],
    description:
      "Statistical methods for analyzing economic relationships.",
    tools: [
      "Regression",
      "Hypothesis Testing",
      "Economic Data",
      "Model Interpretation",
    ],
  },
  {
    name: "Regression",
    position: [-1.5, -2.15, -0.5],
    description:
      "Modeling relationships between variables and evaluating predictions.",
    tools: [
      "Linear Regression",
      "Prediction",
      "Model Evaluation",
      "Statistical Analysis",
    ],
  },
];

function SkillNode({
  skill,
  onSelect,
}: {
  skill: Skill;
  onSelect: (skill: Skill) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float
      speed={1.2}
      rotationIntensity={0}
      floatIntensity={0.15}
    >
      <group
        position={skill.position}
        scale={hovered ? 1.13 : 1}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "default";
        }}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(skill);
        }}
      >
        <Sphere args={[0.07, 32, 32]}>
          <meshStandardMaterial
            color={hovered ? "#ffffff" : "#67e8f9"}
            emissive="#67e8f9"
            emissiveIntensity={hovered ? 5 : 2.5}
          />
        </Sphere>

        <Billboard>
          <Text
            position={[0, 0.23, 0]}
            fontSize={hovered ? 0.19 : 0.17}
            color={hovered ? "#67e8f9" : "#d4d4d8"}
            anchorX="center"
            anchorY="middle"
          >
            {skill.name}
          </Text>
        </Billboard>
      </group>
    </Float>
  );
}

function CenterCore() {
  const core = useRef<THREE.Mesh>(null);
  const one = useRef<THREE.Mesh>(null);
  const two = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (core.current) {
      core.current.rotation.y += 0.002;
    }

    if (one.current) {
      one.current.rotation.z += 0.0012;
    }

    if (two.current) {
      two.current.rotation.z -= 0.0008;
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <sphereGeometry args={[0.78, 64, 64]} />

        <meshStandardMaterial
          color="#041922"
          roughness={0.25}
          metalness={0.8}
          emissive="#083344"
          emissiveIntensity={0.65}
        />
      </mesh>

      <mesh
        ref={one}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[1.12, 0.007, 16, 100]} />

        <meshBasicMaterial
          color="#164e63"
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh
        ref={two}
        rotation={[1.1, 0.4, 0]}
      >
        <torusGeometry args={[1.35, 0.004, 16, 100]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function CenterLabels() {
  return (
    <Billboard position={[0, 0, 0]}>
      <Text
        position={[0, 0.19, 0]}
        fontSize={0.22}
        color="#67e8f9"
        anchorX="center"
        anchorY="middle"
        renderOrder={10}
        material-depthTest={false}
      >
        DATA
      </Text>

      <Text
        position={[0, -0.04, 0]}
        fontSize={0.11}
        color="#e4e4e7"
        anchorX="center"
        anchorY="middle"
        renderOrder={10}
        material-depthTest={false}
      >
        ECONOMICS
      </Text>

      <Text
        position={[0, -0.23, 0]}
        fontSize={0.1}
        color="#a1a1aa"
        anchorX="center"
        anchorY="middle"
        renderOrder={10}
        material-depthTest={false}
      >
        TECHNOLOGY
      </Text>
    </Billboard>
  );
}

function SkillOrbit({
  onSelect,
}: {
  onSelect: (skill: Skill) => void;
}) {
  const orbit = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!orbit.current) return;

    orbit.current.rotation.y += 0.00075;

    orbit.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.03;

    orbit.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.018;
  });

  return (
    <group ref={orbit}>
      {skills.map((skill) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}

function ResponsiveSystem({
  onSelect,
}: {
  onSelect: (skill: Skill) => void;
}) {
  const { size } = useThree();

  let scale = 1;

  if (size.width < 480) {
    scale = 0.62;
  } else if (size.width < 640) {
    scale = 0.7;
  } else if (size.width < 768) {
    scale = 0.82;
  }

  return (
    <group scale={scale}>
      <CenterCore />
      <CenterLabels />
      <SkillOrbit onSelect={onSelect} />
    </group>
  );
}

type SkillUniverseProps = {
  onSelect: (skill: Skill) => void;
};

export default function SkillUniverse({
  onSelect,
}: SkillUniverseProps) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 42,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.2} />

      <pointLight
        position={[4, 4, 5]}
        intensity={16}
        color="#67e8f9"
      />

      <pointLight
        position={[-4, -3, 4]}
        intensity={5}
        color="#ffffff"
      />

      <ResponsiveSystem onSelect={onSelect} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.45}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI - Math.PI / 2.8}
      />
    </Canvas>
  );
}