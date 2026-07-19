import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/steinway_grand_piano_ae602258.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background" id="top">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Grand piano"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>
      </div>

      <div className="relative z-20 text-center text-white max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-tight mb-8">
            John Willis Piano
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-12">
            Expert piano care for the discerning musician — tuning, regulation, voicing, repair, and action rebuilding across the Greater Boston area.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="https://book.johnwillispiano.com/book"
              data-testid="button-hero-book"
              className="px-8 py-3 bg-white text-black font-medium tracking-wide text-sm uppercase hover:bg-white/90 transition-colors"
            >
              Book Service
            </a>
            <a
              href="#craft"
              data-testid="button-hero-craft"
              className="px-8 py-3 border border-white/55 text-white font-medium tracking-wide text-sm uppercase hover:bg-white hover:text-black transition-colors"
            >
              See the Work
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 text-[0.68rem] tracking-[0.25em] uppercase">
        Scroll
      </div>
    </section>
  );
}
