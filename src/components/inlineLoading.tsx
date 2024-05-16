import { motion } from "framer-motion";
const InlineLoading = ({ progress }: { progress: number }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center
    lg:gap-y-2 justify-center"
    >
      <h1 className="lg:text-4xl font-semibold text-zinc-100">
        3D Səhnə Yüklənir
      </h1>
      <motion.div
        style={{ scaleX: progress / 100, originX: 0 }}
        className="w-4/5 h-2 bg-zinc-100 rounded-full"
      />
      <h1 className="text-zinc-100 lg:text-2xl text-lg">{progress}%</h1>
    </div>
  );
};
export default InlineLoading;
