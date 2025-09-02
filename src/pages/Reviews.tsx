import { Star, Quote, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SafariBuilderModal from "@/components/SafariBuilderModal";
import { testimonials, platformRatings, trustStats } from "@/core/data/testimonials";

const Reviews = () => {
  const reviews = testimonials;
  const stats = trustStats;
  const platforms = platformRatings;

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
