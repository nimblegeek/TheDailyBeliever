import { motion } from "framer-motion";
import { MEDITATION_CARDS } from "../lib/constants";

export function AppShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[600px] mb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 backdrop-blur-sm rounded-3xl overflow-hidden">
        <div className="relative w-full h-full max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-10 w-[280px] h-[560px] bg-black rounded-[40px] p-3"
          >
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
              <div className="h-12 bg-gray-100 flex items-center justify-between px-4">
                <span className="text-sm font-medium">Sleep</span>
                <div className="w-32 h-1 bg-gray-200 rounded-full" />
              </div>
              
              <div className="grid grid-cols-2 gap-3 p-3">
                {MEDITATION_CARDS.slice(0, 4).map((card, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/30 p-2 flex flex-col justify-end">
                      <p className="text-white text-xs font-medium">{card.title}</p>
                      <p className="text-white/80 text-xs">{card.verse}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
