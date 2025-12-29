import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUmami } from "@/hooks/use-umami";
import { WHATSAPP_NUMBER } from "@/core/constants/appConstants";

const MobileCTABar = () => {
  const { trackWhatsAppClick, trackPlanSafariClick, SOURCES } = useUmami();

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-t border-border z-40">
      <div className="flex items-center justify-between p-4 gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center justify-center space-x-2"
          asChild
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in planning a Kenya safari.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(SOURCES.MOBILE_CTA_BAR)}
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </Button>
        
        <Button 
          variant="default" 
          size="sm" 
          className="flex-1 flex items-center justify-center space-x-2"
          asChild
        >
          <a href="/contact" onClick={() => trackPlanSafariClick(SOURCES.MOBILE_CTA_BAR)}>
            <Calendar className="w-4 h-4" />
            <span>Plan My Safari</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileCTABar;