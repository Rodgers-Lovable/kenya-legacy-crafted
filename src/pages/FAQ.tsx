import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Plane, 
  Shield, 
  Camera, 
  MapPin, 
  Calendar,
  DollarSign,
  Users,
  MessageCircle
} from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      id: "planning",
      title: "Safari Planning",
      icon: <Calendar className="w-5 h-5" />,
      faqs: [
        {
          question: "When is the best time to visit Kenya for a safari?",
          answer: "The best time depends on what you want to see. For the Great Migration in Masai Mara, visit July-October. For general wildlife viewing with fewer crowds, January-March and June-September are ideal. The dry seasons (July-October and January-March) offer excellent game viewing as animals congregate around water sources."
        },
        {
          question: "How long should my first safari be?",
          answer: "For first-time safari-goers, we recommend 5-7 days. This allows you to visit 2-3 parks, adjust to the early morning game drives, and fully immerse yourself in the safari experience without feeling rushed. Shorter 3-4 day safaris are perfect for those with limited time, while 8+ day safaris allow for more comprehensive exploration."
        },
        {
          question: "What's included in your safari packages?",
          answer: "Our safari packages typically include accommodation, all meals, park entry fees, game drives in 4x4 vehicles with pop-up roofs, professional English-speaking guides, and airport transfers. International flights, visas, tips, and personal expenses are usually excluded. Each package clearly lists what's included and excluded."
        },
        {
          question: "Can you customize safari itineraries?",
          answer: "Absolutely! Every safari is tailored to your preferences, budget, and interests. Whether you want luxury lodges or budget camping, specific wildlife experiences, cultural visits, or adventure activities like hot air ballooning, we create personalized itineraries just for you."
        }
      ]
    },
    {
      id: "travel",
      title: "Travel & Visas",
      icon: <Plane className="w-5 h-5" />,
      faqs: [
        {
          question: "Do I need a visa to visit Kenya?",
          answer: "Most visitors need a visa to enter Kenya. Citizens of most countries can apply for an eVisa online before travel or get a visa on arrival. The tourist visa costs USD $51 and is valid for 90 days. We recommend applying for the eVisa in advance to avoid queues at the airport."
        },
        {
          question: "What vaccinations do I need for Kenya?",
          answer: "Yellow fever vaccination is required if you're coming from a yellow fever endemic area. We recommend consulting your doctor or travel clinic 4-6 weeks before travel. Common recommendations include hepatitis A & B, typhoid, and malaria prophylaxis. Ensure routine vaccinations are up to date."
        },
        {
          question: "What should I pack for a safari?",
          answer: "Pack light, neutral-colored clothing (khaki, brown, green), comfortable walking shoes, hat, sunscreen, insect repellent, binoculars, camera with extra batteries/memory cards, and a light jacket for early morning drives. We provide a comprehensive packing list upon booking."
        },
        {
          question: "How do I get to Kenya?",
          answer: "Jomo Kenyatta International Airport (NBO) in Nairobi is Kenya's main international airport. Major airlines offer direct flights from Europe, Middle East, Asia, and connecting flights from Americas. We can arrange airport transfers and domestic flights to safari destinations."
        }
      ]
    },
    {
      id: "safety",
      title: "Safety & Health",
      icon: <Shield className="w-5 h-5" />,
      faqs: [
        {
          question: "Is it safe to go on safari in Kenya?",
          answer: "Yes, Kenya is generally very safe for safari tourism. We work with experienced guides who prioritize safety, use well-maintained vehicles, and follow strict safety protocols. Wildlife encounters are conducted from vehicles at safe distances. Our guides are trained in first aid and emergency procedures."
        },
        {
          question: "What about malaria risk?",
          answer: "Some safari areas have malaria risk, particularly in lower altitude regions. We recommend consulting your doctor about malaria prophylaxis. Use insect repellent, wear long sleeves in the evening, and sleep under nets (provided in all accommodations). Most safari camps are in low-risk areas."
        },
        {
          question: "What if I have dietary restrictions?",
          answer: "We accommodate all dietary requirements including vegetarian, vegan, gluten-free, kosher, and halal meals. Please inform us of any allergies or restrictions when booking. Most lodges and camps are experienced in catering to various dietary needs with advance notice."
        },
        {
          question: "Is travel insurance necessary?",
          answer: "We highly recommend comprehensive travel insurance covering medical expenses, evacuation, trip cancellation, and personal belongings. Ensure it covers adventure activities and wildlife safaris. Some policies include coverage for camera equipment, which is valuable for safari photography."
        }
      ]
    },
    {
      id: "wildlife",
      title: "Wildlife & Photography",
      icon: <Camera className="w-5 h-5" />,
      faqs: [
        {
          question: "Will I see the Big Five?",
          answer: "While we can't guarantee specific wildlife sightings (animals are wild and free), Kenya offers excellent opportunities to see all Big Five animals. Masai Mara, Amboseli, and Tsavo parks have good populations of lions, leopards, elephants, buffalos, and rhinos. Our experienced guides know the best spots and timing."
        },
        {
          question: "What's the best camera equipment for safari?",
          answer: "A DSLR or mirrorless camera with a telephoto lens (70-300mm minimum) is ideal. Bring extra batteries, memory cards, and a dust-proof bag. Many guests get excellent shots with modern smartphones too. We can arrange specialized photography safaris with professional guidance for serious photographers."
        },
        {
          question: "Can I get close to the animals?",
          answer: "All wildlife viewing is done from vehicles at respectful distances for both animal welfare and visitor safety. Our guides are skilled at positioning vehicles for optimal viewing and photography while following strict park regulations. Walking safaris are available in designated areas with armed rangers."
        },
        {
          question: "What animals will I see besides the Big Five?",
          answer: "Kenya is home to incredible diversity: giraffes, zebras, cheetahs, hippos, crocodiles, hyenas, wildebeest, gazelles, impalas, warthogs, and over 1,000 bird species. Each park has unique species - Samburu has special northern species like Grevy's zebras and reticulated giraffes."
        }
      ]
    },
    {
      id: "booking",
      title: "Booking & Payments",
      icon: <DollarSign className="w-5 h-5" />,
      faqs: [
        {
          question: "How do I book a safari?",
          answer: "You can book through our website, WhatsApp, or contact form. We'll create a personalized itinerary based on your preferences and send a detailed quote. A 30% deposit secures your booking, with the balance due 60 days before travel. We accept bank transfers and major credit cards."
        },
        {
          question: "What's your cancellation policy?",
          answer: "Cancellations more than 60 days before departure: 10% of total cost. 31-60 days: 25%. 15-30 days: 50%. Less than 15 days: 75%. Within 7 days or no-show: 100%. We recommend travel insurance to protect against unforeseen circumstances. Force majeure events are handled case by case."
        },
        {
          question: "Do you offer group discounts?",
          answer: "Yes! We offer attractive group rates for 6+ people. Family discounts apply for children under 12. The more people in your group, the lower the per-person cost due to shared vehicle and guide costs. Contact us for custom group pricing."
        },
        {
          question: "Can I pay in Kenyan Shillings?",
          answer: "Yes, we accept payments in Kenyan Shillings (KES), US Dollars, Euros, and British Pounds. All our prices are displayed in KES with current exchange rates. Local payment can be made via M-Pesa, bank transfer, or cash for Kenyan residents."
        }
      ]
    }
  ];

  const quickStats = [
    { icon: <Users className="w-6 h-6" />, label: "Happy Guests", value: "2,500+" },
    { icon: <MapPin className="w-6 h-6" />, label: "Destinations", value: "12+" },
    { icon: <Shield className="w-6 h-6" />, label: "Safety Record", value: "100%" },
    { icon: <Camera className="w-6 h-6" />, label: "Wildlife Species", value: "500+" }
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
              Everything you need to know about planning your Kenya safari adventure
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center">
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
              <Card key={category.id} className="mb-8 hover:shadow-safari-floating transition-all duration-300">
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 p-6 border-b border-border bg-muted/20">
                    <div className="text-primary">{category.icon}</div>
                    <h2 className="font-display text-xl font-semibold">{category.title}</h2>
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
                            <span className="font-semibold">{faq.question}</span>
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
            <h2 className="font-display text-3xl mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our safari experts are here to help you plan the perfect Kenya adventure. 
              Get in touch and we'll respond within 24 hours.
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
                    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
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
                  <Button size="sm" variant="outline">
                    Get Started
                  </Button>
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
                    <a href="/contact">
                      Contact Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg">
                Plan My Safari
              </Button>
              <Button size="lg" variant="outline">
                View Safari Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;