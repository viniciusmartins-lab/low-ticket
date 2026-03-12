# 04 — INTEGRAÇÕES
> Preencher com os IDs e URLs reais antes de iniciar a implementação.
> As credenciais ficam no arquivo `.env` — nunca no código-fonte.

---

## VARIÁVEIS DE AMBIENTE

Criar arquivo `.env` na raiz do projeto com:

```env
# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Meta Pixel
VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX

# Hotjar
VITE_HOTJAR_SITE_ID=XXXXXXX
VITE_HOTJAR_VERSION=6

# Webhook CRM
VITE_WEBHOOK_URL=https://seu-crm.com/webhook/XXXXXXXX

# WhatsApp (opcional)
VITE_WHATSAPP_NUMBER=5511999999999
VITE_WHATSAPP_MESSAGE=Olá, vim pelo site e gostaria de mais informações
```

Criar `.env.example` (sem valores reais) para versionamento no Git.

---

## GOOGLE ANALYTICS 4 (GA4)

**Measurement ID:** [PREENCHER]

**Eventos personalizados a rastrear:**

| Evento | Gatilho | Parâmetros extras |
|--------|---------|-------------------|
| `generate_lead` | Formulário enviado com sucesso | `form_name`, `page_location` |
| `click_cta_hero` | Clique no botão do Hero | `button_text` |
| `click_cta_final` | Clique no botão do CTA final | `button_text` |
| `click_whatsapp` | Clique no botão de WhatsApp | — |
| `view_section` | Scroll até seção importante | `section_name` |

**Implementação no código:**
```javascript
// src/lib/analytics.js
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};
```

---

## META PIXEL (Facebook/Instagram Ads)

**Pixel ID:** [PREENCHER]

**Eventos padrão a disparar:**

| Evento Meta | Quando disparar |
|-------------|-----------------|
| `PageView` | Carregamento da página (automático) |
| `Lead` | Formulário enviado com sucesso |
| `Contact` | Clique no WhatsApp |
| `ViewContent` | Scroll 50% da página |

---

## GOOGLE TAG MANAGER (RECOMENDADO)

> Usar GTM como centralizador é a melhor prática.
> Com GTM, você gerencia GA4, Meta Pixel e Hotjar sem alterar código.

**Container ID:** GTM-XXXXXXX

**Implementação:**
```html
<!-- Em index.html, dentro do <head> -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->

<!-- Em index.html, logo após <body> -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## HOTJAR (HEATMAP + GRAVAÇÃO DE SESSÃO)

**Site ID:** [PREENCHER]
**Version:** 6

**Implementação via GTM (recomendado) ou direta:**
```javascript
// Direto no index.html (se não usar GTM)
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid: SITE_ID, hjsv: 6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
```

**Eventos Hotjar a identificar:**
- Clique no CTA do Hero
- Início do preenchimento do formulário
- Envio do formulário (sucesso/erro)

---

## WEBHOOK → CRM

**URL do webhook:** [Salvar no .env como `VITE_WEBHOOK_URL`]
**Método HTTP:** POST
**Content-Type:** application/json

**Payload padrão enviado:**
```json
{
  "source": "landing-page",
  "page_url": "window.location.href",
  "timestamp": "ISO 8601",
  "utm_source": "URL param",
  "utm_medium": "URL param",
  "utm_campaign": "URL param",
  "name": "Campo nome do formulário",
  "email": "Campo email",
  "phone": "Campo telefone",
  "custom_field_1": "Se houver campo adicional"
}
```

**Hook de implementação:**
```javascript
// src/hooks/useWebhook.js
export const useWebhook = () => {
  const sendLead = async (formData) => {
    const payload = {
      source: 'landing-page',
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      ...formData
    };

    const response = await fetch(import.meta.env.VITE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return response.ok;
  };

  return { sendLead };
};
```

---

## GOOGLE PAGESPEED INSIGHTS

**URL para testar após deploy:**
```
https://pagespeed.web.dev/analysis?url=[URL_DA_LP]
```

**Metas de performance:**
- Performance: ≥ 90
- Acessibilidade: ≥ 90
- Melhores práticas: ≥ 90
- SEO: ≥ 95

**Otimizações obrigatórias no código:**
- Imagens em formato WebP com `width` e `height` definidos
- Lazy loading em imagens fora do viewport inicial (`loading="lazy"`)
- Hero image com `fetchpriority="high"` e `loading="eager"`
- Fontes com `font-display: swap`
- CSS crítico inline (Vite cuida automaticamente com build)
- Código splitting por rota (se LP tiver múltiplas páginas)
