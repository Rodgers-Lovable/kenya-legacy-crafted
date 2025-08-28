import { useState } from "react";
import { MapPin, Camera, Calendar, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const destinations = [
    {
      id: "masai-mara",
      name: "Masai Mara National Reserve",
      slug: "masai-mara",
      region: "Rift Valley",
      description: "Home to the Great Migration and incredible wildlife diversity, the Masai Mara is Kenya's most famous safari destination.",
      image: "/api/placeholder/600/400",
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons"],
      bestMonths: ["Jul", "Aug", "Sep", "Oct"],
      wildlife: ["Lions", "Elephants", "Wildebeest", "Zebras", "Cheetahs"],
      rating: 4.9,
      safariCount: 12
    },
    {
      id: "amboseli",
      name: "Amboseli National Park", 
      slug: "amboseli",
      region: "Southern Kenya",
      description: "Famous for its large elephant herds and stunning views of Mount Kilimanjaro, Amboseli offers incredible photography opportunities.",
      image: "/api/placeholder/600/400",
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Photography", "Swamplands"],
      bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
      wildlife: ["Elephants", "Lions", "Cheetahs", "Hippos", "Buffalos"],
      rating: 4.8,
      safariCount: 8
    },
    {
      id: "samburu",
      name: "Samburu National Reserve",
      slug: "samburu",
      region: "Northern Kenya", 
      description: "A unique ecosystem in Kenya's northern frontier, home to rare species not found elsewhere in the country.",
      image: "/api/placeholder/600/400",
      highlights: ["Unique Wildlife", "Samburu Culture", "Ewaso Nyiro River", "Desert Landscapes"],
      bestMonths: ["Jun", "Jul", "Aug", "Sep", "Dec", "Jan", "Feb"],
      wildlife: ["Grevy's Zebra", "Reticulated Giraffe", "Somali Ostrich", "Gerenuk", "Beisa Oryx"],
      rating: 4.7,
      safariCount: 6
    },
    {
      id: "tsavo-east",
      name: "Tsavo East National Park",
      slug: "tsavo-east",
      region: "Coast Province",
      description: "One of Kenya's largest parks, famous for its red elephants and vast wilderness areas perfect for adventure seekers.",
      image: "/api/placeholder/600/400",
      highlights: ["Red Elephants", "Galana River", "Mudanda Rock", "Vast Wilderness"],
      bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
      wildlife: ["Red Elephants", "Lions", "Leopards", "Rhinos", "Hippos"],
      rating: 4.6,
      safariCount: 5
    },
    {
      id: "lake-nakuru",
      name: "Lake Nakuru National Park",
      slug: "lake-nakuru", 
      region: "Rift Valley",
      description: "A bird lover's paradise famous for its flamingos, rhinos, and diverse wildlife in a compact park setting.",
      image: "/api/placeholder/600/400",
      highlights: ["Pink Flamingos", "White Rhinos", "Baboon Cliff", "Compact Size"],
      bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wildlife: ["Flamingos", "White Rhinos", "Lions", "Leopards", "Buffalos"],
      rating: 4.5,
      safariCount: 7
    },
    {
      id: "meru",
      name: "Meru National Park",
      slug: "meru",
      region: "Eastern Kenya",
      description: "A hidden gem offering pristine wilderness and the famous Elsa the Lioness connection from 'Born Free'.",
      image: "/api/placeholder/600/400", 
      highlights: ["Born Free Story", "Pristine Wilderness", "Tana River", "Diverse Ecosystems"],
      bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Feb"],
      wildlife: ["Lions", "Elephants", "Rhinos", "Leopards", "Cheetahs"],
      rating: 4.4,
      safariCount: 4
    }
  ];

  const regions = ["all", "Rift Valley", "Southern Kenya", "Northern Kenya", "Coast Province", "Eastern Kenya"];

  const filteredDestinations = destinations.filter(dest => 
    selectedRegion === "all" || dest.region === selectedRegion
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-sunset flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Destinations</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Explore Kenya's diverse ecosystems, from savannah plains to mountain highlands
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Interactive Map Placeholder */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-bold mb-4 text-foreground">Explore Kenya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on regions below to discover the incredible destinations Kenya has to offer
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map of Kenya</p>
                <p className="text-sm">Click regions to filter destinations</p>
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
              Each destination offers unique wildlife experiences and breathtaking landscapes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden border-border bg-card hover:shadow-lg transition-safari">
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-safari"
                  />
                  <Badge className="absolute top-4 left-4">{destination.region}</Badge>
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
                  <CardTitle className="font-display text-2xl">{destination.name}</CardTitle>
                  <CardDescription className="text-base">{destination.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                        <Camera className="w-4 h-4" /> Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
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
                          <Badge key={index} variant="secondary" className="text-xs">
                            {month}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Wildlife</h4>
                      <p className="text-sm text-muted-foreground">
                        {destination.wildlife.join(" • ")}
                      </p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" asChild className="flex-1">
                        <a href={`/destinations/${destination.slug}`} className="flex items-center justify-center gap-1">
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
            Let our experts help you choose the perfect destinations for your dream safari
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
  );
};

export default Destinations;