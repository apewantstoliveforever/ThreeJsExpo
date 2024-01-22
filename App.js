import React, { useState, useRef, Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';


const Box = ({ color, position }) => {
  const [active, setActive] = useState(false)
  const mesh = useRef();
  useFrame((state, delta) => {
    if (active) {
      mesh.current.rotation.y += delta
      mesh.current.rotation.x += delta
    }
  });

  return (
    <mesh position={position}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      ref={mesh}
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// function Shoe(props) {
//   // const [base, normal, rough] = useLoader(TextureLoader, [
//   //   require('./assets/Airmax/textures/BaseColor.jpg'),
//   //   require('./assets/Airmax/textures/Normal.jpg'),
//   //   require('./assets/Airmax/textures/Roughness.png'),
//   // ]);

//   // const material = useLoader(MTLLoader, require('./assets/Airmax/shoe.mtl'));

//   const obj = useLoader(
//     OBJLoader,
//     require('./assets/Airmax/shoe.obj'),
//     // (loader) => {
//     //   material.preload();
//     //   loader.setMaterials(material);
//     // }
//   );

//   // const mesh = useRef();

//   // useLayoutEffect(() => {
//   //   obj.traverse((child) => {
//   //     if (child instanceof THREE.Mesh) {
//   //       child.material.map = base;
//   //       child.material.normalMap = normal;
//   //       child.material.roughnessMap = rough;
//   //     }
//   //   });
//   // }, [obj]);

//   // useFrame((state, delta) => {
//   //   let { x, y, z } = props.animatedSensor.sensor.value;
//   //   x = ~~(x * 100) / 5000;
//   //   y = ~~(y * 100) / 5000;
//   //   mesh.current.rotation.x += x;
//   //   mesh.current.rotation.y += y;
//   // });

//   return (
//     <mesh ref={mesh} rotation={[0.7, 0, 0]}>
//       <primitive object={obj} scale={10} />
//     </mesh>
//   );
// }

export default function App() {
  return (
    <Canvas>
      <group>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <spotLight intensity={1000} position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box position={[1, 0, 0]} color={'red'} />
        <Box position={[0, 1, 0]} color={'green'} />
        {/* <Suspense fallback={null}>
          <Shoe />
        </Suspense> */}
      </group>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
