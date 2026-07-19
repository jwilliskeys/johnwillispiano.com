import { motion } from "framer-motion";

export default function Area() {
  return (
    <section id="area" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-4">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-5">Serving Greater Boston.</h2>
            <p className="text-muted-foreground text-lg font-light mb-8">
              Based in Somerville, I serve homes, studios, schools, churches, and concert venues across the Greater Boston area.
            </p>
            <div className="border-l-2 border-primary bg-secondary/40 px-6 py-4 text-sm text-foreground/80 font-light">
              I also make regular trips to the Salt Lake City area (Davis County and surrounding) for tunings and family — reach out to get on the list for the next Utah trip.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] border border-border overflow-hidden"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-71.32%2C42.28%2C-70.95%2C42.50&layer=mapnik&marker=42.3876%2C-71.0995"
              title="Service area map centered on Somerville, MA"
              loading="lazy"
              className="w-full h-full border-0 grayscale-[0.4]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
