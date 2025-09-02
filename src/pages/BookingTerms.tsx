import { 
  Calendar, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle, 
  FileText,
  Phone,
  Clock,
  Shield
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { COMPANY_PRIMARY_EMAIL, COMPANY_NAME } from "@/core/constants/appConstants";

const BookingTerms = () => {
  const lastUpdated = "January 1, 2024";

  const paymentSchedule = [
    { stage: "Booking Confirmation", percentage: "30%", timing: "At time of booking", description: "Non-refundable deposit to secure your safari" },
    { stage: "Final Payment", percentage: "70%", timing: "60 days before travel", description: "Remaining balance due before departure" },
    { stage: "Last-Minute Bookings", percentage: "100%", timing: "Within 60 days", description: "Full payment required for bookings made less than 60 days before travel" }
  ];

  const cancellationPolicy = [
    { period: "More than 60 days", charge: "10%", description: "Minimal cancellation fee" },
    { period: "31-60 days", charge: "25%", description: "Quarter of total cost" },
    { period: "15-30 days", charge: "50%", description: "Half of total cost" },
    { period: "8-14 days", charge: "75%", description: "Three-quarters of total cost" },
    { period: "7 days or less", charge: "100%", description: "Full cost, no refund" },
    { period: "No-show", charge: "100%", description: "Full cost, no refund" }
  ];

  const inclusionsExclusions = {
    included: [
      "Professional English-speaking safari guide",
      "All park entry fees and conservancy fees",
      "Game drives in 4x4 safari vehicles with pop-up roofs",
      "Accommodation as specified in itinerary",
      "All meals as specified (B=Breakfast, L=Lunch, D=Dinner)",
      "Airport transfers (NBO airport)",
      "Emergency evacuation insurance during safari",
      "All government taxes and service charges",
      "Drinking water during game drives",
      "Safari equipment (binoculars, first aid kit)"
    ],
    excluded: [
      "International flights to/from Kenya",
      "Kenya visa fees (USD $51 for most nationalities)",
      "Travel insurance (highly recommended)",
      "Alcoholic beverages and premium drinks",
      "Personal expenses (laundry, telephone, souvenirs)",
      "Tips for guides, drivers, and camp staff",
      "Optional activities not specified in itinerary",
      "Domestic flights (unless specified)",
      "Medical expenses and vaccinations",
      "Excess baggage charges"
    ]
  };

  const bookingConditions = [
    {
      title: "Age Requirements",
      icon: <Shield className="w-5 h-5" />,
      details: [
        "Minimum age for safaris is typically 6 years old",
        "Children under 12 receive discounted rates",
        "Family-friendly itineraries available",
        "Special rates for children sharing with adults"
      ]
    },
    {
      title: "Health & Safety",
      icon: <Shield className="w-5 h-5" />,
      details: [
        "Travel insurance strongly recommended",
        "Medical conditions must be disclosed at booking",
        "Malaria prophylaxis may be required",
        "Physical fitness requirements for some activities"
      ]
    },
    {
      title: "Documentation",
      icon: <FileText className="w-5 h-5" />,
      details: [
        "Valid passport required (6 months validity)",
        "Kenya visa required for most nationalities",
        "Yellow fever certificate if coming from endemic areas",
        "Travel documents are guest's responsibility"
      ]
    },
    {
      title: "Force Majeure",
      icon: <AlertTriangle className="w-5 h-5" />,
      details: [
        "Weather conditions beyond our control",
        "Political instability or government actions",
        "Natural disasters or pandemics",
        "Handled case-by-case with guest protection priority"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-landscape text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <FileText className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="font-display text-hero mb-6">
              Booking Terms & Conditions
            </h1>
            <p className="text-xl mb-4 opacity-90">
              Complete booking terms, payment policies, and conditions for your Kenya safari experience.
            </p>
            <p className="text-sm opacity-70">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="border-blue-200 bg-blue-50">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Please Note:</strong> These booking terms apply to all safari packages and services. 
                By confirming your booking, you accept these terms and conditions in full.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-12">Payment Schedule</h2>
            
            <div className="grid gap-6">
              {paymentSchedule.map((payment, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-safari-floating transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-semibold">{payment.stage}</h3>
                          <p className="text-muted-foreground">{payment.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{payment.percentage}</div>
                        <div className="text-sm text-muted-foreground">{payment.timing}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-12">Cancellation Policy</h2>
            
            <Card className="overflow-hidden">
              <CardHeader className="bg-amber-50 border-b border-amber-200">
                <CardTitle className="flex items-center space-x-2 text-amber-800">
                  <Clock className="w-5 h-5" />
                  <span>Cancellation Charges by Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {cancellationPolicy.map((policy, index) => (
                    <div key={index} className="flex items-center justify-between p-6 hover:bg-muted/20 transition-safari">
                      <div>
                        <h4 className="font-semibold">{policy.period} before departure</h4>
                        <p className="text-sm text-muted-foreground">{policy.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={policy.charge === "100%" ? "destructive" : "secondary"}
                          className="text-lg px-3 py-1"
                        >
                          {policy.charge}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Alert className="mt-6 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Travel Insurance Recommended:</strong> We strongly recommend comprehensive travel insurance 
                to protect against unforeseen circumstances that may require cancellation.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-12">What's Included & Excluded</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <Card className="overflow-hidden border-green-200">
                <CardHeader className="bg-green-50 border-b border-green-200">
                  <CardTitle className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span>Included in Your Safari</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {inclusionsExclusions.included.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Exclusions */}
              <Card className="overflow-hidden border-red-200">
                <CardHeader className="bg-red-50 border-b border-red-200">
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Not Included (Additional Cost)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {inclusionsExclusions.excluded.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Conditions */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-12">Important Booking Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {bookingConditions.map((condition, index) => (
                <Card key={index} className="hover:shadow-safari-floating transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-primary">{condition.icon}</div>
                      <h3 className="font-display text-lg font-semibold">{condition.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {condition.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-landscape text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Phone className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-3xl mb-4">Questions About Booking Terms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is here to clarify any booking terms and help you understand our policies.
            </p>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Us About Booking Terms</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${COMPANY_PRIMARY_EMAIL}`} className="text-primary hover:underline">{COMPANY_PRIMARY_EMAIL}</a>
                  </p>
                  <p>
                    <strong>Subject:</strong> Booking Terms Inquiry
                  </p>
                  <p className="text-xs opacity-80 mt-4">
                    We'll respond to booking inquiries within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingTerms;