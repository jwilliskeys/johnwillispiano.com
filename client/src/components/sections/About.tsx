import { motion } from "framer-motion";
import actionImage from "@assets/JohnWillisPiano_1748_Large_1765228169271.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={actionImage} 
                  alt="John Willis Tuning Piano" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-background border border-border p-6 flex items-center justify-center hidden md:flex">
                <div className="text-center">
                  <span className="block text-4xl font-serif mb-1">6+</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</span>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif">A Musician's Approach to Technology</h2>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                I believe a piano is more than a machine; it is a living voice. As a registered piano technician and lifelong pianist, I approach every instrument with a deep respect for its potential.
              </p>
              <p>
                My background includes over six years of intensive work in high-end dealerships, rebuilding shops, and university concert halls. This diverse experience has honed my ear for tone and my hands for precision.
              </p>
              <p>
                I care deeply about the musical power and beauty of the greatest instrument on earth. My goal is not just to tune your piano, but to help you rediscover the joy of playing it.
              </p>
            </div>

            <div className="pt-8">
              <span className="block text-sm uppercase tracking-widest text-foreground/60 mb-2">Experience</span>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  Dealership Service
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  Concert Prep
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  University Maintenance
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  Action Rebuilding
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
