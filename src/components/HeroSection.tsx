import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroImage from "../assets/hero-resort.jfif";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Luxury resort nestled in tropical mountains"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 md:px-16">
        <h2 className="font-heading text-2xl font-bold text-primary-foreground tracking-wider">
          SERENITY RESORT
        </h2>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Packages", "Dining", "Book Now"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm tracking-[0.3em] uppercase text-primary-foreground/70 font-body"
        >
          Welcome to Paradise
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          An Escape Into
          <br />
          <span className="text-gradient-gold italic">Serenity</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-xl text-lg text-primary-foreground/80 font-body font-light"
        >
          Luxury accommodation, exquisite dining, and seamless travel — all nestled in nature's embrace.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4"
        >
          <Button variant="secondary" size="lg" className="rounded-none px-10 py-6 text-sm tracking-widest uppercase font-body font-semibold" asChild>
            <a href="#book-now">Book Your Stay</a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-none px-10 py-6 text-sm tracking-widest uppercase font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
            <a href="#packages">View Packages</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
