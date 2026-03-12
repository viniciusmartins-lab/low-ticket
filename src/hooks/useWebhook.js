/**
 * Envio de lead para CRM via webhook (04_INTEGRATIONS.md).
 * URL em .env: VITE_WEBHOOK_URL
 */
export const useWebhook = () => {
  const sendLead = async (formData) => {
    const url = import.meta.env.VITE_WEBHOOK_URL;
    if (!url) return false;

    const payload = {
      source: 'landing-page',
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString(),
      utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || '' : '',
      utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') || '' : '',
      utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') || '' : '',
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      city: formData.city || '',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return response.ok;
  };

  return { sendLead };
};
