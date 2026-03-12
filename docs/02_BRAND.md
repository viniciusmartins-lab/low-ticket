# 02 — IDENTIDADE VISUAL (BRAND)
> Extraído do manual de identidade da New SucessOdonto 2024.
> Este arquivo é a fonte de verdade para TODO o design da LP.

---

## CORES

```css
/* Paleta principal — valores extraídos do manual New SucessOdonto 2024 */

--color-primary:        #C2B067;   /* Dourado principal da marca */
--color-primary-dark:   #B9A862;   /* Variação escura para hover */
--color-primary-light:  #EDECEA;   /* Variação clara para fundos */

--color-secondary:      #7F7F80;   /* Cinza médio de apoio */
--color-secondary-dark: #4B4B4A;   /* Cinza escuro */
--color-secondary-light:#EDECEA;   /* Bege claro */

--color-neutral-900:    #1D1600;   /* Texto principal (quase preto / marrom escuro) */
--color-neutral-700:    #4B4B4A;   /* Texto secundário */
--color-neutral-400:    #7F7F80;   /* Texto desabilitado / placeholder */
--color-neutral-100:    #EDECEA;   /* Fundo de seções alternadas */
--color-neutral-white:  #FFFFFF;

--color-success:        #25D366;   /* Verde (referência WhatsApp / sucesso) */
--color-error:          #D32F2F;   /* Vermelho padrão para erros */

/* Cor extra do manual */
--color-black:          #000000;   /* Preto puro */
```

**Combinações permitidas (contraste acessível WCAG AA):**
- Primária (#C2B067) sobre branco: ✅ Verificar contraste (usar preferencialmente texto escuro sobre primária)
- Texto escuro (#1D1600) sobre primária light (#EDECEA): ✅ Aprovado
- Texto branco sobre neutro-900 (#1D1600): ✅ Aprovado
- Texto escuro sobre bege (#EDECEA): ✅ Aprovado

> ⚠️ O manual determina: **não use códigos de cor fora da paleta definida acima.**

---

## TIPOGRAFIA

**Fonte principal — títulos:**
- Nome: **Stark**
- Fonte: Custom / verificar disponibilidade (pode requerer licença)
- Pesos utilizados: Semi Bold, Bold, Extra Bold
- Uso: Títulos, marcadores de lista, lower thirds, tópicos

**Fonte secundária — corpo de texto:**
- Nome: **Open Sans**
- Fonte Google Fonts
- Import URL: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap`
- Pesos utilizados: Light (300), Regular (400), Bold (700)
- Uso: Textos corridos, parágrafos, legendas

**Hierarquia tipográfica sugerida:**

| Elemento  | Fonte     | Peso       | Tamanho Desktop | Tamanho Mobile |
|-----------|-----------|------------|-----------------|----------------|
| H1        | Stark     | Extra Bold | 48px / 3rem     | 32px / 2rem    |
| H2        | Stark     | Bold       | 36px / 2.25rem  | 26px / 1.625rem|
| H3        | Stark     | Semi Bold  | 24px / 1.5rem   | 20px / 1.25rem |
| Body      | Open Sans | Regular    | 16px / 1rem     | 15px / 0.938rem|
| Small     | Open Sans | Light      | 14px / 0.875rem | 13px / 0.813rem|
| CTA/Botão | Stark     | Bold       | 16px / 1rem     | 15px / 0.938rem|

---

## ESTRUTURA DE PASTAS (`/public/assets/`)

```
public/
└── assets/
    ├── elementos/          ← Grafismos do manual (triângulo, colmeia, estrelas, formas)
    ├── fontes/             ← Arquivo da fonte Stark (custom)
    ├── logo/               ← Variações do logotipo
    │   ├── LOGO.ai                  (arquivo original Illustrator)
    │   ├── PNG - Negativo.png       (logo branco — usar em fundos escuros)
    │   ├── PNG - Positivo.png       (logo colorido — usar em fundos claros)
    │   └── PNG - Preto.png          (logo preto — uso alternativo)
    ├── materiais_personalizados/   ← Artes e peças customizadas
    └── socios/             ← Fotos dos sócios por subpasta
        └── Ricardo/
            ├── DSC02833.jpg
            ├── DSC05676.jpg
            ├── DSC05734.jpg
            ├── DSC06036.jpg
            ├── DSC06038.jpg
            └── DSC06143.jpg
```

---

## LOGO

**Arquivos disponíveis** (em `/public/assets/logo/`):
- `PNG - Positivo.png` — versão colorida (fundo claro) ✅ uso principal
- `PNG - Negativo.png` — versão branca (fundo escuro/colorido)
- `PNG - Preto.png` — versão preta (uso alternativo monocromático)
- `LOGO.ai` — arquivo fonte editável (Illustrator)

**Dimensões de uso:**
- Header desktop: máx. 200px largura x 60px altura
- Header mobile: máx. 140px largura x 44px altura
- Área de proteção mínima: espaçamento equivalente à altura da letra "N" do logotipo

**Restrições (conforme manual):**
- Não distorcer ou alterar proporções
- Não alterar as cores do logotipo
- Usar apenas as variações aprovadas (Positivo, Negativo ou Preto)
- Não aplicar sombras, contornos ou efeitos adicionais
- Não usar sobre fundos com baixo contraste

---

## FOTOS DOS SÓCIOS

**Ricardo** — `/public/assets/socios/Ricardo/`

| Arquivo      | Indicação de uso sugerida         |
|--------------|-----------------------------------|
| DSC02833.jpg | Foto em pé / palco (grande angular)|
| DSC05676.jpg | Foto expressiva / discurso        |
| DSC05734.jpg | Foto falando / apresentação       |
| DSC06036.jpg | Foto em ambiente externo          |
| DSC06038.jpg | Foto próxima / recortável         |
| DSC06143.jpg | Foto com contexto de fundo        |

> 💡 Converter para WebP antes de usar na LP para melhor performance. Proporção recomendada: 3:4 (retrato).

---

## ESPAÇAMENTO E GRID

**Grid base:** 8px
**Largura máxima do container:** 1200px
**Padding lateral (mobile):** 24px
**Padding lateral (desktop):** 80px (ou automático centralizado)

**Espaçamento entre seções:**
- Desktop: 96px (py-24)
- Mobile: 64px (py-16)

---

## BORDAS E SOMBRAS

**Border radius padrão (botões, cards):** 8px / `rounded-lg`
**Border radius grande (seções, hero):** 16px / `rounded-2xl`

**Sombra padrão dos cards:**
```css
box-shadow: 0 4px 16px rgba(29, 22, 0, 0.10);
```

---

## ESTILO DE IMAGENS

- Estilo fotográfico: Ambientes clínicos modernos, profissionais de saúde, pacientes satisfeitos, fundo claro
- Tratamento de cor: Sem filtro excessivo / leve tom quente alinhado ao dourado da marca
- Formato recomendado para a web: WebP (com fallback JPG)
- Proporção fotos de sócios/equipe: 1:1 ou 3:4
- Proporção hero banner: 16:9 ou full-height

---

## ELEMENTOS GRÁFICOS (conforme manual)

O manual define 4 elementos gráficos de apoio que podem ser usados em materiais digitais e impressos:

1. **O Triângulo** — pode ser usado como grafismo em qualquer direção. Não alterar espessura nem substituir por outro triângulo.
2. **A Colmeia** — padrão hexagonal decorativo.
3. **As 7 Estrelas** — elemento decorativo com 7 estrelas.
4. **Formas Geométricas** — formas de apoio para composições.

> ⚠️ Usar apenas os elementos gráficos definidos no manual. Não criar variações.

---

## ÍCONES

- Biblioteca preferida: Lucide React (compatível com o estilo limpo da marca)
- Estilo: Outline
- Tamanho padrão: 24px
- Cor padrão: `--color-primary` (#C2B067) ou `--color-neutral-700` (#4B4B4A)

---

## BOTÕES

**Primário:**
```
Fundo: --color-primary (#C2B067)
Texto: --color-neutral-900 (#1D1600) ou branco — verificar contraste
Hover: --color-primary-dark (#B9A862)
Border-radius: 8px
Padding: 14px 32px
Fonte: Stark Bold
```

**Secundário / Outline:**
```
Fundo: transparente
Borda: --color-primary (#C2B067) — 2px solid
Texto: --color-primary (#C2B067)
Hover: fundo --color-primary-light (#EDECEA)
Border-radius: 8px
```

**WhatsApp:**
```
Fundo: #25D366
Texto: branco
Ícone: WhatsApp à esquerda (24px)
Border-radius: 8px
Padding: 14px 32px
```
