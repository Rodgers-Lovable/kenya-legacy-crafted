import { Shield, Eye, Cookie, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  COMPANY_PRIMARY_EMAIL,
  COMPANY_NAME,
} from "@/core/constants/appConstants";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, phone number when you contact us or book a safari",
            "Passport details and travel preferences for booking purposes",
            "Payment information (processed securely through our payment providers)",
            "Dietary restrictions and health information relevant to your safari experience",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          items: [
            "IP address, browser type, and device information",
            "Pages visited, time spent on site, and referral sources",
            "Cookies and similar tracking technologies (see Cookie Policy below)",
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Provision",
          items: [
            "Process and manage your safari bookings and inquiries",
            "Communicate with you about your trips and travel arrangements",
            "Provide customer support and respond to your questions",
            "Send you important updates about your bookings or our services",
          ],
        },
        {
          subtitle: "Marketing (with your consent)",
          items: [
            "Send you our newsletter with safari tips and special offers",
            "Notify you about new destinations and safari packages",
            "Share travel guides and photography tips",
          ],
        },
      ],
    },
    {
      title: "Information Sharing",
      icon: <Phone className="w-5 h-5" />,
      content: [
        {
          subtitle: "We share your information only when necessary:",
          items: [
            "With safari partners, lodges, and guides to fulfill your booking",
            "With payment processors to handle transactions securely",
            "With government authorities when required by law",
            "We never sell your personal information to third parties",
          ],
        },
      ],
    },
    {
      title: "Data Security",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "We protect your information through:",
          items: [
            "SSL encryption for all data transmission",
            "Secure servers and regular security updates",
            "Limited access to personal information on a need-to-know basis",
            "Regular security audits and vulnerability assessments",
          ],
        },
      ],
    },
    {
      title: "Your Rights",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle:
            "Under GDPR and Kenyan data protection laws, you have the right to:",
          items: [
            "Access the personal information we hold about you",
            "Correct any inaccurate or incomplete information",
            "Request deletion of your personal information",
            "Object to or restrict certain processing of your data",
            "Data portability - receive your data in a structured format",
            "Withdraw consent for marketing communications at any time",
          ],
        },
      ],
    },
    {
      title: "Cookie Policy",
      icon: <Cookie className="w-5 h-5" />,
      content: [
        {
          subtitle: "We use cookies to:",
          items: [
            "Remember your preferences and improve site functionality",
            "Analytics cookies to understand how visitors use our site",
            "Marketing cookies to show relevant content and advertisements",
            "You can control cookie settings through your browser preferences",
          ],
        },
      ],
    },
    {
      title: "Data Retention",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "We retain your information:",
          items: [
            "For active bookings: Until completion of services plus 3 years for legal purposes",
            "For marketing: Until you unsubscribe or request deletion",
            "For legal compliance: As required by Kenyan and international law",
            "Website analytics: Anonymized data may be retained longer for business insights",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {COMPANY_NAME}</title>
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-landscape text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h1 className="font-display text-hero mb-6">Privacy Policy</h1>
              <p className="text-xl mb-4 opacity-90">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your personal information.
              </p>
              <p className="text-sm opacity-70">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {COMPANY_NAME} ("<strong>we</strong>", "<strong>our</strong>
                    ", or "<strong>us</strong>") is committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our
                    website or use our services.
                  </p>
                </CardContent>
              </Card>

              {/* Policy Sections */}
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
                      <div className="p-6 space-y-6">
                        {section.content.map((subsection, subIndex) => (
                          <div key={subIndex}>
                            <h3 className="font-semibold mb-3 text-foreground">
                              {subsection.subtitle}
                            </h3>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start space-x-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Information */}
              <Card className="mt-12 bg-muted/20">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h2 className="font-display text-2xl mb-4">
                    Questions About Privacy?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
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
                      <strong>Subject Line:</strong> Privacy Policy Inquiry
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      We will respond to your privacy-related inquiries within
                      30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* GDPR Notice */}
              <Card className="mt-8 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-3 text-primary">
                    GDPR Compliance Notice
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For European Union residents: This policy complies with the
                    General Data Protection Regulation (GDPR). You have
                    additional rights under GDPR, including the right to lodge a
                    complaint with your local data protection authority. Our
                    lawful basis for processing is typically consent, contract
                    performance, or legitimate business interests.
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

export default PrivacyPolicy;
