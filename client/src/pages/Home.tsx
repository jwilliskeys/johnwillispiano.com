import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Craft from "@/components/sections/Craft";
import Credentials from "@/components/sections/Credentials";
import Reviews from "@/components/sections/Reviews";
import Area from "@/components/sections/Area";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Craft />
        <Credentials />
        <Reviews />
        <Area />
        <Contact />
      </main>
    </div>
  );
}
