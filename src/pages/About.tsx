import { Users, Award, Heart, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_NUMBER } from "@/core/constants/appConstants";

const About = () => {
  const team = [
    {
      name: "David Kimani",
      role: "Founder & Lead Guide",
      image: "/api/placeholder/400/400",
      bio: "Born and raised in Kenya, David has over 15 years of experience guiding safari adventures across East Africa.",
    },
    {
      name: "Sarah Mitchell",
      role: "Operations Director",
      image: "/api/placeholder/400/400",
      bio: "Former hospitality executive from London, Sarah ensures every safari exceeds expectations with meticulous planning.",
    },
    {
      name: "James Mwangi",
      role: "Wildlife Expert Guide",
      image: "/api/placeholder/400/400",
      bio: "Conservation biologist and expert tracker, James brings deep wildlife knowledge to every safari experience.",
    },
  ];

  const certifications = [
    "Kenya Association of Tour Operators (KATO)",
    "TripAdvisor Certificate of Excellence",
    "SafariBookings Certified Operator",
    "Travelife Sustainability Certification",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-sunset flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Born in Kenya, crafting unforgettable safari experiences for global
            adventurers since 2009
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Story Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
            Rooted in Kenya, Trusted Worldwide
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Karen Legacy Tours & Safaris was founded with a simple mission: to
              share the raw beauty and untamed spirit of Kenya with travelers
              who seek authentic, transformative experiences.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What started as a small family business has grown into a trusted
              operator, but we've never lost sight of our core values: respect
              for wildlife, support for local communities, and creating
              once-in-a-lifetime memories for our guests.
            </p>
            <p className="text-lg leading-relaxed">
              Every safari we craft tells a story - of majestic landscapes,
              incredible wildlife encounters, and the warm hospitality that
              Kenya is known for. We don't just show you Kenya; we help you feel
              its heartbeat.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="font-display text-4xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-display text-xl">
                  Conservation First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to responsible tourism that protects Kenya's
                  wildlife and ecosystems for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-display text-xl">
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every safari supports local communities through employment,
                  partnerships, and sustainable tourism practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-display text-xl">
                  Authentic Experiences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We craft genuine, personalized adventures that go beyond
                  typical tourist experiences to create lasting memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="font-display text-4xl font-bold text-center mb-12 text-foreground">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border bg-card text-center">
                <CardHeader>
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-display text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Certified & Trusted
            </h2>
            <p className="text-muted-foreground mt-4">
              Our certifications and partnerships ensure the highest standards
              of service and safety
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-sunset rounded-2xl p-12 text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Experience Kenya?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our expert team craft your perfect safari adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-foreground px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-safari"
            >
              Plan My Safari
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
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

export default About;
