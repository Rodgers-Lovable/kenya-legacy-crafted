import { ArrowRight, Clock, Users, Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SafariBuilderModal from "@/components/SafariBuilderModal";
import MaasaiMara from "@/assets/images/maasai-mara.jpg";
import SafariPhotography from "@/assets/images/safari-photography.jpg";
import FamilyAdventure from "@/assets/images/family-safari.jpg";
import { safaris } from "@/core/data/safaris";

const FeaturedExperiences = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-display mb-4">
            Featured Safari Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted journeys showcasing Kenya's incredible diversity,
            from the legendary Maasai Mara to the majestic Mount Kilimanjaro
            views.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {safaris.slice(0, 3).map((experience, index) => (
            <div
              key={experience.id}
              className="group safari-card overflow-hidden animate-safari-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div
                style={{
                  backgroundImage: `url(${experience.image})`,
                  backgroundSize: "cover",
                }}
                className="relative aspect-[4/3] overflow-hidden rounded-card mb-6"
              >
                <div className="w-full h-full bg-gradient-to-br from-safari-sand to-safari-ochre/20 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-safari-ochre/50" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <a href={`/safaris/${experience.slug}`}>View Details</a>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold leading-tight">
                  {experience.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{experience.groupSize}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {experience.style}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {experience.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">
                    Highlights:
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Heart className="w-3 h-3 text-primary fill-current" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/safaris/${experience.slug}`}>Learn More</a>
                  </Button>
                  <SafariBuilderModal
                    preselectedPackage={{
                      title: experience.title,
                      duration: `${experience.duration} Days`,
                      style: experience.style,
                    }}
                  >
                    <Button size="sm">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </SafariBuilderModal>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="mr-4" asChild>
            <a href="/safaris">View All Safaris</a>
          </Button>
          <SafariBuilderModal>
            <Button size="lg">
              Create Custom Safari
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </SafariBuilderModal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
