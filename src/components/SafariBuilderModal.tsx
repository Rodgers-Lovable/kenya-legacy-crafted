import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  DollarSign,
  Compass,
  Mail,
  Phone,
  MessageCircle,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { COMPANY_PRIMARY_EMAIL } from "@/core/constants/appConstants";

interface SafariPreferences {
  duration: string;
  style: string;
  budget: string;
  month: string;
  travelers: string;
  interests: string[];
}

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  message: string;
}

interface SafariBuilderModalProps {
  children: React.ReactNode;
  preselectedPackage?: {
    title?: string;
    duration?: string;
    style?: string;
  };
}

const SafariBuilderModal = ({
  children,
  preselectedPackage,
}: SafariBuilderModalProps) => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [preferences, setPreferences] = useState<SafariPreferences>({
    duration: preselectedPackage?.duration || "",
    style: preselectedPackage?.style || "",
    budget: "",
    month: "",
    travelers: "",
    interests: [],
  });
  const [leadForm, setLeadForm] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: preselectedPackage?.title
      ? `I'm interested in the ${preselectedPackage.title} package.`
      : "",
  });
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setPreferences((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async () => {
    try {
      // EmailJS Integration - Add your service configuration
    const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID ||
        "your_booking_template_id";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      const emailData = {
        to_email: COMPANY_PRIMARY_EMAIL,
        from_name: leadForm.name,
        from_email: leadForm.email,
        phone: leadForm.phone,
        whatsapp: leadForm.whatsapp,
        message: leadForm.message,
        safari_duration: preferences.duration,
        safari_style: preferences.style,
        budget: preferences.budget,
        travel_month: preferences.month,
        travelers: preferences.travelers,
        interests: preferences.interests.join(", "),
        submission_date: new Date().toLocaleDateString(),
        submission_type: "Safari Builder Form",
      };

      // Uncomment below when EmailJS is configured
      await emailjs.send(serviceId, templateId, emailData, publicKey);

      setIsComplete(true);
      toast({
        title: "Safari Builder Complete!",
        description:
          "We'll send you personalized recommendations within 24 hours.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Calendar className="w-5 h-5" />;
      case 2:
        return <Compass className="w-5 h-5" />;
      case 3:
        return <DollarSign className="w-5 h-5" />;
      case 4:
        return <Users className="w-5 h-5" />;
      case 5:
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when closing
      setCurrentStep(1);
      setIsComplete(false);
      setPreferences({
        duration: preselectedPackage?.duration || "",
        style: preselectedPackage?.style || "",
        budget: "",
        month: "",
        travelers: "",
        interests: [],
      });
      setLeadForm({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: preselectedPackage?.title
          ? `I'm interested in the ${preselectedPackage.title} package.`
          : "",
      });
    }
  };

  const CompletionContent = () => (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <ArrowRight className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="font-display text-2xl mb-4">
        Perfect! Your Safari Awaits
      </h3>
      <p className="text-muted-foreground mb-8">
        Based on your preferences, we're crafting personalized safari
        recommendations. Our local experts will contact you within 24 hours with
        tailored itineraries.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleOpenChange(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Plan Your Perfect Safari</span>
          </DialogTitle>
        </DialogHeader>

        {isComplete ? (
          <CompletionContent />
        ) : (
          <div className="space-y-6">
            {/* Progress Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {getStepIcon(currentStep)}
                <span className="font-medium">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round((currentStep / totalSteps) * 100)}% complete
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px]">
              {/* Step 1: Duration */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl">
                    How long is your ideal safari?
                  </h3>
                  <RadioGroup
                    value={preferences.duration}
                    onValueChange={(value) =>
                      setPreferences((prev) => ({ ...prev, duration: value }))
                    }
                  >
                    {[
                      {
                        value: "3-4",
                        label: "3-4 Days",
                        desc: "Quick adventure, perfect for first-timers",
                        price: "KES 180,000 - 350,000",
                      },
                      {
                        value: "5-7",
                        label: "5-7 Days",
                        desc: "Classic safari experience with multiple parks",
                        price: "KES 400,000 - 700,000",
                      },
                      {
                        value: "8-12",
                        label: "8-12 Days",
                        desc: "Comprehensive journey across Kenya",
                        price: "KES 800,000 - 1,200,000",
                      },
                      {
                        value: "12+",
                        label: "12+ Days",
                        desc: "Ultimate adventure with migration & coast",
                        price: "KES 1,300,000+",
                      },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 p-4 rounded-card hover:bg-muted/50 transition-safari"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold">
                                {option.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {option.desc}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-primary">
                              {option.price}
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 2: Style */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl">
                    What's your travel style?
                  </h3>
                  <RadioGroup
                    value={preferences.style}
                    onValueChange={(value) =>
                      setPreferences((prev) => ({ ...prev, style: value }))
                    }
                  >
                    {[
                      {
                        value: "luxury",
                        label: "Luxury Safari",
                        desc: "Premium lodges, private guides, exceptional service",
                      },
                      {
                        value: "adventure",
                        label: "Adventure Safari",
                        desc: "Active experiences, camping, authentic wilderness",
                      },
                      {
                        value: "family",
                        label: "Family Safari",
                        desc: "Kid-friendly activities, family accommodations",
                      },
                      {
                        value: "photography",
                        label: "Photography Safari",
                        desc: "Specialized hides, golden hour timing, expert guides",
                      },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 p-4 rounded-card hover:bg-muted/50 transition-safari"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {option.desc}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 3: Budget */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl">
                    What's your budget range per person?
                  </h3>
                  <RadioGroup
                    value={preferences.budget}
                    onValueChange={(value) =>
                      setPreferences((prev) => ({ ...prev, budget: value }))
                    }
                  >
                    {[
                      {
                        value: "budget",
                        label: "KES 200,000 - 450,000",
                        desc: "Budget-friendly with quality experiences",
                      },
                      {
                        value: "mid",
                        label: "KES 450,000 - 750,000",
                        desc: "Premium mid-range with excellent lodges",
                      },
                      {
                        value: "luxury",
                        label: "KES 750,000 - 1,200,000",
                        desc: "Luxury experiences with top-tier accommodations",
                      },
                      {
                        value: "ultra",
                        label: "KES 1,200,000+",
                        desc: "Ultra-luxury with private guides and exclusive access",
                      },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 p-4 rounded-card hover:bg-muted/50 transition-safari"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {option.desc}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 4: Travel Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl">
                    Tell us about your trip
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="month">Preferred travel month</Label>
                      <Select
                        value={preferences.month}
                        onValueChange={(value) =>
                          setPreferences((prev) => ({ ...prev, month: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month) => (
                            <SelectItem key={month} value={month.toLowerCase()}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of travelers</Label>
                      <Select
                        value={preferences.travelers}
                        onValueChange={(value) =>
                          setPreferences((prev) => ({
                            ...prev,
                            travelers: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Solo traveler</SelectItem>
                          <SelectItem value="2">2 travelers</SelectItem>
                          <SelectItem value="3-4">3-4 travelers</SelectItem>
                          <SelectItem value="5-8">5-8 travelers</SelectItem>
                          <SelectItem value="9+">9+ travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>
                      What interests you most? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Big Five",
                        "Great Migration",
                        "Bird Watching",
                        "Photography",
                        "Cultural Experiences",
                        "Hot Air Ballooning",
                        "Walking Safaris",
                        "Night Game Drives",
                        "Beach Extension",
                        "Mountain Climbing",
                      ].map((interest) => (
                        <Badge
                          key={interest}
                          variant={
                            preferences.interests.includes(interest)
                              ? "default"
                              : "outline"
                          }
                          className="cursor-pointer justify-center p-3 hover:bg-primary/10 transition-safari"
                          onClick={() => handleInterestToggle(interest)}
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Information */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl">
                    Almost there! How can we reach you?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={leadForm.name}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={leadForm.email}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={leadForm.phone}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={leadForm.whatsapp}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            whatsapp: e.target.value,
                          }))
                        }
                        placeholder="+254 700 000 000"
                      />
                    </div>
                  </div>

                  {leadForm.message && (
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Input
                        id="message"
                        value={leadForm.message}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Tell us about your dream safari..."
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !preferences.duration) ||
                    (currentStep === 2 && !preferences.style) ||
                    (currentStep === 3 && !preferences.budget) ||
                    (currentStep === 4 &&
                      (!preferences.month || !preferences.travelers))
                  }
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!leadForm.name || !leadForm.email}
                  className="flex items-center space-x-2"
                >
                  <span>Get My Recommendations</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SafariBuilderModal;
