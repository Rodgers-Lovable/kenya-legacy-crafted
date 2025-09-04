import {
  FileText,
  Shield,
  Syringe,
  CreditCard,
  Plane,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Info,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME, WHATSAPP_NUMBER } from "@/core/constants/appConstants";
import { Helmet } from "react-helmet-async";

const SafariPreparation = () => {
  const preparationSteps = [
    {
      title: "Visa & Documentation",
      icon: <FileText className="w-6 h-6" />,
      timeline: "6-8 weeks before travel",
      priority: "Critical",
      items: [
        {
          task: "Apply for Kenya eVisa online",
          description: "Visit evisa.go.ke - Processing takes 2-7 business days",
          cost: "USD $51 for tourist visa (90 days)",
          required: true,
        },
        {
          task: "Passport validity check",
          description: "Must be valid for at least 6 months from entry date",
          cost: "Renewal varies by country",
          required: true,
        },
        {
          task: "Travel insurance",
          description: "Comprehensive coverage including medical evacuation",
          cost: "Varies by provider and coverage",
          required: true,
        },
        {
          task: "Flight bookings",
          description:
            "Book international flights to Jomo Kenyatta International (NBO)",
          cost: "Varies by season and origin",
          required: true,
        },
      ],
    },
    {
      title: "Health & Vaccinations",
      icon: <Syringe className="w-6 h-6" />,
      timeline: "4-6 weeks before travel",
      priority: "Critical",
      items: [
        {
          task: "Yellow Fever vaccination",
          description:
            "Required if coming from endemic areas, recommended for all",
          cost: "USD $150-300",
          required: true,
        },
        {
          task: "Malaria prophylaxis consultation",
          description:
            "Consult travel medicine doctor for appropriate medication",
          cost: "USD $50-150 + medication",
          required: true,
        },
        {
          task: "Routine vaccinations update",
          description: "Hepatitis A/B, Typhoid, MMR, DPT, Polio",
          cost: "Varies by vaccination",
          required: true,
        },
        {
          task: "Travel health consultation",
          description: "Visit travel clinic or tropical medicine specialist",
          cost: "USD $100-200",
          required: false,
        },
      ],
    },
    {
      title: "Financial Planning",
      icon: <CreditCard className="w-6 h-6" />,
      timeline: "2-4 weeks before travel",
      priority: "Important",
      items: [
        {
          task: "Notify banks of travel",
          description: "Prevent card blocks in Kenya",
          cost: "Free",
          required: true,
        },
        {
          task: "Get cash (USD & KES)",
          description: "USD for tips, KES for local purchases",
          cost: "Exchange rate dependent",
          required: true,
        },
        {
          task: "Travel credit cards",
          description: "Cards with no foreign transaction fees",
          cost: "Varies by card",
          required: false,
        },
        {
          task: "Budget planning",
          description: "Tips, souvenirs, drinks, activities",
          cost: "USD $20-50 per day",
          required: false,
        },
      ],
    },
    {
      title: "Travel Logistics",
      icon: <Plane className="w-6 h-6" />,
      timeline: "1-2 weeks before travel",
      priority: "Important",
      items: [
        {
          task: "Confirm safari bookings",
          description: "Reconfirm all accommodations and transfers",
          cost: "Free",
          required: true,
        },
        {
          task: "Pack according to checklist",
          description: "Neutral colors, layers, sun protection",
          cost: "Varies",
          required: true,
        },
        {
          task: "Download offline maps",
          description: "Kenya maps for navigation backup",
          cost: "Free",
          required: false,
        },
        {
          task: "Emergency contacts list",
          description: "Embassy, insurance, tour operator",
          cost: "Free",
          required: true,
        },
      ],
    },
  ];

  const healthTips = [
    {
      category: "Malaria Prevention",
      icon: <Shield className="w-5 h-5" />,
      tips: [
        "Take prophylaxis as prescribed (start before travel)",
        "Use DEET insect repellent (20-30% concentration)",
        "Wear long sleeves and pants during dawn/dusk",
        "Sleep under nets (provided in all accommodations)",
      ],
    },
    {
      category: "Food & Water Safety",
      icon: <AlertTriangle className="w-5 h-5" />,
      tips: [
        "Drink bottled or properly treated water",
        "Avoid ice in drinks unless from trusted sources",
        "Eat hot, freshly cooked foods",
        "Avoid raw vegetables and fruits you can't peel",
      ],
    },
    {
      category: "Sun Protection",
      icon: <Shield className="w-5 h-5" />,
      tips: [
        "Use SPF 30+ sunscreen, reapply frequently",
        "Wear wide-brimmed hat and UV sunglasses",
        "Stay hydrated - drink 3-4 liters water daily",
        "Seek shade during peak sun hours (10am-4pm)",
      ],
    },
  ];

  const budgetGuidelines = [
    {
      category: "Guide & Driver Tips",
      amount: "USD $15-25 per person per day",
      frequency: "Daily",
    },
    {
      category: "Camp/Lodge Staff Tips",
      amount: "USD $10-15 per person per day",
      frequency: "End of stay",
    },
    {
      category: "Balloon Safari Tips",
      amount: "USD $20-30 per person",
      frequency: "Per experience",
    },
    {
      category: "Souvenirs & Shopping",
      amount: "USD $50-200 per person",
      frequency: "Trip total",
    },
    {
      category: "Drinks & Extras",
      amount: "USD $15-30 per person per day",
      frequency: "Daily",
    },
  ];

  return (
    <>
      {" "}
      <Helmet>
        <title>
          Safari Preparation Guide | {COMPANY_NAME}
        </title>
      </Helmet>{" "}
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-landscape text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Calendar className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h1 className="font-display text-hero mb-6">
                Safari Preparation Guide
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Complete step-by-step preparation guide for your Kenya safari.
                Health, visas, packing, and insider tips.
              </p>

              <Alert className="bg-white/10 border-white/20 text-white max-w-2xl mx-auto">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Start planning 6-8 weeks before travel for a stress-free
                  experience. Some requirements may take time to process.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Preparation Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl text-center mb-12">
                Preparation Timeline
              </h2>

              <div className="space-y-8">
                {preparationSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-safari-floating transition-all duration-300"
                  >
                    <CardHeader className="bg-muted/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-primary">{step.icon}</div>
                          <div>
                            <CardTitle className="font-display text-xl">
                              {step.title}
                            </CardTitle>
                            <p className="text-muted-foreground text-sm">
                              {step.timeline}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            step.priority === "Critical"
                              ? "destructive"
                              : "secondary"
                          }
                          className={
                            step.priority === "Critical" ? "bg-red-600" : ""
                          }
                        >
                          {step.priority}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {step.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-3 p-4 rounded-card border border-border hover:bg-muted/20 transition-safari"
                          >
                            <CheckCircle
                              className={`w-5 h-5 mt-1 ${
                                item.required
                                  ? "text-safari-green"
                                  : "text-muted-foreground"
                              }`}
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">
                                {item.task}
                              </h4>
                              <p className="text-muted-foreground text-sm mb-2">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-primary">
                                  {item.cost}
                                </span>
                                {item.required && (
                                  <Badge variant="outline" className="text-xs">
                                    Required
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Health & Safety Tips */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl text-center mb-12">
                Health & Safety Tips
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {healthTips.map((category, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-safari-floating transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="text-primary">{category.icon}</div>
                        <h3 className="font-display text-lg font-semibold">
                          {category.category}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {category.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-safari-green mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {tip}
                            </span>
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

        {/* Budget Guidelines */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl text-center mb-12">
                Budget Guidelines
              </h2>

              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/20">
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>Recommended Tipping & Extras Budget</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {budgetGuidelines.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4"
                      >
                        <div>
                          <h4 className="font-semibold">{item.category}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.frequency}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-primary">
                            {item.amount}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-landscape text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <Phone className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="font-display text-3xl mb-4">
                Need Preparation Help?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our safari experts are here to guide you through every step of
                the preparation process.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">Get Preparation Assistance</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-safari-charcoal"
                  asChild
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I need help preparing for my Kenya safari`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Questions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafariPreparation;
