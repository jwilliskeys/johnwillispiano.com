import { motion } from "framer-motion";
import actionImage from "@assets/JohnWillisPiano_1748_Large_1765228169271.jpeg";

// Experience counts up automatically from 2019 — never needs manual editing.
export const YEARS_EXPERIENCE = new Date().getFullYear() - 2019;

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
                alt="John Willis tuning a piano"
                className="w-full h-full object-cover object-[25%_center] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-foreground text-background border border-border p-6 hidden md:flex items-center justify-center">
              <div className="text-center">
                <span className="block text-5xl font-serif mb-1" data-testid="text-years-experience">{YEARS_EXPERIENCE}+</span>
                <span className="text-xs uppercase tracking-wider text-background/70">Years Experience</span>
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
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">A Musician's Approach</span>
            <h2 className="text-4xl md:text-5xl font-serif">More than keeping it in tune.</h2>

            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                I'm Willis — a Registered Piano Technician with the Piano Technicians Guild, and Head Technician at Boston University. My background includes over {YEARS_EXPERIENCE} years of full-time, intensive work in dealerships, rebuilding shops, and university concert halls. That range has honed my ear for tone and my hands for precision.
              </p>
              <p>
                I've been an active pianist all my life, and I care deeply about the joy experienced at the keyboard. A piano is more than a musical machine; it's a living voice — and my work is dedicated to bringing out its full musical power and beauty.
              </p>
            </div>

            <div className="pt-4">
              <ul className="grid grid-cols-2 gap-4">
                {["Dealership Service", "Concert Preparation", "University Maintenance", "Action Rebuilding"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
