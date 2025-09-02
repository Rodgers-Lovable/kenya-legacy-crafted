import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  COMPANY_ADDRESS,
  COMPANY_LOCATION,
  COMPANY_PRIMARY_EMAIL,
  COMPANY_PRIMARY_TEL,
  COMPANY_SECONDARY_EMAIL,
  WHATSAPP_NUMBER,
} from "@/core/constants/appConstants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    dates: "",
    groupSize: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-sunset flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Plan Your Safari
          </h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Ready to embark on your Kenya adventure? Let's create your perfect
            safari experience
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-display text-3xl">
                  Tell Us About Your Dream Safari
                </CardTitle>
                <p className="text-muted-foreground">
                  Complete the form below and our safari experts will create a
                  personalized itinerary for you
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Safari Style
                      </label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, interests: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury">Luxury Safari</SelectItem>
                          <SelectItem value="family">Family Safari</SelectItem>
                          <SelectItem value="photography">
                            Photography Safari
                          </SelectItem>
                          <SelectItem value="budget">Budget Safari</SelectItem>
                          <SelectItem value="migration">
                            Migration Safari
                          </SelectItem>
                          <SelectItem value="cultural">
                            Cultural Safari
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Travel Dates
                      </label>
                      <Input
                        type="date"
                        value={formData.dates}
                        onChange={(e) =>
                          setFormData({ ...formData, dates: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Group Size
                      </label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, groupSize: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How many?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 people</SelectItem>
                          <SelectItem value="3-4">3-4 people</SelectItem>
                          <SelectItem value="5-8">5-8 people</SelectItem>
                          <SelectItem value="9+">9+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Per person" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Under $2,000</SelectItem>
                          <SelectItem value="mid">$2,000 - $4,000</SelectItem>
                          <SelectItem value="luxury">
                            $4,000 - $8,000
                          </SelectItem>
                          <SelectItem value="ultra">$8,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us more about your safari dreams
                    </label>
                    <Textarea
                      placeholder="What interests you most? Any specific wildlife you'd like to see? Special occasions? Accessibility needs?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Safari Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY_PRIMARY_TEL}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY_PRIMARY_EMAIL}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY_SECONDARY_EMAIL}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY_ADDRESS}, {COMPANY_LOCATION}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri: 8AM-6PM EAT
                      <br />
                      Sat-Sun: 9AM-4PM EAT
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-4" asChild>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to inquiries within 2 hours during
                    business hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
