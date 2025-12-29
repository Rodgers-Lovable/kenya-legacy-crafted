import { useCallback } from "react";
import {
  ANALYTICS_EVENTS,
  EVENT_SOURCES,
  type AnalyticsEvent,
  type EventSource,
} from "@/core/constants/analyticsEvents";

// Type declarations for Umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

export const useUmami = () => {
  // Generic event tracking function
  const trackEvent = useCallback(
    (eventName: AnalyticsEvent | string, eventData?: Record<string, unknown>) => {
      if (typeof window !== "undefined" && window.umami) {
        window.umami.track(eventName, eventData);
      }
    },
    []
  );

  // WhatsApp click tracking
  const trackWhatsAppClick = useCallback(
    (source: EventSource) => {
      trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { source });
    },
    [trackEvent]
  );

  // Plan Safari button click tracking
  const trackPlanSafariClick = useCallback(
    (source: EventSource) => {
      trackEvent(ANALYTICS_EVENTS.PLAN_SAFARI_CLICK, { source });
    },
    [trackEvent]
  );

  // Safari view tracking (when viewing a safari detail page)
  const trackSafariView = useCallback(
    (safariName: string, safariSlug: string) => {
      trackEvent(ANALYTICS_EVENTS.SAFARI_VIEW, {
        safari_name: safariName,
        safari_slug: safariSlug,
      });
    },
    [trackEvent]
  );

  // Book now button click tracking
  const trackBookNowClick = useCallback(
    (safariName: string) => {
      trackEvent(ANALYTICS_EVENTS.BOOK_NOW_CLICK, { safari_name: safariName });
    },
    [trackEvent]
  );

  // Contact form submission tracking
  const trackContactFormSubmit = useCallback(
    (data: { safari_style?: string; group_size?: string; budget?: string }) => {
      trackEvent(ANALYTICS_EVENTS.CONTACT_FORM_SUBMIT, data);
    },
    [trackEvent]
  );

  // Safari builder completion tracking
  const trackSafariBuilderComplete = useCallback(
    (data: {
      duration?: string;
      style?: string;
      budget?: string;
      travelers?: string;
    }) => {
      trackEvent(ANALYTICS_EVENTS.SAFARI_BUILDER_COMPLETE, data);
    },
    [trackEvent]
  );

  // Newsletter signup tracking
  const trackNewsletterSignup = useCallback(() => {
    trackEvent(ANALYTICS_EVENTS.NEWSLETTER_SIGNUP);
  }, [trackEvent]);

  // Guide read tracking
  const trackGuideRead = useCallback(
    (guideTitle: string, category: string) => {
      trackEvent(ANALYTICS_EVENTS.GUIDE_READ, {
        guide_title: guideTitle,
        category,
      });
    },
    [trackEvent]
  );

  // Destination view tracking
  const trackDestinationView = useCallback(
    (destinationName: string, destinationSlug: string) => {
      trackEvent(ANALYTICS_EVENTS.DESTINATION_VIEW, {
        destination_name: destinationName,
        destination_slug: destinationSlug,
      });
    },
    [trackEvent]
  );

  // Gallery view tracking
  const trackGalleryView = useCallback(() => {
    trackEvent(ANALYTICS_EVENTS.GALLERY_VIEW);
  }, [trackEvent]);

  // Social link click tracking
  const trackSocialLinkClick = useCallback(
    (platform: string) => {
      trackEvent(ANALYTICS_EVENTS.SOCIAL_LINK_CLICK, { platform });
    },
    [trackEvent]
  );

  // External link click tracking
  const trackExternalLinkClick = useCallback(
    (url: string) => {
      trackEvent(ANALYTICS_EVENTS.EXTERNAL_LINK_CLICK, { url });
    },
    [trackEvent]
  );

  return {
    // Generic tracking
    trackEvent,

    // Pre-built tracking functions
    trackWhatsAppClick,
    trackPlanSafariClick,
    trackSafariView,
    trackBookNowClick,
    trackContactFormSubmit,
    trackSafariBuilderComplete,
    trackNewsletterSignup,
    trackGuideRead,
    trackDestinationView,
    trackGalleryView,
    trackSocialLinkClick,
    trackExternalLinkClick,

    // Export constants for direct access
    EVENTS: ANALYTICS_EVENTS,
    SOURCES: EVENT_SOURCES,
  };
};
