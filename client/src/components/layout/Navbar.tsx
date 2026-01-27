import { Link } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import BookingForm from "@/components/booking/BookingForm";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling past the hero title (approx 500px or 60vh)
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out py-4 px-6 md:px-12 flex justify-between items-center text-foreground border-b bg-background/80 backdrop-blur-md",
        scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <Link href="/">
        <a className="font-serif text-xl tracking-tight hover:opacity-70 transition-opacity">
          John Willis Piano
        </a>
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
        
        <BookingForm 
          trigger={
            <Button 
              variant="outline" 
              className="rounded-none border-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs"
            >
              Book Now
            </Button>
          } 
        />
      </div>
    </nav>
  );
}
