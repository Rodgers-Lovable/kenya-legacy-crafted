// Centralized Umami Analytics Event Configuration
// All event names and sources defined in one place for consistency and type safety

export const ANALYTICS_EVENTS = {
  // Lead Generation Events
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  SAFARI_BUILDER_COMPLETE: "safari_builder_complete",
  NEWSLETTER_SIGNUP: "newsletter_signup",

  // CTA Click Events
  WHATSAPP_CLICK: "whatsapp_click",
  PLAN_SAFARI_CLICK: "plan_safari_click",
  BOOK_NOW_CLICK: "book_now_click",
  LEARN_MORE_CLICK: "learn_more_click",

  // Content Engagement Events
  SAFARI_VIEW: "safari_view",
  GUIDE_READ: "guide_read",
  DESTINATION_VIEW: "destination_view",
  GALLERY_VIEW: "gallery_view",

  // Navigation Events
  PAGE_VIEW: "page_view",

  // Outbound Link Events
  SOCIAL_LINK_CLICK: "social_link_click",
  EXTERNAL_LINK_CLICK: "external_link_click",
} as const;

// Event Sources - identifies where the event was triggered from
export const EVENT_SOURCES = {
  NAVBAR: "navbar",
  NAVBAR_MOBILE: "navbar_mobile",
  FOOTER: "footer",
  MOBILE_CTA_BAR: "mobile_cta_bar",
  HOMEPAGE: "homepage",
  SAFARI_DETAIL: "safari_detail",
  SAFARI_BUILDER: "safari_builder",
  CONTACT_PAGE: "contact_page",
  GUIDE_DETAIL: "guide_detail",
  PACKING_LIST: "packing_list",
} as const;

// Type exports for TypeScript support
export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];
export type EventSource = (typeof EVENT_SOURCES)[keyof typeof EVENT_SOURCES];
