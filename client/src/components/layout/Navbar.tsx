import { Link } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import BookingForm from "@/components/booking/BookingForm";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 text-foreground mix-blend-normal border-b" : "bg-transparent"
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
              className={cn(
                "rounded-none border-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs",
                !scrolled && "border-white text-white hover:bg-white hover:text-black"
              )}
            >
              Book Now
            </Button>
          } 
        />
      </div>
    </nav>
  );
}
