import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ANALYTICS_EVENTS } from "@/core/constants/analyticsEvents";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

// Type declarations for Umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(ANALYTICS_EVENTS.PAGE_VIEW, {
        path: location.pathname,
        referrer: document.referrer || "direct",
      });
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default AnalyticsProvider;
