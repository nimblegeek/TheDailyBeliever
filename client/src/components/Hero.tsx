import { motion } from "framer-motion";
import { STOCK_PHOTOS } from "../lib/constants";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 text-center relative"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={`${STOCK_PHOTOS.sunrise[0]}?auto=format&fit=crop&w=2000&q=80`}
          alt="Inspiring sunrise"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">
        Spiritual Leadership
        <br />
        In Everyday Life
      </h1>
      <p className="text-xl mb-8">
        Sleep better and <span className="italic">stress less</span>.<br />
        Begin your journey of peace <span className="font-medium">today</span>.
      </p>
    </motion.section>
  );
}
