import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/minimalist_macro_of_piano_strings_and_bronze_plate.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Piano Strings Macro" 
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
          <span className="block text-sm md:text-base tracking-[0.2em] uppercase mb-6 text-white/80">
            Greater Boston Area
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-tight mb-8">
            Restoring the <br/>
            <span className="italic">Soul</span> of Sound
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-12">
            Expert piano care for the discerning musician. Tuning, regulation, and voicing with a pianist’s touch.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-black font-medium tracking-wide text-sm hover:bg-white/90 transition-colors"
            >
              Inquire for Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
