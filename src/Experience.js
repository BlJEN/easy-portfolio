import {
  Text,
  Html,
  Environment,
  useGLTF,
  OrbitControls,
  Center,
  Float,
  PresentationControls,
  Sparkles,
} from "@react-three/drei"
import { Perf } from "r3f-perf"

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  )

  return (
    <>
      <Perf position="bottom-left" />
      {/* <Environment preset="city" /> */}
      <ambientLight intensity={1} />
      <color args={["#121D29"]} attach="background" />

      <PresentationControls
        rotation={[0.13, 0.0, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        global
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#004a8c"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={computer.scene}
            position-y={-1.2}
            scale={1.1}
            //indent
          >
            <Html
              position={[0, 1.56, -1.4]}
              transform
              wrapperClass="htmlScreen"
              distanceFactor={0.825}
              rotation-x={-0.256}
            >
              <iframe src="http://45.115.217.62" />
            </Html>
          </primitive>
          <Sparkles position={[1, -1, -2]} scale={[10, 7, 10]} speed={0.3} />
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            color={"#004a8c"}
          >
            Bijen Neupane
          </Text>
        </Float>
      </PresentationControls>
    </>
  )
}
