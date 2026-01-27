import { motion } from "framer-motion";

const services = [
  {
    title: "Tuning",
    description: "Setting the pitch and temperament to ensure clarity, warmth, and stability across the entire keyboard. With changes in temperature and humidity, tuning the piano is required minimum for each service.",
  },
  {
    title: "Repairs",
    description: "Expert diagnosis and repair of broken strings, sticking keys, squeaky pedals, and other mechanical issues. Small repairs can be made during a tuning, but in some cases the piano may demand rebuilding or replacement depending on use.",
  },
  {
    title: "Regulation",
    description: "Adjusting the thousands of mechanical parts in the action to ensure a responsive, even, and controllable touch. Every piano is in a different state of regulation, some need small adjustments but often there’s a full day of work involved.",
  },
  {
    title: "Voicing",
    description: "Manipulating the hammer felt to alter the tone color—ranging from bright and powerful to mellow and singing. Voicing comes down to preference, and ultimately requires the piano to be regulated beforehand for best results.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">Comprehensive Service</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-3 border-b border-foreground/10 pb-3 group-hover:border-foreground/30 transition-colors">
                <span className="text-sm font-mono text-muted-foreground">0{index + 1}</span>
                <h3 className="text-xl font-serif">{service.title}</h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed pl-8">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
