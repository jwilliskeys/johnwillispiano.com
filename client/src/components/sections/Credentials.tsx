import { motion } from "framer-motion";
import ptgInsignia from "@assets/ptg-insignia.jpg";
import { YEARS_EXPERIENCE } from "./About";

const items = [
  {
    yr: "Now",
    title: "Head Technician, Boston University",
    text: "Maintaining teaching studios, practice rooms, and concert instruments across the School of Music.",
  },
  {
    yr: "PTG",
    title: "Registered Piano Technician",
    text: "Certified member of the Piano Technicians Guild, held to its tuning, repair, and regulation standards.",
  },
  {
    yr: `${YEARS_EXPERIENCE}+ yrs`,
    title: "Dealerships & Rebuilding Shops",
    text: "Full-time service and restoration work — the volume and variety that build real diagnostic instinct.",
  },
  {
    yr: "Stage",
    title: "Concert Preparation",
    text: "Preparing instruments to perform under the demands of the concert hall.",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-4">Background</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-10">Experience that shows up at the bench.</h2>
            <ul>
              {items.map((item, i) => (
                <li key={item.title} className={`flex gap-6 py-6 border-b border-foreground/10 ${i === 0 ? "border-t" : ""}`}>
                  <span className="font-serif text-primary min-w-[90px] shrink-0">{item.yr}</span>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-light">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/40 p-12 text-center"
          >
            <img src={ptgInsignia} alt="Piano Technicians Guild insignia" className="w-36 h-36 object-contain mx-auto mb-6" />
            <h3 className="text-2xl font-serif mb-3">Piano Technicians Guild</h3>
            <p className="text-muted-foreground font-light max-w-sm mx-auto">
              Proud to hold the Registered Piano Technician credential — your assurance of tested skill and professional standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
