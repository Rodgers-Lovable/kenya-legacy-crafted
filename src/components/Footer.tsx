import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/logo.png";
import {
  WHATSAPP_NUMBER,
  COMPANY_PRIMARY_EMAIL,
  COMPANY_LOCATION,
  DEVELOPER_WEBSITE,
  DEVELOPER_NAME,
} from "@/core/constants/appConstants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-safari-charcoal text-safari-ivory">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl mb-4">
              Stay Connected with Africa
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get exclusive safari guides, travel tips, and early access to our
              best deals. Plus, download our free Kenya Safari Planning Guide!
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="default" className="whitespace-nowrap">
                Get Free Guide
              </Button>
            </div>
            <div className="text-sm text-white/60 mt-4">
              ✓ Free Kenya Safari Planning Guide • ✓ No spam, unsubscribe
              anytime
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-16 h-16 rounded-full">
                <img src={Logo} alt="Karen Legacy Tours & Safaris" />
              </div>
              <span className="font-display font-bold text-xl">
                Karen Legacy Tours & Safaris
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Local Kenyan safari experts crafting unforgettable wildlife
              experiences since 2015. Licensed, insured, and committed to
              sustainable tourism.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+{WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">{COMPANY_PRIMARY_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{COMPANY_LOCATION}</span>
              </div>
            </div>

            {/* Quick Contact */}
            <Button
              variant="outline"
              size="sm"
              className="mt-6 text-white bg-white/30 border-white/30 hover:bg-white/10"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Safari Packages */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              Safari Packages
            </h3>
            <ul className="space-y-3">
              {[
                "Masai Mara Safaris",
                "Amboseli Adventures",
                "Tsavo Wildlife Tours",
                "Lake Nakuru Experiences",
                "Samburu Safaris",
                "Cultural Journeys",
                "Photography Tours",
                "Family Safaris",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-safari text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              Destinations
            </h3>
            <ul className="space-y-3">
              {[
                "Masai Mara National Reserve",
                "Amboseli National Park",
                "Tsavo East & West",
                "Lake Nakuru National Park",
                "Samburu National Reserve",
                "Meru National Park",
                "Aberdare National Park",
                "Mount Kenya",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-safari text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                "Safari Planning Guide",
                "Best Time to Visit",
                "Packing Checklist",
                "Travel Insurance",
                "Visa Information",
                "Health & Safety",
                "Photography Tips",
                "Conservation Efforts",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-safari text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Trust Badges */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-sm text-white/60">
                Follow our adventures:
              </span>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-safari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-xs text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">K</span>
                </div>
                <span>KATO Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">S</span>
                </div>
                <span>SafariBookings Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <div className="mb-4 md:mb-0">
              © {currentYear} Karen Legacy Tours & Safaris. All rights reserved.
            </div>

            <div className="developer-details text-xs text-center">
              <p>
                Developed & maintained by{" "}
                <a
                  target="_blank"
                  href={DEVELOPER_WEBSITE}
                  className="text-primary"
                >
                  {DEVELOPER_NAME}
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="/privacy" className="hover:text-white transition-safari">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-safari">
                Terms of Service
              </a>
              <a
                href="/booking-terms"
                className="hover:text-white transition-safari"
              >
                Booking Terms
              </a>
              <a
                href="/sitemap.xml"
                className="hover:text-white transition-safari"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
