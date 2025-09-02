import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHomepage from "@/assets/hero-homepage.jpg";
import wildlifeAdventures from "@/assets/wildlife-adventures.jpg";
import scenicEscapes from "@/assets/scenic-escapes.jpg";
import culturalJourneys from "@/assets/cultural-journeys.jpg";
import SafariBuilderModal from "./SafariBuilderModal";

interface HeroCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  action: string;
}

const heroCards: HeroCard[] = [
  {
    id: "wildlife",
    title: "Wildlife Adventures",
    subtitle: "Big Five & Beyond",
    description:
      "Witness lions hunting at dawn, elephants at watering holes, and the Great Migration's thunderous spectacle.",
    image: wildlifeAdventures,
    action: "Explore",
  },
  {
    id: "scenic",
    title: "Scenic Escapes",
    subtitle: "Breathtaking Landscapes",
    description:
      "From Kilimanjaro's snow-capped peaks to Rift Valley's dramatic escarpments and pristine beaches.",
    image: scenicEscapes,
    action: "Discover",
  },
  {
    id: "cultural",
    title: "Cultural Journeys",
    subtitle: "Authentic Encounters",
    description:
      "Connect with Maasai warriors, learn ancient traditions, and experience Kenya's rich cultural heritage.",
    image: culturalJourneys,
    action: "Meet",
  },
];

const InteractiveHero = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (cardId: string) => {
    if (selectedCard === cardId) {
      setIsExpanded(!isExpanded);
    } else {
      setSelectedCard(cardId);
      setIsExpanded(true);
    }
  };

  const selectedCardData = heroCards.find((card) => card.id === selectedCard);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroHomepage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="font-display text-hero text-white mb-6 animate-safari-fade-in leading-tight">
            Experience Kenya's
            <br />
            <span className="text-safari-golden font-highlight italic">
              Untamed Wilderness
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-safari-fade-in font-body">
            Tailor-made safari experiences crafted by local Kenyan experts
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {heroCards.map((card, index) => (
            <div
              key={card.id}
              className={`safari-image-card group relative overflow-hidden rounded-hero cursor-pointer transition-spring transform hover-scale animate-safari-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Card Image */}
              <div className="aspect-[4/5] relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-spring group-hover:scale-110"
                />
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90"></div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl mb-2">{card.title}</h3>
                <p className="text-safari-golden font-semibold mb-2 font-body">
                  {card.subtitle}
                </p>
                <p className="text-sm text-white/80 mb-4 line-clamp-2 font-body">
                  {card.description}
                </p>

                <Button
                  variant="safari"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-safari"
                >
                  {card.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Selection Indicator */}
              {selectedCard === card.id && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-safari-golden rounded-full animate-pulse shadow-lg"></div>
              )}
            </div>
          ))}
        </div>

        {/* Expanded Content */}
        {selectedCardData && isExpanded && (
          <div className="mt-12 max-w-4xl mx-auto animate-safari-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-hero p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-display text-3xl text-white mb-4">
                    {selectedCardData.title}
                  </h2>
                  <p className="text-safari-golden text-lg font-semibold mb-4 font-body">
                    {selectedCardData.subtitle}
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed font-body">
                    {selectedCardData.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* <Button variant="default" size="lg" className="hover-glow">
                      {selectedCardData.action}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button> */}
                    <SafariBuilderModal>
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-white bg-white/30 border-white/30 hover:bg-white/10 hover-glow"
                      >
                        Plan Custom Safari
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </SafariBuilderModal>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={selectedCardData.image}
                    alt={selectedCardData.title}
                    className="w-full h-64 object-cover rounded-card"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-safari-golden to-transparent rounded-full shadow-lg"></div>
      </div>
    </section>
  );
};

export default InteractiveHero;
