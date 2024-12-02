import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">
        Christian Meditation<br />Made Easy
      </h1>
      <p className="text-xl mb-8">
        Sleep better and <span className="italic">stress less</span>.<br />
        Download and try for <span className="font-medium">free</span> today.
      </p>
      
      <StoreButtons className="justify-center" />
    </motion.section>
  );
}
