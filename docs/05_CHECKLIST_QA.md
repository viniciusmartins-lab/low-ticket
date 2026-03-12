# 05 — CHECKLIST DE QA E PRÉ-DEPLOY

> Executar 100% dos itens antes de publicar a LP.
> Assinar com data e responsável ao concluir cada bloco.

---

## ✅ BLOCO 1 — CONTEÚDO

- [ ] Todos os textos conferidos contra o `03_CONTENT.md` (nenhuma alteração)
- [ ] Nenhum texto placeholder "[PREENCHER]" visível na página
- [ ] Nomes dos sócios e cargos conferidos
- [ ] Depoimentos com nomes e empresas corretos
- [ ] Todos os links funcionando (menu, CTAs, rodapé)
- [ ] Botão de WhatsApp abre conversa com número correto
- [ ] Mensagens de sucesso e erro do formulário visíveis e corretas

---

## ✅ BLOCO 2 — IDENTIDADE VISUAL

- [ ] Cores conferidas contra `02_BRAND.md` (hex exatos)
- [ ] Fontes corretas carregando (inspecionar no DevTools > Network)
- [ ] Logo em resolução adequada (sem pixelização)
- [ ] Logo versão clara/escura aplicada corretamente por seção
- [ ] Espaçamentos consistentes entre seções
- [ ] Botões com estilo correto (primário, secundário)
- [ ] Favicon aparecendo na aba do browser

---

## ✅ BLOCO 3 — RESPONSIVIDADE

Testar nas seguintes resoluções:
- [ ] Mobile 375px (iPhone SE)
- [ ] Mobile 390px (iPhone 14)
- [ ] Tablet 768px (iPad)
- [ ] Desktop 1280px
- [ ] Desktop 1440px+

Itens a verificar em cada resolução:
- [ ] Nenhum elemento com overflow horizontal
- [ ] Textos legíveis (tamanho mínimo 16px no body mobile)
- [ ] Imagens não cortadas ou distorcidas
- [ ] Formulário usável com teclado virtual no mobile
- [ ] CTAs com tamanho de toque mínimo de 44px

---

## ✅ BLOCO 4 — FORMULÁRIO E WEBHOOK

- [ ] Validação de campos obrigatórios funcionando
- [ ] Validação de formato de email
- [ ] Validação de formato de telefone
- [ ] Teste de envio real (dados chegando no CRM)
- [ ] Conferir todos os campos do payload no CRM
- [ ] UTM params sendo capturados no payload (testar com `?utm_source=teste`)
- [ ] Mensagem de sucesso exibida após envio
- [ ] Mensagem de erro exibida em caso de falha
- [ ] Botão bloqueado durante o envio (evitar duplo clique)
- [ ] Formulário resets após envio bem-sucedido

---

## ✅ BLOCO 5 — SEO

- [ ] Title tag preenchida (máx 60 chars) — conferir no `<head>`
- [ ] Meta description preenchida (máx 155 chars)
- [ ] OG:title e OG:description preenchidos
- [ ] OG:image configurada (1200x630px)
- [ ] Canonical URL configurada
- [ ] H1 único na página
- [ ] Hierarquia de headings lógica (H1 > H2 > H3)
- [ ] Todos os `alt` de imagens preenchidos
- [ ] URL amigável (sem caracteres especiais)
- [ ] `robots` meta tag: index, follow
- [ ] Sitemap.xml gerado (se multi-página)

---

## ✅ BLOCO 6 — ANALYTICS E TRACKING

- [ ] GA4 disparando PageView (verificar no DebugView do GA4)
- [ ] Evento `generate_lead` disparando ao enviar formulário
- [ ] Evento de clique no CTA do Hero disparando
- [ ] Meta Pixel disparando PageView (verificar com Meta Pixel Helper)
- [ ] Meta Pixel disparando evento `Lead` ao enviar formulário
- [ ] Hotjar gravando sessões (verificar no painel Hotjar)
- [ ] GTM container publicado e ativo (se em uso)

---

## ✅ BLOCO 7 — PERFORMANCE (PAGESPEED)

Rodar no PageSpeed Insights: `https://pagespeed.web.dev`

| Métrica | Meta | Resultado |
|---------|------|-----------|
| Performance | ≥ 90 | [ ] |
| Acessibilidade | ≥ 90 | [ ] |
| Melhores práticas | ≥ 90 | [ ] |
| SEO | ≥ 95 | [ ] |
| LCP (Largest Contentful Paint) | < 2.5s | [ ] |
| CLS (Cumulative Layout Shift) | < 0.1 | [ ] |
| FID/INP | < 200ms | [ ] |

Se alguma meta não for atingida, registrar e corrigir antes de publicar.

---

## ✅ BLOCO 8 — SEGURANÇA E BOAS PRÁTICAS

- [ ] Arquivo `.env` não commitado no Git (verificar `.gitignore`)
- [ ] Arquivo `.env.example` commitado (sem valores reais)
- [ ] Webhook URL não exposta no código-fonte (usando `import.meta.env`)
- [ ] HTTPS configurado no domínio
- [ ] Política de privacidade linkada no formulário
- [ ] Headers de segurança configurados no servidor (X-Frame-Options, etc.)

---

## ✅ BLOCO 9 — DEPLOY FINAL

- [ ] Build de produção gerado sem erros (`npm run build`)
- [ ] Preview do build testado localmente (`npm run preview`)
- [ ] Deploy realizado na plataforma: [Vercel / Netlify / outro]
- [ ] Domínio personalizado configurado e apontando corretamente
- [ ] SSL ativo (cadeado verde no browser)
- [ ] Teste final em produção com URL real
- [ ] Todos os itens dos blocos anteriores validados em produção

---

## ASSINATURA

**Responsável pelo QA:** ___________________
**Data de conclusão:** ___________________
**LP publicada em:** ___________________
