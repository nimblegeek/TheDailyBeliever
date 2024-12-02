import { motion } from "framer-motion";
import { MEDITATION_CARDS } from "../lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function MeditationGrid() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-4">Featured Meditations</h2>
        <p className="text-muted-foreground">New stories every Wednesday and Sunday</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEDITATION_CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-medium mb-1">{card.title}</h3>
                    <p className="text-white/80">{card.verse}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
