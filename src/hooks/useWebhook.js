/**
 * Envio de lead para CRM via webhook (04_INTEGRATIONS.md).
 * URL em .env: VITE_WEBHOOK_URL
 */
export const useWebhook = () => {
  const getUtm = (key) => (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get(key) || '' : '');

  const sendLead = async (formData) => {
    const url = import.meta.env.VITE_WEBHOOK_URL || 'https://webmkt.sucessodonto.com.br/webhook/testes-lp-caca';
    if (!url) return false;

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const payload = {
      source: 'landing-page',
      page_url: pageUrl,
      pagina_captura: pageUrl,
      url: pageUrl,
      timestamp: new Date().toISOString(),
      utm_source: getUtm('utm_source'),
      utm_term: getUtm('utm_term'),
      utm_campaign: getUtm('utm_campaign'),
      utm_medium: getUtm('utm_medium'),
      utm_content: getUtm('utm_content'),
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
