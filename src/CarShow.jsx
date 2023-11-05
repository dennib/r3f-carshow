/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Car } from "./Car";
import Ground from "./Ground";
import { Rings } from "./Rings";
import { Boxes } from "./Boxes";

import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.5}
          bokehScale={0.5}
          height={480}
        /> */}

        <Bloom
          blendFunction={BlendFunction.ADD}
          kernelSize={4}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.02}
          intensity={0.09}
          width={1000}
          height={2200}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.COLOR_DODGE}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
      <PerspectiveCamera makeDefault fov={60} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={100}
        angle={0.6}
        penumbra={1.6}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={120}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Car />
      <Ground />
      {/* <FloatingGrid /> */}
      <Rings />
      <Boxes />
      <Stats />
    </>
  );
};

export default CarShow;
