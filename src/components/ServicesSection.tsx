import { motion } from "framer-motion";
import { Car, Utensils, Users, BedDouble, Leaf, Bike } from "lucide-react";

import resortRoom from "../assets/resort-room.jpg";
import resortDining from "../assets/resort-dining.jpg";
import resortCab from "../assets/resort-cab.avif";
import natureplantation from "../assets/nature-plantation-tours.jfif";
import trekkingadventure from "../assets/trekking-adventure.avif";
import organicproducts from "../assets/organic-products.avif";
import resortCottage from "../assets/resort-cottage.avif";

const services = [
  {
    icon: Car,
    title: "Cab & Travel Experience",
    description:
      "Seamless pickup, hill driving, and guided sightseeing across Valparai’s tea estates, forest routes, and hidden viewpoints.",
    image: resortCab,
  },
  {
    icon: Utensils,
    title: "Homely Dining Experience",
    description:
      "Enjoy freshly prepared homely food with authentic South Indian flavors. Custom meal options available.",
    image: resortDining,
  },
  {
    icon: Users,
    title: "Cottages and Group Stay",
    description:
      "Spacious cottages and villas for couples, families, and large groups — surrounded by peaceful greenery.",
    image: resortCottage,
  },
  {
    icon: BedDouble,
    title: "Campfire & Night Experience",
    description:
      "Relax with cozy campfire nights, music, and conversations in the cool Valparai climate.",
    image: resortRoom,
  },
  {
    icon: Leaf,
    title: "Nature & Plantation Tours",
    description:
      "Visit tea, cardamom, and pepper plantations, explore tribal villages and immerse in nature.",
    image: natureplantation,
  },
  {
    icon: Bike,
    title: "Trekking & Adventure",
    description:
      "Explore forest trails, tea estate paths, and scenic viewpoints with guided trekking experiences.",
    image: trekkingadventure,
  },
  {
    icon: Car,
    title: "Organic & Local Products",
    description:
      "Shop tea powder, cardamom, pepper, and handmade chocolates sourced from local farms.",
    image: organicproducts,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-section-gradient">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row h-full rounded-xl overflow-hidden bg-card border border-border hover:shadow-xl transition duration-500"
            >

              {/* IMAGE (FIXED SIZE - SAME EVERYWHERE) */}
              <div className="md:w-2/5 h-[220px] md:h-[260px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-3/5 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
