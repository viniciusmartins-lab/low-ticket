/**
 * Analytics — GA4 e Meta Pixel (04_INTEGRATIONS.md).
 * Eventos: generate_lead, click_cta_hero, click_cta_final, click_whatsapp, view_section.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

export const trackViewContent = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent');
  }
};
