import { useParams, Navigate } from "react-router-dom";
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
import { safaris } from "@/core/data/safaris";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "@/core/constants/appConstants";

const SafariDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Find safari based on slug
  const safari = safaris.find((s) => s.slug === slug);

  // Redirect to 404 if safari not found
  if (!safari) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>
          {safari.title} | {COMPANY_NAME}
        </title>
      </Helmet>
      
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={safari.images ? safari.images[selectedImage] : safari.image}
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
                <span>{safari.destinations[0]}</span>
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
              {safari.images ? (
                safari.images.map((image, index) => (
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
                ))
              ) : (
                <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden ring-2 ring-primary">
                  <img
                    src={safari.image}
                    alt="Safari"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
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
                        {safari.bestMonths
                          ? safari.bestMonths.join(", ")
                          : "Year round"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">Group Size</p>
                      <p className="text-muted-foreground">
                        Max {safari.maxGroupSize || safari.groupSize} people
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
                        {safari.minAge || 6}+ years
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Itinerary */}
              {safari.itinerary && (
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
                                {day.meals?.map((meal, i) => (
                                  <li key={i}>{meal}</li>
                                )) || <li>As specified</li>}
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
                                {day.activities?.map((activity, i) => (
                                  <li key={i}>{activity}</li>
                                )) || <li>Game drives</li>}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )}

              {/* Accommodations */}
              {safari.accommodations && (
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
                            {acc.amenities?.map((amenity, i) => (
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
              )}

              {/* Inclusions & Exclusions */}
              {(safari.inclusions || safari.exclusions) && (
                <section>
                  <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                    What's Included
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {safari.inclusions && (
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
                    )}

                    {safari.exclusions && (
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
                    )}
                  </div>
                </section>
              )}
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
                      {safari.priceDetails || "per person sharing"}
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
                      href={`https://wa.me/254700000000?text=Hi! I'm interested in the ${safari.title}`}
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
                    <span className="font-medium">
                      Max {safari.maxGroupSize || safari.groupSize}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min age:</span>
                    <span className="font-medium">
                      {safari.minAge || 6}+ years
                    </span>
                  </div>
                  {safari.bestMonths && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Best months:
                      </span>
                      <span className="font-medium">
                        {safari.bestMonths.join(", ")}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafariDetail;
