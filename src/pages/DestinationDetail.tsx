import { useParams } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Camera,
  Users,
  Star,
  ArrowRight,
  Clock,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SafariBuilderModal from "@/components/SafariBuilderModal";
import { COMPANY_NAME, WHATSAPP_NUMBER } from "@/core/constants/appConstants";
import { Helmet } from "react-helmet-async";

const DestinationDetail = () => {
  // Mock data - in a real app, this would come from CMS/API
  const destination = {
    name: "Masai Mara National Reserve",
    description:
      "Kenya's most famous safari destination, the Masai Mara is renowned for its exceptional wildlife and the annual Great Migration. This vast savannah ecosystem offers unparalleled game viewing opportunities and authentic cultural experiences with the Maasai people.",
    region: "Rift Valley Province",
    area: "1,510 km²",
    established: "1961",
    elevation: "1,500-2,180m above sea level",

    hero: {
      image: "/api/placeholder/1200/600",
      video: null,
    },

    gallery: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],

    highlights: [
      "Great Migration (July-October)",
      "Big Five wildlife viewing",
      "Hot air balloon safaris",
      "Maasai cultural experiences",
      "Mara River crossings",
      "Photography opportunities",
    ],

    wildlife: {
      bigFive: [
        "African Lion",
        "African Elephant",
        "Cape Buffalo",
        "Leopard",
        "Black Rhino",
      ],
      signature: ["Wildebeest", "Zebra", "Cheetah", "Spotted Hyena", "Giraffe"],
      birds: [
        "Secretary Bird",
        "Lilac-breasted Roller",
        "Saddle-billed Stork",
        "Marabou Stork",
      ],
      seasonal: ["Wildebeest Migration", "River Crossings", "Calving Season"],
    },

    bestTimes: {
      migration: {
        period: "July - October",
        description:
          "Peak migration season with river crossings and massive herds",
      },
      dryseason: {
        period: "June - October & January - March",
        description:
          "Excellent game viewing with animals concentrated around water sources",
      },
      calving: {
        period: "January - March",
        description:
          "Wildebeest calving season in southern Serengeti, great for predator action",
      },
    },

    monthlyGuide: [
      {
        month: "Jan",
        wildlife: "Excellent",
        weather: "Dry",
        migration: "Calving",
        rating: 4,
      },
      {
        month: "Feb",
        wildlife: "Excellent",
        weather: "Dry",
        migration: "Calving",
        rating: 5,
      },
      {
        month: "Mar",
        wildlife: "Very Good",
        weather: "Light Rains",
        migration: "Moving North",
        rating: 4,
      },
      {
        month: "Apr",
        wildlife: "Good",
        weather: "Rainy",
        migration: "Not Present",
        rating: 3,
      },
      {
        month: "May",
        wildlife: "Good",
        weather: "Rainy",
        migration: "Not Present",
        rating: 3,
      },
      {
        month: "Jun",
        wildlife: "Very Good",
        weather: "Dry",
        migration: "Arriving",
        rating: 4,
      },
      {
        month: "Jul",
        wildlife: "Excellent",
        weather: "Dry",
        migration: "Peak Season",
        rating: 5,
      },
      {
        month: "Aug",
        wildlife: "Excellent",
        weather: "Dry",
        migration: "Peak Season",
        rating: 5,
      },
      {
        month: "Sep",
        wildlife: "Excellent",
        weather: "Dry",
        migration: "Peak Season",
        rating: 5,
      },
      {
        month: "Oct",
        wildlife: "Very Good",
        weather: "Dry",
        migration: "Departing",
        rating: 4,
      },
      {
        month: "Nov",
        wildlife: "Good",
        weather: "Light Rains",
        migration: "Not Present",
        rating: 3,
      },
      {
        month: "Dec",
        wildlife: "Good",
        weather: "Dry",
        migration: "Not Present",
        rating: 3,
      },
    ],

    safaris: [
      {
        title: "7-Day Masai Mara Luxury Safari",
        duration: 7,
        price: "From $3,500",
        rating: 4.9,
        image: "/api/placeholder/400/300",
      },
      {
        title: "5-Day Migration Safari",
        duration: 5,
        price: "From $2,800",
        rating: 4.8,
        image: "/api/placeholder/400/300",
      },
      {
        title: "3-Day Mara Fly-in Safari",
        duration: 3,
        price: "From $1,900",
        rating: 4.7,
        image: "/api/placeholder/400/300",
      },
    ],

    guides: [
      {
        title: "Best Time to Visit Masai Mara",
        category: "Planning",
        readTime: "8 min read",
        excerpt:
          "Complete guide to choosing the perfect time for your Mara safari based on migration, weather, and wildlife.",
      },
      {
        title: "Great Migration Guide",
        category: "Wildlife",
        readTime: "12 min read",
        excerpt:
          "Everything you need to know about witnessing the world's greatest wildlife spectacle.",
      },
      {
        title: "Masai Mara Photography Tips",
        category: "Photography",
        readTime: "10 min read",
        excerpt:
          "Expert tips for capturing stunning wildlife photos in the Mara's golden light.",
      },
    ],

    practicalInfo: {
      gettingThere: [
        "Fly to Nairobi (NBO) then domestic flight to Mara airstrips",
        "Drive from Nairobi (5-6 hours via Narok route)",
        "Scheduled flights from Wilson Airport (45 minutes)",
      ],
      accommodation: [
        "Luxury safari camps and lodges",
        "Mid-range tented camps",
        "Budget campsites and basic lodges",
      ],
      activities: [
        "Game drives (morning and evening)",
        "Hot air balloon safaris",
        "Maasai village visits",
        "Nature walks (where permitted)",
        "Photography workshops",
      ],
    },
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>{destination.name} | {COMPANY_NAME}</title>
        <meta
          name="description"
          content="Learn about our Kenya safari company, our passion for wildlife, and commitment to delivering luxury safari experiences across Maasai Mara, Amboseli, Tsavo & more."
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={destination.hero.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white max-w-2xl">
            <Badge className="mb-4">{destination.region}</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {destination.name}
            </h1>
            <p className="text-lg opacity-90">{destination.description}</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Facts */}
              <section>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">{destination.area}</p>
                    <p className="text-sm text-muted-foreground">Total Area</p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">{destination.established}</p>
                    <p className="text-sm text-muted-foreground">Established</p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <Camera className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">{destination.elevation}</p>
                    <p className="text-sm text-muted-foreground">Elevation</p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">{destination.safaris.length}+</p>
                    <p className="text-sm text-muted-foreground">
                      Safari Options
                    </p>
                  </div>
                </div>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                  Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Wildlife & Best Times */}
              <section>
                <Tabs defaultValue="wildlife" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
                    <TabsTrigger value="when-to-visit">
                      When to Visit
                    </TabsTrigger>
                    <TabsTrigger value="monthly-guide">
                      Monthly Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="wildlife" className="space-y-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-border">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            The Big Five
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {destination.wildlife.bigFive.map(
                              (animal, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  {animal}
                                </li>
                              )
                            )}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-border">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Signature Species
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {destination.wildlife.signature.map(
                              (animal, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  {animal}
                                </li>
                              )
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="when-to-visit" className="space-y-6 mt-6">
                    {Object.entries(destination.bestTimes).map(
                      ([key, period]) => (
                        <Card key={key} className="border-border">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-primary" />
                              {period.period}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">
                              {period.description}
                            </p>
                          </CardContent>
                        </Card>
                      )
                    )}
                  </TabsContent>

                  <TabsContent value="monthly-guide" className="mt-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {destination.monthlyGuide.map((month) => (
                        <Card key={month.month} className="border-border">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">
                                {month.month}
                              </CardTitle>
                              <div className="flex">
                                {getRatingStars(month.rating)}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Wildlife:
                                </span>
                                <span className="font-medium">
                                  {month.wildlife}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Weather:
                                </span>
                                <span className="font-medium">
                                  {month.weather}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Migration:
                                </span>
                                <span className="font-medium">
                                  {month.migration}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Safari Options */}
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                  Featured Safaris
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.safaris.map((safari, index) => (
                    <Card
                      key={index}
                      className="border-border hover:shadow-lg transition-safari"
                    >
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img
                          src={safari.image}
                          alt={safari.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">
                            {safari.duration} Days
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{safari.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">
                          {safari.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-primary">
                            {safari.price}
                          </p>
                          <Button size="sm" asChild>
                            <a
                              href="/safaris"
                              className="flex items-center gap-1"
                            >
                              View <ArrowRight className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Travel Guides */}
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                  Planning Guides
                </h2>
                <div className="space-y-4">
                  {destination.guides.map((guide, index) => (
                    <Card
                      key={index}
                      className="border-border hover:shadow-lg transition-safari"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg mb-1">
                              {guide.title}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <Badge variant="secondary">
                                {guide.category}
                              </Badge>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {guide.readTime}
                              </span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <a href="/guides">Read</a>
                          </Button>
                        </div>
                        <CardDescription>{guide.excerpt}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="border-border sticky top-24">
                <CardHeader>
                  <CardTitle className="text-center">Plan Your Visit</CardTitle>
                  <CardDescription className="text-center">
                    Ready to explore {destination.name}?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SafariBuilderModal>
                    <Button size="lg" className="w-full">
                      Plan My Safari
                    </Button>
                  </SafariBuilderModal>

                  <Button variant="outline" className="w-full" asChild>
                    <a href="/safaris">Browse Safaris</a>
                  </Button>

                  <Button variant="ghost" className="w-full" asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like information about Masai Mara safaris`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Practical Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Practical Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Getting There:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {destination.practicalInfo.gettingThere.map(
                        (item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Accommodation:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {destination.practicalInfo.accommodation.map(
                        (item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Activities:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {destination.practicalInfo.activities.map(
                        (item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationDetail;
