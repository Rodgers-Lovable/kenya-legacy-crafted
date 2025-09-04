import {
  CheckCircle,
  Camera,
  Sun,
  Shield,
  Shirt,
  Footprints,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COMPANY_NAME, WHATSAPP_NUMBER } from "@/core/constants/appConstants";
import { Helmet } from "react-helmet-async";

const PackingList = () => {
  const packingCategories = [
    {
      title: "Clothing Essentials",
      icon: <Shirt className="w-6 h-6" />,
      items: [
        {
          item: "Neutral-colored clothing (khaki, olive, brown)",
          essential: true,
        },
        { item: "Long-sleeved shirts for sun protection", essential: true },
        { item: "Lightweight pants for game drives", essential: true },
        { item: "Comfortable walking shorts", essential: false },
        { item: "Light fleece or jacket for early mornings", essential: true },
        { item: "Rain jacket (for rainy seasons)", essential: false },
        { item: "Cotton underwear and socks", essential: true },
        { item: "Sleepwear", essential: true },
      ],
    },
    {
      title: "Footwear",
      icon: <Footprints className="w-6 h-6" />,
      items: [
        { item: "Comfortable walking shoes/boots", essential: true },
        { item: "Sandals for camp/lodge relaxation", essential: true },
        { item: "Flip-flops for showers", essential: false },
        { item: "Gaiters (for walking safaris)", essential: false },
      ],
    },
    {
      title: "Sun Protection",
      icon: <Sun className="w-6 h-6" />,
      items: [
        { item: "Wide-brimmed hat or cap", essential: true },
        { item: "High SPF sunscreen (30+ recommended)", essential: true },
        { item: "Sunglasses with UV protection", essential: true },
        { item: "Lip balm with SPF", essential: true },
        { item: "Neck gaiter or bandana", essential: false },
      ],
    },
    {
      title: "Photography & Electronics",
      icon: <Camera className="w-6 h-6" />,
      items: [
        { item: "Camera with telephoto lens", essential: false },
        { item: "Extra batteries and memory cards", essential: false },
        { item: "Portable power bank", essential: true },
        { item: "Universal travel adapter", essential: true },
        { item: "Binoculars (8x32 or 10x42)", essential: true },
        { item: "Headlamp or flashlight", essential: true },
        { item: "Camera cleaning kit", essential: false },
      ],
    },
    {
      title: "Health & Safety",
      icon: <Shield className="w-6 h-6" />,
      items: [
        { item: "First aid kit basics", essential: true },
        { item: "Insect repellent (DEET recommended)", essential: true },
        { item: "Personal medications", essential: true },
        { item: "Hand sanitizer", essential: true },
        { item: "Wet wipes", essential: true },
        { item: "Malaria prophylaxis (consult doctor)", essential: true },
        { item: "Motion sickness tablets", essential: false },
      ],
    },
    {
      title: "Personal Care",
      icon: <Heart className="w-6 h-6" />,
      items: [
        { item: "Toiletries (biodegradable preferred)", essential: true },
        { item: "Quick-dry towel", essential: true },
        { item: "Toilet paper", essential: true },
        { item: "Feminine hygiene products", essential: false },
        { item: "Razor and shaving cream", essential: false },
      ],
    },
    {
      title: "Travel Essentials",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { item: "Passport and visa", essential: true },
        { item: "Travel insurance documents", essential: true },
        { item: "Vaccination certificates", essential: true },
        { item: "Flight tickets and itinerary", essential: true },
        { item: "Emergency contact information", essential: true },
        { item: "Cash (USD and KES)", essential: true },
        { item: "Credit/debit cards", essential: true },
      ],
    },
  ];

  const seasonalTips = [
    {
      season: "Dry Season (Jun-Oct, Jan-Mar)",
      tips: [
        "Pack warmer layers for early morning game drives",
        "Bring extra dust protection for camera equipment",
        "Light colors help with heat reflection",
      ],
    },
    {
      season: "Wet Season (Apr-May, Nov-Dec)",
      tips: [
        "Waterproof bag for electronics essential",
        "Quick-dry clothing highly recommended",
        "Bring extra socks and underwear",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Packing List | {COMPANY_NAME}</title>
        <meta
          name="description"
          content="Plan your safari with our complete Kenya safari packing list. Discover what clothes, gear, documents, and essentials to bring for a comfortable and safe safari."
        />
        <meta
          name="keywords"
          content="Kenya safari packing list, what to pack for safari, safari essentials, safari clothing, safari gear checklist"
        />
        <meta
          property="og:title"
          content="Kenya Safari Packing List | What to Pack for Your Safari"
        />
        <meta
          property="og:description"
          content="From clothing to photography gear, find out everything you need to pack for your Kenya safari adventure in Maasai Mara, Amboseli, Tsavo, and beyond."
        />
        <meta property="og:image" content="/images/seo/packing-list.jpg" />
        <meta
          property="og:url"
          content="https://karenlegacytoursandsafaris.com/packing-list"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://karenlegacytoursandsafaris.com/packing-list"
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-landscape text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h1 className="font-display text-hero mb-6">
                Complete Safari Packing List
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Everything you need for your Kenya safari adventure. Pack smart,
                travel light, experience more.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Printable Checklist
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Zap className="w-4 h-4 mr-1" />
                  Essential vs Optional
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Sun className="w-4 h-4 mr-1" />
                  Season-Specific Tips
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Packing Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8">
                {packingCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-safari-floating transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      {/* Category Header */}
                      <div className="flex items-center space-x-3 p-6 border-b border-border bg-muted/20">
                        <div className="text-primary">{category.icon}</div>
                        <h2 className="font-display text-xl font-semibold">
                          {category.title}
                        </h2>
                      </div>

                      {/* Items Grid */}
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-3">
                          {category.items.map((entry, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center space-x-3 p-3 rounded-card hover:bg-muted/30 transition-safari"
                            >
                              <CheckCircle
                                className={`w-5 h-5 ${
                                  entry.essential
                                    ? "text-safari-green"
                                    : "text-muted-foreground"
                                }`}
                              />
                              <span
                                className={`flex-1 ${
                                  entry.essential ? "font-medium" : ""
                                }`}
                              >
                                {entry.item}
                              </span>
                              {entry.essential && (
                                <Badge variant="secondary" className="text-xs">
                                  Essential
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Tips */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl text-center mb-12">
                Seasonal Packing Tips
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {seasonalTips.map((season, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-safari-floating transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-semibold mb-4 text-primary">
                        {season.season}
                      </h3>
                      <ul className="space-y-2">
                        {season.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-safari-green mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-gradient-landscape text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl mb-4">Ready to Pack?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get our printable packing checklist and start preparing for your
                safari adventure.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-safari-charcoal font-semibold rounded-card hover:bg-white/90 transition-safari"
                >
                  Plan My Safari
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-card hover:bg-white/30 transition-safari border border-white/30"
                >
                  Ask Packing Questions
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PackingList;
