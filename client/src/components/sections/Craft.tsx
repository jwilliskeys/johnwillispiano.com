import { motion } from "framer-motion";
import hammersImage from "@assets/ReshapedHammers.JPG_1765226761738.webp";

const capabilities = [
  {
    title: "Action Rebuilding",
    text: "Full action work — new hammers, shanks, and whippens fit and geometry-checked so touch and power are restored, not just replaced.",
  },
  {
    title: "Hammer Work",
    text: "Reshaping, reboring, and voicing hammers to recover an even, focused tone across the full range of the instrument.",
  },
  {
    title: "Measured Tuning",
    text: "Aural skill backed by electronic tuning-device measurement, so pitch, temperament, and stability are verifiable — not guessed.",
  },
];

export default function Craft() {
  return (
    <section id="craft" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 block mb-4">The Craft</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Bench work, not just tuning.</h2>
          <p className="text-background/70 text-lg font-light">
            For the players and technicians who want to know how deep it goes: I work at the bench as well as the keyboard — reshaping and reboring hammers, rebuilding actions, and measuring my tuning with precision instrumentation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 mb-16"
        >
          <div className="md:col-span-3 bg-black/30 flex items-center justify-center">
            <img src={hammersImage} alt="Piano hammers reshaped and filed at the bench" className="w-full h-auto object-contain" />
          </div>
          <div className="md:col-span-2 bg-black/40 flex flex-col justify-center p-10">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-4">From the Bench</span>
            <p className="text-background/75 font-light leading-relaxed">
              Hammers filed and reshaped by hand to recover an even strike and a focused tone. This is the kind of work that separates a tuning from a piano brought back to life.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-background/15 pt-12">
          {capabilities.map((c) => (
            <div key={c.title}>
              <h3 className="text-xl font-serif mb-3">{c.title}</h3>
              <p className="text-background/65 font-light text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
