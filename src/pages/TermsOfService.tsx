import { Scale, AlertTriangle, Shield, FileText, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  COMPANY_PRIMARY_EMAIL,
  COMPANY_NAME,
} from "@/core/constants/appConstants";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <Scale className="w-5 h-5" />,
      content: `By accessing and using the ${COMPANY_NAME} website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use our services.`,
    },
    {
      title: "Services Description",
      icon: <FileText className="w-5 h-5" />,
      content: `${COMPANY_NAME} provides safari tour services, travel planning, and related tourism services in Kenya. Our services include but are not limited to: Safari tour packages, accommodation booking, transportation arrangements, tour guide services, travel consultation, and safari equipment rental. All services are subject to availability and confirmation.`,
    },
    {
      title: "Booking and Reservations",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "All bookings are subject to availability and confirmation from us",
        "A deposit is required to secure your reservation",
        "Full payment is due according to the payment schedule provided",
        "We reserve the right to cancel bookings due to safety concerns or circumstances beyond our control",
        "Changes to confirmed bookings may incur additional charges",
        "Group bookings may have different terms and conditions",
      ],
    },
    {
      title: "Pricing and Payment",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "All prices are quoted in Kenyan Shillings (KES) unless otherwise stated",
        "Prices are subject to change without notice until booking is confirmed",
        "Payment can be made via bank transfer, credit card, or other accepted methods",
        "Additional charges may apply for specific dietary requirements or special requests",
        "Prices include services as specified in your itinerary",
        "Currency exchange rates may affect final pricing for international clients",
      ],
    },
    {
      title: "Cancellation Policy",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        "Cancellations must be made in writing via email",
        "Cancellation charges apply according to our cancellation policy",
        "Force majeure events are handled on a case-by-case basis",
        "Travel insurance is strongly recommended to protect against unforeseen cancellations",
        "Refunds are processed according to our refund policy",
        "No-shows result in 100% cancellation charges",
      ],
    },
    {
      title: "Travel Documents and Health",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Valid passport required for all international visitors",
        "Visa requirements are the responsibility of the traveler",
        "Health and vaccination requirements must be met by travelers",
        "Travel insurance is strongly recommended and may be required",
        "Medical conditions must be disclosed at time of booking",
        "We are not responsible for denied entry due to documentation issues",
      ],
    },
    {
      title: "Liability and Insurance",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "We maintain appropriate insurance for our operations",
        "Travelers participate in activities at their own risk",
        "We are not liable for acts of nature, political situations, or third-party services",
        "Maximum liability is limited to the cost of services booked",
        "Personal travel insurance is the responsibility of the traveler",
        "Activities involve inherent risks that cannot be eliminated",
      ],
    },
    {
      title: "Code of Conduct",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Respect for local customs, wildlife, and environment is required",
        "Follow all instructions from guides and park authorities",
        "Illegal activities or behavior may result in immediate removal from tour",
        "Damage to property or equipment may result in additional charges",
        "Disruptive behavior affecting other guests may result in removal",
        "Photography restrictions in certain areas must be respected",
      ],
    },
    {
      title: "Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of ${COMPANY_NAME} or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of ${COMPANY_NAME}. You may not reproduce, distribute, or create derivative works without express written permission.`,
    },
    {
      title: "Privacy and Data Protection",
      icon: <Shield className="w-5 h-5" />,
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. By using our services, you consent to the collection and use of your information as outlined in our Privacy Policy.`,
    },
    {
      title: "Dispute Resolution",
      icon: <Scale className="w-5 h-5" />,
      content: [
        "These terms are governed by the laws of Kenya",
        "Disputes will be resolved through the courts of Kenya",
        "We encourage resolution through direct communication first",
        "Mediation may be used for dispute resolution when appropriate",
        "Legal proceedings must be initiated within one year of the dispute",
        "Class action lawsuits are not permitted under these terms",
      ],
    },
    {
      title: "Modifications to Terms",
      icon: <FileText className="w-5 h-5" />,
      content: `${COMPANY_NAME} reserves the right to modify these terms at any time. Updated terms will be posted on our website with the revision date. Continued use of our services after changes constitutes acceptance of the modified terms. Material changes will be communicated to existing customers via email where possible.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | {COMPANY_NAME}</title>
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-landscape text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Scale className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h1 className="font-display text-hero mb-6">Terms of Service</h1>
              <p className="text-xl mb-4 opacity-90">
                Please read these terms carefully before using our services. By
                booking with us, you agree to these terms and conditions.
              </p>
              <p className="text-sm opacity-70">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="border-amber-200 bg-amber-50">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Important:</strong> These terms constitute a legal
                  agreement between you and {COMPANY_NAME}. Please read
                  carefully and contact us if you have any questions before
                  booking.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-safari-floating transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      {/* Section Header */}
                      <div className="flex items-center space-x-3 p-6 border-b border-border bg-muted/20">
                        <div className="text-primary">{section.icon}</div>
                        <h2 className="font-display text-xl font-semibold">
                          {section.title}
                        </h2>
                      </div>

                      {/* Section Content */}
                      <div className="p-6">
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-3">
                            {section.content.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Information */}
              <Card className="mt-12 bg-muted/20">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h2 className="font-display text-2xl mb-4">
                    Questions About These Terms?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about these Terms of Service,
                    please contact us before booking:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${COMPANY_PRIMARY_EMAIL}`}
                        className="text-primary hover:underline"
                      >
                        {COMPANY_PRIMARY_EMAIL}
                      </a>
                    </p>
                    <p>
                      <strong>Subject Line:</strong> Terms of Service Inquiry
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      We're here to clarify any terms before you book your
                      safari with us.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Notice */}
              <Card className="mt-8 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-3 text-primary">
                    Legal Notice
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {COMPANY_NAME} is a licensed tour operator in Kenya. These
                    terms are governed by Kenyan law. By using our services, you
                    acknowledge that you have read, understood, and agree to be
                    bound by these terms and conditions. If any provision of
                    these terms is found to be unenforceable, the remaining
                    provisions will continue in full force and effect.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;
