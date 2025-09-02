import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  Shield,
  Camera,
  MapPin,
  Calendar,
  Users,
  MessageCircle,
} from "lucide-react";
import { faqCategories } from "@/core/data/faqs";
import SafariBuilderModal from "@/components/SafariBuilderModal";
import { WHATSAPP_NUMBER } from "@/core/constants/appConstants";

const FAQ = () => {
  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Happy Guests",
      value: "2,500+",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Destinations",
      value: "12+",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Safety Record",
      value: "100%",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      label: "Wildlife Species",
      value: "500+",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-landscape text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="font-display text-hero mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Everything you need to know about planning your Kenya safari
              adventure
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center"
                >
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <Card
                key={category.id}
                className="mb-8 hover:shadow-safari-floating transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 p-6 border-b border-border bg-muted/20">
                    <div className="text-primary">{category.icon}</div>
                    <h2 className="font-display text-xl font-semibold">
                      {category.title}
                    </h2>
                  </div>

                  {/* FAQs */}
                  <div className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${category.id}-${faqIndex}`}
                          className="border border-border rounded-card px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our safari experts are here to help you plan the perfect Kenya
              adventure. Get in touch and we'll respond within 24 hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center hover:shadow-safari-floating transition-all duration-300">
                <CardContent className="p-6">
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">WhatsApp Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Instant responses from our team
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-safari-floating transition-all duration-300">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Plan My Safari</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Personalized consultation
                  </p>
                  <SafariBuilderModal>
                    <Button size="sm" variant="outline">
                      Get Started
                    </Button>
                  </SafariBuilderModal>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-safari-floating transition-all duration-300">
                <CardContent className="p-6">
                  <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Contact Form</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed inquiries welcome
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <SafariBuilderModal>
                <Button size="lg">Plan My Safari</Button>
              </SafariBuilderModal>

              <Button size="lg" variant="outline">
                <a href="/safaris">View Safari Packages</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
