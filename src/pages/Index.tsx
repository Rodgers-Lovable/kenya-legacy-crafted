import InteractiveHero from "@/components/InteractiveHero";
import SafariBuilder from "@/components/SafariBuilder";
import TrustSection from "@/components/TrustSection";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import { ArrowRight, Play, Download, Calendar, MapPin, Clock, Camera, Users, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const journeyStory = [
    {
      time: "5:30 AM",
      title: "Dawn Drive",
      description: "As the sun paints the savanna golden, your private vehicle sets out into the awakening wilderness.",
      image: "linear-gradient(135deg, #CFA34B, #EFE8DD)"
    },
    {
      time: "8:00 AM", 
      title: "Bush Breakfast",
      description: "Dine under an acacia tree while elephants graze nearby, the perfect start to your adventure.",
      image: "linear-gradient(135deg, #2E4A29, #CFA34B)"
    },
    {
      time: "6:00 AM",
      title: "Balloon Flight",
      description: "Drift silently over the Mara as herds move like rivers across the endless plains below.",
      image: "linear-gradient(135deg, #1B1B1B, #CFA34B)"
    },
    {
      time: "6:30 PM",
      title: "Sundowners",
      description: "Toast to the day's discoveries as the African sunset transforms the sky into living art.",
      image: "linear-gradient(135deg, #CFA34B, #1B1B1B)"
    }
  ];

  const destinations = [
    {
      name: "Masai Mara",
      subtitle: "The Great Migration",
      bestMonths: "Jul-Oct",
      highlights: ["Big Five", "Migration", "Maasai Culture"],
      description: "Kenya's most famous reserve, home to the dramatic river crossings.",
      image: "linear-gradient(135deg, #CFA34B, #2E4A29)"
    },
    {
      name: "Amboseli",
      subtitle: "Elephant Paradise", 
      bestMonths: "Jun-Oct, Jan-Mar",
      highlights: ["Elephants", "Mt. Kilimanjaro Views", "Birdlife"],
      description: "Iconic elephants against Kilimanjaro's snow-capped backdrop.",
      image: "linear-gradient(135deg, #EFE8DD, #1B1B1B)"
    },
    {
      name: "Samburu",
      subtitle: "Unique Wildlife",
      bestMonths: "Jun-Oct",
      highlights: ["Special Five", "Cultural Tours", "Rare Species"],
      description: "Home to species found nowhere else: Grevy's zebra, reticulated giraffe.",
      image: "linear-gradient(135deg, #2E4A29, #CFA34B)"
    },
    {
      name: "Tsavo",
      subtitle: "Wilderness Adventure",
      bestMonths: "May-Oct",
      highlights: ["Red Elephants", "Mzima Springs", "Vast Landscapes"],
      description: "Kenya's largest park, famous for red dust elephants and endless horizons.",
      image: "linear-gradient(135deg, #CFA34B, #EFE8DD)"
    }
  ];

  const guides = [
    {
      title: "Ultimate Kenya Safari Planning Guide",
      category: "Planning",
      readTime: "15 min read",
      description: "Everything you need to know for your first Kenya safari, from best times to visit to what to pack.",
      featured: true
    },
    {
      title: "Great Migration Calendar: When & Where",
      category: "Wildlife",
      readTime: "8 min read", 
      description: "Month-by-month guide to following the wildebeest migration across East Africa."
    },
    {
      title: "Safari Photography: Pro Tips from Kenya",
      category: "Photography",
      readTime: "12 min read",
      description: "Master the art of wildlife photography with insider tips from professional safari guides."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Interactive Hero */}
      <InteractiveHero />

      {/* Safari Builder */}
      <SafariBuilder />

      {/* Journey Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-display mb-4">A Day in Your Safari Story</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every moment carefully orchestrated, from first light to evening's embrace
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeyStory.map((moment, index) => (
                <div key={index} className="relative group">
                  <div 
                    className="aspect-[3/4] rounded-hero mb-6 relative overflow-hidden"
                    style={{ background: moment.image }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-safari-charcoal">
                      {moment.time}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-2">{moment.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{moment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <TrustSection />

      {/* Featured Experiences */}
      <FeaturedExperiences />

      {/* Destinations Mosaic */}
      <section className="py-20 bg-gradient-landscape">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-display mb-4">Discover Kenya's Wild Heart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From the legendary Masai Mara to hidden gems, explore diverse ecosystems 
              that make Kenya the ultimate safari destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {destinations.map((destination, index) => (
              <div key={index} className="group safari-card overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className={`aspect-square rounded-card relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div 
                      className="w-full h-full rounded-card relative overflow-hidden"
                      style={{ background: destination.image }}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs bg-white/90 text-safari-charcoal">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div>
                      <h3 className="font-display text-2xl mb-1">{destination.name}</h3>
                      <p className="text-primary font-semibold">{destination.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Best: {destination.bestMonths}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                      <Button size="sm">
                        View Safaris
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Hub Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-display mb-4">Safari Wisdom & Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides, insider tips, and everything you need to know for the perfect Kenya safari
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guides.map((guide, index) => (
              <Card key={index} className={`group hover:shadow-safari-floating transition-all duration-300 ${guide.featured ? 'md:col-span-3 lg:col-span-1' : ''}`}>
                <CardContent className="p-6">
                  {guide.featured && (
                    <Badge className="mb-4">Featured Guide</Badge>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{guide.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-safari">
                    {guide.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Browse All Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-sunset">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="font-display text-3xl text-white mb-4">
              Get Your Free Kenya Safari Planning Guide
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              30-page comprehensive guide with insider tips, packing lists, 
              best times to visit, and exclusive itinerary recommendations.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-card bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg" className="whitespace-nowrap">
                Download Free Guide
              </Button>
            </div>
            
            <div className="text-sm text-white/70">
              ✓ Instant download • ✓ No spam • ✓ Used by 10,000+ travelers
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-safari-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display mb-6">
              Ready for Your Kenya Adventure?
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let our local experts craft a personalized safari experience 
              that exceeds your wildest dreams. Every detail handled, every moment unforgettable.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" variant="default" className="text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Plan My Safari
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold">Expert Local Guides</div>
                <div className="text-sm text-white/70">Licensed & experienced</div>
              </div>
              <div>
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold">Tailored Experiences</div>
                <div className="text-sm text-white/70">Crafted just for you</div>
              </div>
              <div>
                <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold">Unforgettable Moments</div>
                <div className="text-sm text-white/70">Memories to last a lifetime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;