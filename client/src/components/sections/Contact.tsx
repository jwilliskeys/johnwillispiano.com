import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const BOOKING_URL = "https://book.johnwillispiano.com/book";

export default function Contact() {
  return (
    <section id="book" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Ready to elevate your instrument?
            </h2>
            <p className="text-background/80 font-light mb-10 text-lg max-w-md">
              Accepting a limited number of new clients in Greater Boston, with regular trips to Utah. Book online or reach out directly.
            </p>

            <div className="space-y-0">
              <a href="mailto:j.willis.keys@gmail.com" className="flex items-center gap-5 py-5 border-t border-background/15 group" data-testid="link-email">
                <div className="w-11 h-11 rounded-full border border-background/25 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest text-background/50">Email</div>
                  <div className="font-serif text-xl">j.willis.keys@gmail.com</div>
                </div>
              </a>
              <a href="tel:+14352755959" className="flex items-center gap-5 py-5 border-t border-background/15 group" data-testid="link-phone">
                <div className="w-11 h-11 rounded-full border border-background/25 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest text-background/50">Phone</div>
                  <div className="font-serif text-xl">435-275-5959</div>
                </div>
              </a>
              <div className="flex items-center gap-5 py-5 border-t border-b border-background/15">
                <div className="w-11 h-11 rounded-full border border-background/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-widest text-background/50">Based In</div>
                  <div className="font-serif text-xl">Somerville, MA</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background text-foreground p-12 md:p-16 text-center"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-5">
              Online Booking
            </span>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">Book your appointment</h3>
            <p className="text-muted-foreground font-light mb-10 max-w-sm mx-auto">
              Pick your services, choose an open time, and you're on the calendar.
            </p>
            <a
              href={BOOKING_URL}
              data-testid="button-book-now"
              className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-medium tracking-widest text-sm uppercase hover:bg-primary transition-colors"
            >
              Book Service Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="mt-20 border-t border-background/10 pt-6 px-6 text-xs text-background/40">
        <div className="container mx-auto max-w-6xl flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} John Willis Piano · Somerville, MA</span>
          <span>Registered Piano Technician · Piano Technicians Guild</span>
        </div>
      </footer>
    </section>
  );
}
