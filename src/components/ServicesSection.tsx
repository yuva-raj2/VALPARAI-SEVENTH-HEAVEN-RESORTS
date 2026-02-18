import { motion } from "framer-motion";
import { Car, Utensils, Users, BedDouble } from "lucide-react";
import resortRoom from "../assets/resort-room.jpg";
import resortDining from "../assets/resort-dining.jpg";
import resortCab from "../assets/resort-cab.jpg";

const services = [
  {
    icon: Car,
    title: "Cab & Transfer Service",
    description: "Premium cab service for trekking expeditions, airport pickups, and local sightseeing. Comfortable vehicles with experienced mountain drivers.",
    image: resortCab,
  },
  {
    icon: Utensils,
    title: "In-Resort Dining",
    description: "Savor authentic local cuisine and international dishes prepared by our expert chefs, served in our elegant dining hall with panoramic views.",
    image: resortDining,
  },
  {
    icon: Users,
    title: "Group Accommodation",
    description: "Traveling with a large group? We seamlessly arrange overflow accommodation at our trusted partner resorts nearby — same quality, zero hassle.",
    image: resortRoom,
  },
  {
    icon: BedDouble,
    title: "Luxury Rooms & Suites",
    description: "Spacious rooms with forest views, premium linens, and modern amenities. Wake up to birdsong and misty mountain mornings.",
    image: resortRoom,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-section-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-secondary font-body mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
