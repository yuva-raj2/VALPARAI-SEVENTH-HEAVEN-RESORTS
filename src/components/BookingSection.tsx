import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
//import { toast } from "sonner";
import {toast} from "../components/ui/sonner";
const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    package: "",
    cabRequired: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! We'll contact you within 24 hours to confirm.", {
      duration: 5000,
    });
    setFormData({
      name: "", email: "", phone: "", checkIn: "", checkOut: "",
      guests: "", package: "", cabRequired: "", specialRequests: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="book-now" className="py-24 px-6 md:px-16 bg-primary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-secondary font-body mb-3">Reserve Your Stay</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Pre-Book Now
          </h2>
          <p className="mt-4 text-primary-foreground/70 font-body max-w-lg mx-auto">
            Fill in your details and we'll get back to you with a confirmed booking and payment details.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card text-card-foreground rounded-lg p-8 md:p-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-sm tracking-wide">Full Name</Label>
              <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required className="rounded-none border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-sm tracking-wide">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required className="rounded-none border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body text-sm tracking-wide">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required className="rounded-none border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests" className="font-body text-sm tracking-wide">Number of Guests</Label>
              <Input id="guests" type="number" min="1" max="50" placeholder="2" value={formData.guests} onChange={(e) => handleChange("guests", e.target.value)} required className="rounded-none border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkIn" className="font-body text-sm tracking-wide">Check-in Date</Label>
              <Input id="checkIn" type="date" value={formData.checkIn} onChange={(e) => handleChange("checkIn", e.target.value)} required className="rounded-none border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkOut" className="font-body text-sm tracking-wide">Check-out Date</Label>
              <Input id="checkOut" type="date" value={formData.checkOut} onChange={(e) => handleChange("checkOut", e.target.value)} required className="rounded-none border-border" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="font-body text-sm tracking-wide">Select Package</Label>
              <Select value={formData.package} onValueChange={(v) => handleChange("package", v)}>
                <SelectTrigger className="rounded-none border-border">
                  <SelectValue placeholder="Choose a package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekend">Weekend Escape — ₹4,999</SelectItem>
                  <SelectItem value="family">Family Retreat — ₹12,999</SelectItem>
                  <SelectItem value="adventure">Adventure Pack — ₹8,499</SelectItem>
                  <SelectItem value="custom">Custom Package</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm tracking-wide">Cab Service Required?</Label>
              <Select value={formData.cabRequired} onValueChange={(v) => handleChange("cabRequired", v)}>
                <SelectTrigger className="rounded-none border-border">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pickup">Airport/Station Pickup Only</SelectItem>
                  <SelectItem value="roundtrip">Round-trip Transfer</SelectItem>
                  <SelectItem value="trekking">Trekking Cab Service</SelectItem>
                  <SelectItem value="all">All Cab Services</SelectItem>
                  <SelectItem value="none">No Cab Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests" className="font-body text-sm tracking-wide">Special Requests</Label>
            <Textarea
              id="specialRequests"
              placeholder="E.g., dietary requirements, extra beds, partner resort overflow for large groups..."
              value={formData.specialRequests}
              onChange={(e) => handleChange("specialRequests", e.target.value)}
              className="rounded-none border-border min-h-[100px]"
            />
          </div>

          <p className="text-xs text-muted-foreground font-body">
            * For groups larger than 10, we will arrange nearby partner resort accommodation at no extra cost.
          </p>

          <Button type="submit" variant="default" size="lg" className="w-full rounded-none py-6 text-sm tracking-widest uppercase font-body font-semibold">
            Submit Booking Request
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
