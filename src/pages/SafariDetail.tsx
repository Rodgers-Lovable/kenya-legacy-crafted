import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  CheckCircle,
  XCircle,
  Camera,
  Utensils,
  Bed,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SafariDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in a real app, this would come from CMS/API
  const safari = {
    title: "7-Day Masai Mara Luxury Safari",
    description:
      "Experience the Great Migration in ultimate luxury with premium camps, exclusive game drives, and unparalleled service in Kenya's most famous reserve.",
    style: "Luxury",
    duration: 7,
    price: "From $3,500",
    priceDetails: "per person sharing, based on 2 people",
    rating: 4.9,
    reviews: 124,
    destinations: ["Masai Mara National Reserve", "Nairobi"],
    bestMonths: ["July", "August", "September", "October"],
    minAge: 6,
    maxGroupSize: 8,

    gallery: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description:
          "Meet and greet at Jomo Kenyatta International Airport. Transfer to luxury city hotel for relaxation and safari briefing.",
        meals: ["Dinner"],
        accommodation: "Villa Rosa Kempinski",
        activities: ["Airport transfer", "Safari briefing", "Welcome dinner"],
      },
      {
        day: 2,
        title: "Fly to Masai Mara",
        description:
          "Morning flight to Masai Mara. Afternoon game drive in the reserve with chances to spot the Big Five.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mahali Mzuri Luxury Camp",
        activities: ["Scheduled flight", "Game drive", "Sundowner drinks"],
      },
      {
        day: 3,
        title: "Full Day Masai Mara",
        description:
          "Early morning and afternoon game drives. Optional hot air balloon safari at sunrise (additional cost).",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mahali Mzuri Luxury Camp",
        activities: [
          "Morning game drive",
          "Optional balloon safari",
          "Evening game drive",
        ],
      },
      {
        day: 4,
        title: "Masai Mara - Cultural Experience",
        description:
          "Game drive followed by visit to authentic Maasai village. Learn about traditional culture and customs.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mahali Mzuri Luxury Camp",
        activities: [
          "Game drive",
          "Maasai village visit",
          "Cultural performance",
        ],
      },
      {
        day: 5,
        title: "Migration Crossing",
        description:
          "Position vehicles at the Mara River for potential wildebeest crossing. Full day dedicated to migration viewing.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mahali Mzuri Luxury Camp",
        activities: [
          "River crossing viewing",
          "Photography session",
          "Bush lunch",
        ],
      },
      {
        day: 6,
        title: "Final Game Drive",
        description:
          "Last morning in the Mara with final game drive. Afternoon flight back to Nairobi.",
        meals: ["Breakfast", "Lunch"],
        accommodation: "Villa Rosa Kempinski",
        activities: [
          "Final game drive",
          "Flight to Nairobi",
          "Farewell dinner",
        ],
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Transfer to airport for international departure or extend your stay in Kenya.",
        meals: ["Breakfast"],
        accommodation: "Day room if required",
        activities: ["Airport transfer"],
      },
    ],

    inclusions: [
      "All accommodation as specified",
      "All meals as per itinerary",
      "All game drives and activities",
      "Professional English-speaking guide",
      "All park fees and conservancy fees",
      "Scheduled flights Nairobi-Mara-Nairobi",
      "Airport transfers",
      "Bottled water during game drives",
      "Game drive vehicle with pop-up roof",
      "Binoculars for game viewing",
    ],

    exclusions: [
      "International flights",
      "Kenya visa fees",
      "Travel insurance",
      "Hot air balloon safari ($450 pp)",
      "Alcoholic beverages",
      "Personal items and souvenirs",
      "Tips and gratuities",
      "Medical expenses",
      "Items of personal nature",
    ],

    accommodations: [
      {
        name: "Villa Rosa Kempinski",
        location: "Nairobi",
        description:
          "Luxury city hotel with elegant rooms and excellent service.",
        amenities: ["Spa", "Restaurant", "Pool", "Gym"],
      },
      {
        name: "Mahali Mzuri Luxury Camp",
        location: "Masai Mara",
        description:
          "Sir Richard Branson's exclusive safari camp with breathtaking views.",
        amenities: [
          "Infinity pool",
          "Spa treatments",
          "Butler service",
          "Private deck",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={safari.gallery[selectedImage]}
          alt={safari.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <Badge className="mb-4">{safari.style}</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {safari.title}
          </h1>
          <div className="flex items-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{safari.duration} Days</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Masai Mara</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>
                {safari.rating} ({safari.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail Gallery */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {safari.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Safari ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {safari.description}
              </p>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Best Time</p>
                    <p className="text-muted-foreground">
                      {safari.bestMonths.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Group Size</p>
                    <p className="text-muted-foreground">
                      Max {safari.maxGroupSize} people
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-muted-foreground">
                      {safari.duration} days
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Min Age</p>
                    <p className="text-muted-foreground">
                      {safari.minAge}+ years
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Day by Day Itinerary
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {safari.itinerary.map((day, index) => (
                  <AccordionItem
                    key={index}
                    value={`day-${day.day}`}
                    className="border border-border rounded-lg"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold">
                            {day.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {day.accommodation}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground mb-4">
                        {day.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium flex items-center gap-1 mb-2">
                            <Utensils className="w-4 h-4" /> Meals
                          </h4>
                          <ul className="text-muted-foreground space-y-1">
                            {day.meals.map((meal, i) => (
                              <li key={i}>{meal}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium flex items-center gap-1 mb-2">
                            <Bed className="w-4 h-4" /> Accommodation
                          </h4>
                          <p className="text-muted-foreground">
                            {day.accommodation}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium flex items-center gap-1 mb-2">
                            <Camera className="w-4 h-4" /> Activities
                          </h4>
                          <ul className="text-muted-foreground space-y-1">
                            {day.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Accommodations */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Accommodations
              </h2>
              <div className="space-y-6">
                {safari.accommodations.map((acc, index) => (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{acc.name}</span>
                        <Badge variant="outline">{acc.location}</Badge>
                      </CardTitle>
                      <CardDescription>{acc.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {acc.amenities.map((amenity, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-green-600 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Included
                  </h3>
                  <ul className="space-y-2">
                    {safari.inclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Not Included
                  </h3>
                  <ul className="space-y-2">
                    {safari.exclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="border-border sticky top-24">
              <CardHeader>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    {safari.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {safari.priceDetails}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{safari.rating}</span>
                  <span className="text-muted-foreground">
                    ({safari.reviews} reviews)
                  </span>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a href="/contact">Book This Safari</a>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://wa.me/254700000000?text=Hi! I'm interested in the 7-Day Masai Mara Luxury Safari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Free cancellation up to 14 days before departure
                </p>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{safari.duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Style:</span>
                  <span className="font-medium">{safari.style}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Group size:</span>
                  <span className="font-medium">Max {safari.maxGroupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min age:</span>
                  <span className="font-medium">{safari.minAge}+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best months:</span>
                  <span className="font-medium">
                    {safari.bestMonths.join(", ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariDetail;
