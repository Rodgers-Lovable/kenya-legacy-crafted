import { Star, Shield, Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { testimonials, trustStats } from "@/core/data/testimonials";

const TrustSection = () => {
  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: "TripAdvisor Rating",
      sublabel: "Based on 312 reviews",
    },
    {
      icon: Users,
      value: `${trustStats.happyTravelers}+`,
      label: "Happy Travelers",
      sublabel: "Since 2015",
    },
    {
      icon: Shield,
      value: `${trustStats.safetyRecord}%`,
      label: "Safety Record",
      sublabel: "Licensed & Insured",
    },
    {
      icon: Award,
      value: `${trustStats.industryAwards}+`,
      label: "Industry Awards",
      sublabel: "Excellence Recognition",
    },
  ];

  const certifications = [
    { name: "KATO", desc: "Kenya Association of Tour Operators" },
    { name: "SafariBookings", desc: "Verified Safari Operator" },
    { name: "TripAdvisor", desc: "Certificate of Excellence" },
    { name: "IATA", desc: "International Air Transport Association" },
  ];

  return (
    <section className="py-20 bg-gradient-landscape">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="font-display text-2xl mb-8">Trusted & Certified</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm"
              >
                <div className="text-center">
                  <div className="font-semibold">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {cert.desc}
                  </div>
                </div>
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-3xl text-center mb-12">
            What Our Travelers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div key={index} className="safari-card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
