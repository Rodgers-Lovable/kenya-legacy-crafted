import { useState } from "react";
import { MapPin, Camera, Calendar, Star, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroDestinations from "@/assets/hero-destinations.jpg";
import { destinations } from "@/core/data/destinations";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "@/core/constants/appConstants";

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const regions = [
    "all",
    "Rift Valley",
    "Southern Kenya",
    "Northern Kenya",
    "Coast Province",
    "Eastern Kenya",
  ];

  const filteredDestinations = destinations.filter(
    (dest) => selectedRegion === "all" || dest.region === selectedRegion
  );

  return (
    <>
      <Helmet>
        <title>Top Kenya Safari Destinations | {COMPANY_NAME}</title>
        <meta
          name="description"
          content="Discover the best safari destinations in Kenya. Explore Maasai Mara, Amboseli, Lake Nakuru, Samburu & Mount Kenya with guided tours and safaris."
        />
        <meta
          name="keywords"
          content="Kenya safari destinations, Maasai Mara, Amboseli National Park, Lake Nakuru, Samburu, Tsavo safaris"
        />
        <meta
          property="og:title"
          content="Top Kenya Safari Destinations | Maasai Mara, Amboseli, Tsavo"
        />
        <meta property="og:image" content="/images/seo/destinations.jpg" />
        <link
          rel="canonical"
          href="https://karenlegacytoursandsafaris.com/destinations"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroDestinations})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-destinations opacity-90"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-display text-hero text-white mb-6 animate-safari-fade-in">
              Kenya's Premier{" "}
              <span className="text-safari-golden font-highlight italic">
                Safari Destinations
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-body animate-safari-fade-in">
              From the legendary Masai Mara to hidden wilderness gems, explore
              diverse ecosystems that make Kenya the ultimate safari
              destination.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Interactive Map Placeholder */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-4xl font-bold mb-4 text-foreground">
                Explore Kenya
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on regions below to discover the incredible destinations
                Kenya has to offer
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive Map of Kenya</p>
                  <p className="text-sm">
                    Click regions to filter destinations
                  </p>
                </div>
              </div>
            </div>

            {/* Region Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  onClick={() => setSelectedRegion(region)}
                  className="capitalize"
                >
                  {region === "all" ? "All Regions" : region}
                </Button>
              ))}
            </div>
          </section>

          {/* Destinations Grid */}
          <section>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4 text-foreground">
                Featured Destinations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each destination offers unique wildlife experiences and
                breathtaking landscapes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {filteredDestinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="overflow-hidden border-border bg-card hover:shadow-lg transition-safari"
                >
                  <div className="aspect-video bg-muted overflow-hidden relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-safari"
                    />
                    <Badge className="absolute top-4 left-4">
                      {destination.region}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{destination.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {destination.safariCount} safaris available
                      </div>
                    </div>
                    <CardTitle className="font-display text-2xl">
                      {destination.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {destination.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                          <Camera className="w-4 h-4" /> Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> Best Months to Visit
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {destination.bestMonths.map((month, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {month}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">
                          Key Wildlife
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {destination.wildlife.join(" • ")}
                        </p>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" asChild className="flex-1">
                          <a
                            href={`/destinations/${destination.slug}`}
                            className="flex items-center justify-center gap-1"
                          >
                            Explore <ArrowRight className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="/safaris">View Safaris</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Planning Section */}
          <section className="mt-20 text-center bg-gradient-sunset rounded-2xl p-12 text-white">
            <h2 className="font-display text-3xl font-bold mb-4">
              Plan Your Kenya Safari Adventure
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts help you choose the perfect destinations for your
              dream safari
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-foreground px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-safari"
              >
                Plan My Safari
              </a>
              <a
                href="/guides"
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-safari"
              >
                Read Planning Guides
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Destinations;
