import { Star, Quote, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SafariBuilderModal from "@/components/SafariBuilderModal";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      date: "November 2023",
      rating: 5,
      title: "Absolutely Magical Experience",
      content:
        "Our 7-day Masai Mara and Amboseli safari exceeded every expectation. Joseph, our guide, was incredible - his knowledge of wildlife behavior helped us witness a leopard hunt and the famous river crossing. The accommodations were luxurious yet authentic. This trip changed our lives!",
      safari: "7-Day Masai Mara & Amboseli Luxury Safari",
      verified: true,
      photos: 12,
    },
    {
      id: 2,
      name: "David & Emma Chen",
      location: "London, UK",
      date: "August 2023",
      rating: 5,
      title: "Perfect Family Safari",
      content:
        "Traveled with our two teenagers and couldn't have asked for a better experience. The itinerary was perfectly paced, guides were patient with endless questions, and seeing our kids' faces during their first elephant encounter was priceless. Already planning our return trip!",
      safari: "5-Day Family Adventure Safari",
      verified: true,
      photos: 28,
    },
    {
      id: 3,
      name: "Michael Torres",
      location: "Barcelona, Spain",
      date: "February 2024",
      rating: 5,
      title: "Photography Paradise",
      content:
        "As a professional photographer, I had high expectations. The specialized photography hides and perfectly timed game drives resulted in shots I never imagined possible. The golden hour positioning was masterful. Worth every euro!",
      safari: "10-Day Photography Master Safari",
      verified: true,
      photos: 156,
    },
    {
      id: 4,
      name: "Jennifer & Mark Wilson",
      location: "Sydney, Australia",
      date: "October 2023",
      rating: 5,
      title: "Honeymoon Dreams Come True",
      content:
        "Our honeymoon safari was pure magic. Private vehicle, romantic bush dinners, and incredible wildlife sightings. The hot air balloon ride over the Mara at sunrise was the highlight. Karen Legacy Tours made our dreams come true.",
      safari: "Romantic Couples Safari",
      verified: true,
      photos: 34,
    },
    {
      id: 5,
      name: "Thomas Mueller",
      location: "Munich, Germany",
      date: "July 2023",
      rating: 5,
      title: "Migration Spectacular",
      content:
        "Witnessed the Great Migration at its peak! Thousands of wildebeest crossing the Mara River while crocodiles waited below. Our guide positioned us perfectly for the action. Unbelievable experience that I'll never forget.",
      safari: "Migration Special Safari",
      verified: true,
      photos: 89,
    },
    {
      id: 6,
      name: "Lisa & Robert Kim",
      location: "Seoul, South Korea",
      date: "December 2023",
      rating: 5,
      title: "Cultural Immersion at Its Best",
      content:
        "Beyond amazing wildlife, the cultural experiences with the Maasai community were deeply moving. We learned traditional dances, participated in ceremonies, and gained profound insights into their way of life. Truly transformative.",
      safari: "Cultural & Wildlife Safari",
      verified: true,
      photos: 67,
    },
  ];

  const stats = {
    totalReviews: 847,
    averageRating: 4.9,
    fiveStars: 94,
    fourStars: 5,
    threeStars: 1,
  };

  const platforms = [
    {
      name: "TripAdvisor",
      rating: 4.9,
      reviews: 312,
      badge: "Certificate of Excellence",
    },
    { name: "Google Reviews", rating: 4.8, reviews: 267, badge: "Top Rated" },
    {
      name: "SafariBookings",
      rating: 4.9,
      reviews: 189,
      badge: "Preferred Partner",
    },
    { name: "Trustpilot", rating: 4.7, reviews: 79, badge: "Excellent Rating" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-landscape text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-hero mb-6">What Our Guests Say</h1>
            <p className="text-xl mb-8 opacity-90">
              Real stories from travelers who've experienced the magic of Kenya
              with us
            </p>

            {/* Rating Summary */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold mr-2">
                    {stats.averageRating}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm opacity-80">
                  {stats.totalReviews} reviews across all platforms
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="bg-white/10 backdrop-blur-sm rounded-card p-4"
                  >
                    <div className="font-semibold text-sm">{platform.name}</div>
                    <div className="flex items-center justify-center mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{platform.rating}</span>
                    </div>
                    <div className="text-xs opacity-80">
                      {platform.reviews} reviews
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="group hover:shadow-safari-floating transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {review.verified && (
                        <Badge variant="secondary" className="mr-2 text-xs">
                          Verified
                        </Badge>
                      )}
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-1" />
                    <h4 className="font-semibold text-primary mb-2 ml-6">
                      {review.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-6">
                      {review.content}
                    </p>
                  </div>

                  {/* Safari Info */}
                  <div className="border-t border-border pt-4">
                    <div className="text-xs font-medium text-primary mb-2">
                      Safari Experience:
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {review.safari}
                    </div>

                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{review.date}</span>
                      </div>
                      <span>{review.photos} photos shared</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl mb-4">
              Trusted Across Platforms
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in consistently high
              ratings across all major review platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform) => (
              <Card
                key={platform.name}
                className="text-center hover:shadow-safari-floating transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {platform.name}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xl font-bold">{platform.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {platform.reviews} reviews
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {platform.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied travelers who've experienced the magic of
            Kenya with us
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <SafariBuilderModal>
              <Button size="lg" variant="secondary">
                Plan My Safari
              </Button>
            </SafariBuilderModal>
            
            <Button
              size="lg"
              variant="outline"
              className="text-white bg-white/30 border-white/30 hover:bg-white/10"
            >
              <a href="/safaris">View Safari Packages</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
