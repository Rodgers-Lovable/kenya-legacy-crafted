import AnalyticsProvider from "@/components/AnalyticsProvider";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import Navbar from "@/components/Navbar";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import BookingTerms from "./pages/BookingTerms";
import Contact from "./pages/Contact";
import DestinationDetail from "./pages/DestinationDetail";
import Destinations from "./pages/Destinations";
import FAQ from "./pages/FAQ";
import GuideDetail from "./pages/GuideDetail";
import Guides from "./pages/Guides";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PackingList from "./pages/PackingList";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Reviews from "./pages/Reviews";
import SafariDetail from "./pages/SafariDetail";
import SafariPreparation from "./pages/SafariPreparation";
import Safaris from "./pages/Safaris";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/safaris" element={<Safaris />} />
                <Route path="/safaris/:slug" element={<SafariDetail />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route
                  path="/destinations/:slug"
                  element={<DestinationDetail />}
                />
                <Route path="/guides" element={<Guides />} />
                <Route path="/guides/:slug" element={<GuideDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reviews" element={<Reviews />} />
                {/* <Route path="/gallery" element={<Gallery />} /> */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/packing-list" element={<PackingList />} />
                <Route
                  path="/safari-preparation"
                  element={<SafariPreparation />}
                />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/booking-terms" element={<BookingTerms />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <MobileCTABar />
          </div>
        </AnalyticsProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
