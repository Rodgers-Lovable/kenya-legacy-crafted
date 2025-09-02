import { useState } from "react";
import { Search, Filter, Clock, MapPin, Users, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroSafaris from "@/assets/hero-safaris.jpg";
import SafariBuilderModal from "@/components/SafariBuilderModal";

const Safaris = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const safaris = [
    {
      id: "maasai-mara-luxury",
      title: "7-Day Maasai Mara Luxury Safari",
      slug: "maasai-mara-luxury-safari",
      style: "Luxury",
      duration: 7,
      price: "From KES30,500",
      image: "/api/placeholder/600/400",
      description:
        "Experience the Great Migration in ultimate luxury with premium camps and exclusive game drives.",
      highlights: [
        "Great Migration",
        "Luxury Tented Camps",
        "Hot Air Balloon",
        "Expert Guide",
      ],
      destinations: ["Maasai Mara", "Nairobi"],
      rating: 4.9,
      reviews: 124,
    },
    {
      id: "amboseli-family",
      title: "5-Day Family Safari Adventure",
      slug: "amboseli-family-safari",
      style: "Family",
      duration: 5,
      price: "From KES20,200",
      image: "/api/placeholder/600/400",
      description:
        "Perfect family adventure with kid-friendly accommodations and educational wildlife experiences.",
      highlights: [
        "Family-Friendly",
        "Educational Tours",
        "Cultural Visit",
        "Mount Kilimanjaro Views",
      ],
      destinations: ["Amboseli", "Nairobi"],
      rating: 4.8,
      reviews: 89,
    },
    {
      id: "photography-safari",
      title: "10-Day Photography Safari",
      slug: "photography-safari-kenya",
      style: "Photography",
      duration: 10,
      price: "From KES40,800",
      image: "/api/placeholder/600/400",
      description:
        "Capture Kenya's wildlife with professional guides and optimal positioning for stunning shots.",
      highlights: [
        "Photography Hides",
        "Professional Guide",
        "Extended Game Drives",
        "Portfolio Review",
      ],
      destinations: ["Maasai Mara", "Amboseli", "Lake Nakuru"],
      rating: 4.9,
      reviews: 67,
    },
    {
      id: "budget-adventure",
      title: "4-Day Budget Safari",
      slug: "budget-safari-kenya",
      style: "Budget",
      duration: 4,
      price: "From KES80,000",
      image: "/api/placeholder/600/400",
      description:
        "Affordable safari adventure without compromising on wildlife experiences and comfort.",
      highlights: [
        "Great Value",
        "Comfortable Lodges",
        "Game Drives",
        "Cultural Experience",
      ],
      destinations: ["Lake Nakuru", "Maasai Mara"],
      rating: 4.6,
      reviews: 156,
    },
    {
      id: "migration-special",
      title: "Migration Spectacle Safari",
      slug: "great-migration-safari",
      style: "Migration",
      duration: 8,
      price: "From KES40,200",
      image: "/api/placeholder/600/400",
      description:
        "Witness the world's greatest wildlife spectacle during peak migration season.",
      highlights: [
        "River Crossings",
        "Migration Camps",
        "Extended Stays",
        "Prime Positioning",
      ],
      destinations: ["Maasai Mara", "Serengeti Border"],
      rating: 4.9,
      reviews: 203,
    },
    {
      id: "cultural-safari",
      title: "6-Day Cultural & Wildlife Safari",
      slug: "cultural-wildlife-safari",
      style: "Cultural",
      duration: 6,
      price: "From KES20,800",
      image: "/api/placeholder/600/400",
      description:
        "Immerse yourself in local cultures while enjoying incredible wildlife encounters.",
      highlights: [
        "Maasai Villages",
        "Cultural Immersion",
        "Traditional Dances",
        "Local Crafts",
      ],
      destinations: ["Maasai Mara", "Cultural Villages"],
      rating: 4.7,
      reviews: 98,
    },
  ];

  const filteredSafaris = safaris.filter((safari) => {
    const matchesSearch =
      safari.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      safari.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStyle =
      selectedStyle === "all" ||
      safari.style.toLowerCase() === selectedStyle.toLowerCase();
    const matchesDuration =
      selectedDuration === "all" ||
      (selectedDuration === "short" && safari.duration <= 5) ||
      (selectedDuration === "medium" &&
        safari.duration >= 6 &&
        safari.duration <= 8) ||
      (selectedDuration === "long" && safari.duration >= 9);

    return matchesSearch && matchesStyle && matchesDuration;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroSafaris})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-packages opacity-85"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-hero text-white mb-6 animate-safari-fade-in">
            Luxury{" "}
            <span className="text-safari-golden font-highlight italic">
              Safari Packages
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-body animate-safari-fade-in">
            Discover our carefully crafted safari experiences, from luxury
            adventures to family-friendly journeys
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
              Find Your Perfect Safari
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search safaris..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Safari Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="migration">Migration</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedDuration}
                onValueChange={setSelectedDuration}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="short">1-5 Days</SelectItem>
                  <SelectItem value="medium">6-8 Days</SelectItem>
                  <SelectItem value="long">9+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Safari Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredSafaris.map((safari) => (
            <Card
              key={safari.id}
              className="safari-card group hover-scale overflow-hidden"
            >
              <div className="safari-image-card aspect-video bg-muted overflow-hidden">
                <img
                  src={safari.image}
                  alt={safari.title}
                  className="w-full h-full object-cover transition-spring group-hover:scale-105"
                />
                <div className="overlay absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-safari"></div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="hover-scale">
                    {safari.style}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{safari.rating}</span>
                    <span>({safari.reviews})</span>
                  </div>
                </div>
                <CardTitle className="font-display text-2xl">
                  {safari.title}
                </CardTitle>
                <CardDescription className="font-body">
                  {safari.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{safari.duration} Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{safari.destinations.join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {safari.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs hover-scale font-body"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-display text-2xl font-bold text-primary">
                        {safari.price} <span className="text-sm text-muted-foreground font-body">/per person</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover-glow"
                      >
                        <a href={`/safaris/${safari.slug}`}>View Details</a>
                      </Button>
                      <SafariBuilderModal>
                        <Button size="sm" className="hover-glow">
                          Book Now
                        </Button>
                      </SafariBuilderModal>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSafaris.length === 0 && (
          <div className="text-center py-16">
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              No safaris found
            </h3>
            <p className="text-muted-foreground mb-8">
              Try adjusting your search criteria or browse all our safaris
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedStyle("all");
                setSelectedDuration("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 text-center bg-gradient-sunset rounded-2xl p-12 text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create a custom safari tailored to your preferences and
            budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-foreground px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-safari"
            >
              Plan Custom Safari
            </a>
            <a
              href="https://wa.me/254700000000?text=Hi! I'd like to discuss a custom safari package."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-safari"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Safaris;
