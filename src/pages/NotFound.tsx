import { ArrowRight, MapPin, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  COMPANY_PRIMARY_TEL,
  WHATSAPP_NUMBER,
} from "@/core/constants/appConstants";
import hero404 from "@/assets/hero-404.jpg";

const NotFound = () => {
  const quickLinks = [
    {
      title: "Safari Packages",
      href: "/safaris",
      description: "Explore our curated safari experiences",
    },
    {
      title: "Destinations",
      href: "/destinations",
      description: "Discover Kenya's incredible wildlife parks",
    },
    {
      title: "Travel Guides",
      href: "/guides",
      description: "Expert tips for planning your safari",
    },
    {
      title: "Contact Us",
      href: "/contact",
      description: "Get help planning your perfect safari",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Enhanced 404 Hero Section */}
      <section 
        className="py-20 relative overflow-hidden text-white"
        style={{ 
          backgroundImage: `url(${hero404})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-safari-golden/80 to-safari-sunset/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Safari-themed illustration */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 hover-scale transition-spring">
                <MapPin className="w-16 h-16 text-white" />
              </div>

              {/* Scattered footprint icons */}
              <div className="absolute inset-0 pointer-events-none">
                <Footprints className="w-8 h-8 text-white/40 absolute top-4 left-1/4 rotate-12 animate-pulse" />
                <Footprints className="w-6 h-6 text-white/30 absolute top-12 right-1/3 -rotate-12 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <Footprints className="w-10 h-10 text-white/35 absolute bottom-8 left-1/3 rotate-45 animate-pulse" style={{ animationDelay: "1s" }} />
                <Footprints className="w-7 h-7 text-white/40 absolute bottom-4 right-1/4 -rotate-6 animate-pulse" style={{ animationDelay: "1.5s" }} />
              </div>
            </div>

            <h1 className="font-display text-6xl md:text-8xl mb-4 animate-safari-fade-in">404</h1>
            <h2 className="font-display text-3xl md:text-4xl mb-6 font-highlight animate-safari-fade-in">
              Lost in the <span className="italic text-safari-golden">Wild?</span>
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto font-body animate-safari-slide-up">
              It seems you've wandered off the beaten track. Even our expert
              guides can't find this page! Let's get you back on safari to
              explore Kenya's magnificent wilderness.
            </p>

            {/* Quick navigation */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 animate-safari-slide-up">
              <Button size="lg" variant="secondary" asChild className="hover-glow">
                <a href="/">
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                  Return to Base Camp
                </a>
              </Button>
              <Button
                size="lg"
                variant="safari"
                className="hover-glow"
                asChild
              >
                <a href="/safaris">Explore Safari Packages</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl mb-4">
              Where Would You Like to Go?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't let this detour stop your safari adventure. Here are some
              popular destinations to get you back on track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="group hover:shadow-safari-floating transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-safari">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {link.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-primary"
                    asChild
                  >
                    <a href={link.href}>
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Fact Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl mb-4">Did You Know?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Kenya is home to over{" "}
                <strong className="text-primary">
                  25,000 different animal species
                </strong>{" "}
                and more than{" "}
                <strong className="text-primary">1,100 bird species</strong>.
                That's more wildlife diversity than most other countries
                combined! No wonder it's impossible to see everything in one
                visit.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/destinations">Discover Wildlife Parks</a>
                </Button>
                <Button asChild>
                  <a href="/safaris">
                    Plan Your Safari
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl mb-4">
            Need Help Finding Your Way?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our safari experts are here to guide you to the perfect Kenya
            adventure. Let us help you navigate to exactly what you're looking
            for.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <a href="/contact">Chat with Safari Expert</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white bg-white/10 border-white/30 hover:bg-white/10"
            >
              <a href={`tel:${WHATSAPP_NUMBER}`}>
                Call Us: {COMPANY_PRIMARY_TEL}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
