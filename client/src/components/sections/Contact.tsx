import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import rimImage from "@assets/generated_images/abstract_curve_of_a_grand_piano_rim.png";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Abstract Background Image */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
        <img src={rimImage} alt="" className="w-full h-full object-cover mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6 block">
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-12 leading-tight">
              Ready to elevate your instrument?
            </h2>
            
            <p className="text-xl text-background/80 font-light mb-16 max-w-xl">
              I am currently accepting a limited number of new clients in the Greater Boston area. Please reach out to schedule an appointment.
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:contact@pianotech.com" 
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-2xl md:text-3xl font-serif tracking-wide border-b border-transparent group-hover:border-background transition-colors pb-1">
                  contact@pianotech.com
                </span>
              </a>

              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-2xl md:text-3xl font-serif tracking-wide border-b border-transparent group-hover:border-background transition-colors pb-1">
                  (555) 123-4567
                </span>
              </a>
              
               <div className="flex items-center gap-6 pt-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-background/40" />
                </div>
                <span className="text-lg text-background/60 font-light">
                  Servicing Greater Boston & Surrounding Suburbs
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="absolute bottom-6 w-full px-6 border-t border-background/10 pt-6 flex justify-between text-xs text-background/40">
        <span>© {new Date().getFullYear()} Piano Services</span>
        <span>Registered Piano Technician</span>
      </footer>
    </section>
  );
}
