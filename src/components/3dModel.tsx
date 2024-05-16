import { Canvas } from "@react-three/fiber";
import {
  Box,
  CameraControls,
  Gltf,
  Grid,
  useProgress,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { DirectionalLightHelper, Vector3 } from "three";
import { Html } from "@react-three/drei";
import { BoltIcon, SunIcon } from "@heroicons/react/24/outline";
import InlineLoading from "./inlineLoading";
interface NightLampProps {
  position: number[];
  color: string;
  showIndicator: boolean;
}

const NightLamp: React.FC<NightLampProps> = ({
  position,
  color,
  showIndicator,
}) => {
  const [powerState, setPowerState] = useState(false);
  return (
    <>
      <Box
        position={new Vector3(...position)}
        onPointerDown={() => setPowerState(!powerState)}
        scale={0.5}
      >
        <meshStandardMaterial visible={false} />
      </Box>
      {!powerState && showIndicator && (
        <Html position={new Vector3(...position)}>
          <div
            className="absolute -translate-x-1/2 -translate-y-full w-6 rounded-full
              pointer-events-none aspect-square bg-grayA/30 backdrop-blur flex items-center justify-center"
          >
            <BoltIcon className="w-4/5 aspect-square text-zinc-100" />
          </div>
        </Html>
      )}
      <pointLight
        position={new Vector3(...position)}
        castShadow
        receiveShadow
        color={color}
        scale={0.1}
        intensity={powerState ? 5 : 0}
      />
    </>
  );
};
const Scene = () => {
  const [isOverlayShown, setOverlayShown] = useState(true);
  const [isSunShining, setSunShining] = useState(true);
  const { progress } = useProgress();
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<InlineLoading progress={progress} />}>
        <div
          onClick={() => setOverlayShown(false)}
          className={`absolute ${(!isOverlayShown || progress !== 100) && "hidden"}
          w-full h-full bg-grayALight/50 backdrop-blur z-10 flex flex-col
          items-center justify-center`}
        >
          <div className="flex py-2 lg:gap-x-2 gap-x-1">
            <span className="lg:w-8 w-4 fill-zinc-100 h-auto">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1600 896q40 0 75 15t61 41t41 61t15 75v384q0 119-45 224t-124 183t-183 123t-224 46q-144 0-268-55t-226-156l-472-472q-28-28-43-65t-15-76q0-42 16-78t43-64t63-42t78-16q82 0 141 59l107 106V853q-59-28-106-70t-80-95t-52-114t-18-126q0-93 35-174t96-143t142-96T832 0q93 0 174 35t143 96t96 142t35 175q0 93-37 178t-105 149q35 9 63 30t49 52q45-25 94-25q50 0 93 23t69 66q45-25 94-25M512 448q0 75 34 143t94 113V448q0-40 15-75t41-61t61-41t75-15t75 15t61 41t41 61t15 75v256q60-45 94-113t34-143q0-66-25-124t-69-101t-102-69t-124-26t-124 25t-102 69t-69 102t-25 124m1152 640q0-26-19-45t-45-19q-34 0-47 19t-16 47t-1 62t0 61t-16 48t-48 19q-37 0-50-23t-16-60t2-77t2-77t-15-59t-51-24q-34 0-47 19t-16 47t-1 62t0 61t-16 48t-48 19q-37 0-50-23t-16-60t2-77t2-77t-15-59t-51-24q-34 0-47 19t-16 47t-1 62t0 61t-16 48t-48 19q-26 0-45-19t-19-45V448q0-26-19-45t-45-19t-45 19t-19 45v787q0 23-8 42t-23 35t-35 23t-42 9q-22 0-42-8t-37-24l-139-139q-21-21-50-21t-50 21t-22 51q0 29 21 50l472 473q84 84 184 128t219 45q93 0 174-35t142-96t96-142t36-175z"></path>
              </svg>
            </span>
            <h1 className="text-zinc-100 lg:text-2xl text-sm cursor-default">
              ya
            </h1>
            <span className="fill-zinc-100 lg:w-8 w-4 h-auto">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path d="M88 24v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m-72 80h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31M219.31 184a16 16 0 0 1 0 22.63l-12.68 12.68a16 16 0 0 1-22.63 0L132.7 168L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13L168 132.69ZM208 195.31L156.69 144a16 16 0 0 1 4.93-26l.32-.14l45.95-17.64L48 48l52.2 159.86l17.65-46c0-.11.08-.22.13-.33a16 16 0 0 1 11.69-9.34a16.72 16.72 0 0 1 3-.28a16 16 0 0 1 11.3 4.69l51.34 51.4Z"></path>
              </svg>
            </span>
          </div>
          <h1 className="text-zinc-100 lg:text-2xl text-sm cursor-default">
            Gəzinmək üçün istifadə edin
          </h1>
        </div>
        <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [5, 0, 5] }}>
          <directionalLight
            position={[0, 3, 3]}
            castShadow
            receiveShadow
            scale={0.5}
            intensity={isSunShining ? 20 : 0}
            color="#FFF8DE"
            ref={(dirLight) => {
              if (dirLight) {
                dirLight.target.position.set(0, 1, 0);
                dirLight.add(
                  new DirectionalLightHelper(dirLight, 10, "#fef08a"),
                );
              }
            }}
          />
          {!isOverlayShown && (
            <Html position={[0, 3, 5]}>
              <div
                onClick={() => {
                  setSunShining(!isSunShining);
                }}
                className="flex gap-x-2 lg:text-lg text-sm items-center
            bg-grayA/50 backdrop-blur lg:px-4 px-2 lg:py-2 py-1 rounded-full
            hover:brightness-110 transition-all duration-100 border-2 border-grayALight/50"
              >
                <SunIcon
                  className={`lg:w-8 w-6
              ${isSunShining ? "text-amber-200" : "text-neutral-400"}
              ${isSunShining && "animate-spin-once"}`}
                />
                <h1
                  className={`text-nowrap
              ${isSunShining ? "text-zinc-100" : "text-neutral-400"}`}
                >
                  Gün İşığı
                </h1>
              </div>
            </Html>
          )}
          <NightLamp
            showIndicator={!isOverlayShown}
            position={[-1.227, -1.14, -2.74]}
            color="#561496"
          />
          <NightLamp
            showIndicator={!isOverlayShown}
            position={[1.227, -1.14, -2.74]}
            color="#561496"
          />
          <Gltf src="/academy/model.glb" castShadow receiveShadow deep />
          <Grid
            position={[0, -2, 0]}
            scale={[1, 0, 1]}
            infiniteGrid
            receiveShadow
            sectionColor="#525252"
            cellColor="#525252"
          />
          <CameraControls distance={10} minDistance={1} maxDistance={10} />
          <ambientLight intensity={1} />
        </Canvas>
      </Suspense>
    </div>
  );
};
export default Scene;
