/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";
import { Mesh } from "three";

export const Car = () => {
  const gltf = useLoader(GLTFLoader, "models/McLaren.glb");

  useEffect(() => {
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(-0.4, 0.52, -1.5);
    gltf.scene.rotation.set(0, 13.35, 0);

    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};
