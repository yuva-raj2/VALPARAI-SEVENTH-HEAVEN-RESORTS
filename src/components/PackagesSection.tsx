import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Weekend Escape",
    price: "₹4,999",
    duration: "2 Nights / 3 Days",
    features: [
      "Deluxe room with forest view",
      "Breakfast & dinner included",
      "One guided trek",
      "Airport/station pickup",
      "Complimentary Wi-Fi",
    ],
    popular: false,
  },
  {
    name: "Family Retreat",
    price: "₹12,999",
    duration: "4 Nights / 5 Days",
    features: [
      "Family suite accommodation",
      "All meals included",
      "Daily guided activities",
      "Round-trip cab transfers",
      "Kids' adventure program",
      "Overflow rooms at partner resort",
      "Bonfire night experience",
    ],
    popular: true,
  },
  {
    name: "Adventure Pack",
    price: "₹8,499",
    duration: "3 Nights / 4 Days",
    features: [
      "Standard room accommodation",
      "All meals included",
      "3 trekking expeditions",
      "Cab for all treks",
      "Camping equipment provided",
      "Professional trek guide",
    ],
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-secondary font-body mb-3">Choose Your Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our Packages
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-lg p-8 border transition-shadow duration-500 hover:shadow-xl ${
                pkg.popular
                  ? "bg-primary border-primary text-primary-foreground scale-[1.02]"
                  : "bg-card border-border text-card-foreground"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground text-xs font-body font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm font-body mb-4 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.duration}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-4xl font-bold">{pkg.price}</span>
                  <span className={`text-sm font-body ${pkg.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    / person
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-body">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-secondary" : "text-secondary"}`} />
                    <span className={pkg.popular ? "text-primary-foreground/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "secondary" : "default"}
                className="w-full rounded-none py-6 text-sm tracking-widest uppercase font-body font-semibold"
                asChild
              >
                <a href="#book-now">Book Now</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
