import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#craft", label: "Craft" },
  { href: "#reviews", label: "Reviews" },
  { href: "#area", label: "Area" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out py-4 px-6 md:px-12 flex justify-between items-center text-foreground border-b bg-background/85 backdrop-blur-md",
        scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <Link href="/">
        <a className="font-serif text-xl tracking-tight hover:opacity-70 transition-opacity">
          John Willis Piano
        </a>
      </Link>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-7 text-sm font-medium tracking-wide uppercase">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>

        <a href="https://book.johnwillispiano.com/book" className="hidden md:block">
          <Button
            variant="outline"
            className="rounded-none border-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs"
            data-testid="button-nav-book"
          >
            Book Service
          </Button>
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          data-testid="button-nav-menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 md:hidden bg-background border border-border shadow-xl flex flex-col py-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3.5 text-sm uppercase tracking-wide hover:bg-secondary/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://book.johnwillispiano.com/book"
            onClick={() => setOpen(false)}
            className="px-6 py-3.5 text-sm uppercase tracking-wide font-medium text-primary hover:bg-secondary/50"
          >
            Book Service
          </a>
        </div>
      )}
    </nav>
  );
}
