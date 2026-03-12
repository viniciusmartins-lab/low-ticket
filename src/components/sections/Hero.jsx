/**
 * [2] HERO — 03_CONTENT.md + cursor-rules (tag, H1, subtitle, CTAs, social proof).
 */
import { Button } from '../ui/Button';
import { LabelTag } from '../ui/LabelTag';
import { trackEvent } from '../../lib/analytics';

export function Hero() {
  const handleCtaClick = () => {
    trackEvent('click_cta_hero', { button_text: 'Quero meu checklist', page_location: window.location.href });
  };

  return (
    // Removida classe "hero" para não conflitar com o background do CSS global
    // As animações .hero-tag, .hero-title etc. continuam funcionando normalmente
    <section className="relative w-full overflow-hidden flex items-center justify-center">

      {/* Background: imagem + gradiente do .hero sobreposto */}
      <div
        className="hero-bg absolute inset-0 w-full h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/socios/Ricardo/DSC06143.jpg)',
          backgroundPosition: 'center 30%',
        }}
        aria-hidden="true"
      />

      {/* Overlay branco para legibilidade do texto */}
      <div className="hero-overlay absolute inset-0 w-full h-full bg-white/90" aria-hidden="true" />

      {/* Gradiente do tema (replica o .hero CSS) sobreposto à imagem */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 80% 50%, rgba(194,176,103,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(194,176,103,0.04) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 md:px-20 py-12 gap-4">

        {/* Tag */}
        <LabelTag className="hero-tag">
          ● Checklist Consultório que Encanta
        </LabelTag>

        {/* H1 */}
        <h1
          className="hero-title text-[clamp(1.4rem,2.6vw,2.4rem)] font-extrabold leading-[1.15] tracking-wider uppercase max-w-[860px]"
          style={{ fontFamily: 'Stark, serif', color: 'var(--color-neutral-900)' }}
        >
          Aprenda como transformar o seu consultório em um ambiente que encanta seus pacientes e{' '}
          <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
            tenha até 3x mais conversão
          </em>
        </h1>

        {/* Separador */}
        <div
          className="w-12 h-[2px] rounded-full opacity-40"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />

        {/* Subtítulo */}
        <p
          className="hero-sub max-w-[500px] text-[clamp(13px,1vw,15px)] leading-relaxed"
          style={{ color: 'var(--color-neutral-700)' }}
        >
          De consultório comum a referência na sua cidade: ajuste a experiência do paciente, aumente o valor percebido, pare de disputar preço e feche mais orçamentos.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap justify-center gap-4">
          <Button href="#formulario" variant="primary" onClick={handleCtaClick}>
            Quero meu checklist
          </Button>
        </div>

        {/* Prova social */}
        <div
          className="text-xs tracking-wide"
          style={{ color: 'var(--color-neutral-400)' }}
        >
          +15.000 dentistas impactados em todo o Brasil
        </div>

      </div>
    </section>
  );
}
