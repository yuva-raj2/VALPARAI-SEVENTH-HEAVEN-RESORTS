import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">Serenity Resort</h3>
          <p className="text-background/60 font-body text-sm leading-relaxed">
            Nestled in the heart of nature, Serenity Resort offers an unforgettable escape with luxury accommodation, authentic cuisine, and curated adventures.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm">
            {["Services", "Packages", "Book Now"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-background/60 hover:text-background transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 font-body text-sm">
            <li className="flex items-center gap-3 text-background/60">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              Hill Valley Road, Mountain District
            </li>
            <li className="flex items-center gap-3 text-background/60">
              <Phone className="w-4 h-4 flex-shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3 text-background/60">
              <Mail className="w-4 h-4 flex-shrink-0" />
              stay@serenityresort.com
            </li>
            <li className="flex items-center gap-3 text-background/60">
              <Instagram className="w-4 h-4 flex-shrink-0" />
              @serenityresort
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-background/10 text-center">
        <p className="text-background/40 font-body text-xs tracking-wide">
          © 2026 Serenity Resort. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
