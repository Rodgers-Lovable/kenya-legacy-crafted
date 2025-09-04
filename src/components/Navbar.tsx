import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { WHATSAPP_NUMBER } from "@/core/constants/appConstants";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Safaris", href: "/safaris" },
    { name: "Destinations", href: "/destinations" },
    { name: "Guides", href: "/guides" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-full">
                <img src={Logo} alt="Karen Legacy Tours & Safaris" />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-safari font-medium ${
                    location.pathname === item.href
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-safari-green hover:text-primary transition-safari"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="/contact">Plan My Safari</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              name="mobile menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-safari"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-safari rounded-md font-medium ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-safari-green hover:text-primary hover:bg-muted transition-safari rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <Button
                  variant="default"
                  size="sm"
                  className="mx-3 mt-2 w-full"
                  asChild
                >
                  <a href="/contact">Plan My Safari</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
