import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCTABar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-t border-border z-40">
      <div className="flex items-center justify-between p-4 gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center justify-center space-x-2"
          asChild
        >
          <a href="https://wa.me/254700000000?text=Hi! I'm interested in planning a Kenya safari." target="_blank" rel="noopener noreferrer">
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
          <a href="/contact">
            <Calendar className="w-4 h-4" />
            <span>Plan My Safari</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileCTABar;