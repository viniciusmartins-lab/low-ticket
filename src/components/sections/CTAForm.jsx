/**
 * [10] CTA FINAL — 03_CONTENT.md
 * Apenas botão CTA, sem formulário.
 */
import { Button } from '../ui/Button';
import { LabelTag } from '../ui/LabelTag';
import { trackEvent } from '../../lib/analytics';
import { ShieldCheck, Download, Zap } from 'lucide-react';

const guarantees = [
  { icon: ShieldCheck, text: 'Dados 100% seguros' },
  { icon: Zap, text: 'Acesso imediato' },
  { icon: Download, text: 'Download direto' },
];

export function CTAForm() {
  const handleCtaClick = () => {
    trackEvent('click_cta_final', {
      button_text: 'Quero meu checklist',
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    });
  };

  return (
    <section
      id="formulario"
      className="relative w-full overflow-hidden py-24 px-6 md:px-20 scroll-mt-24"
      style={{
        background: 'linear-gradient(135deg, #1a1400 0%, #2a2000 40%, #1d1600 70%, #0e0e0e 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(194,176,103,0.1) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center text-center gap-6">

        <LabelTag style={{ color: 'var(--color-primary)' }}>✦ Garanta o seu</LabelTag>

        <h2
          className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
          style={{ color: '#ffffff' }}
        >
          Transforme seu consultório em um ambiente que{' '}
          <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
            encanta e converte
          </em>
        </h2>

        <div className="flex flex-col items-center gap-1">
          <span className="text-sm line-through" style={{ color: 'rgba(255,255,255,0.3)' }}>
            De R$ 97,00
          </span>
          <div className="flex items-end gap-2">
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>por apenas</span>
            <span
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none"
              style={{ color: 'var(--color-primary)', fontFamily: 'Stark, serif' }}
            >
              R$ 27
            </span>
            <span className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>à vista</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full max-w-[400px]">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(194,176,103,0.3))' }} />
          <span style={{ color: 'rgba(194,176,103,0.4)', fontSize: '14px' }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(194,176,103,0.3))' }} />
        </div>

        <Button href="#formulario" variant="primary" onClick={handleCtaClick} className="text-base px-10 py-4">
          Quero meu checklist
        </Button>

        <div className="flex flex-wrap justify-center gap-5 mt-2">
          {guarantees.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4" style={{ color: 'rgba(194,176,103,0.6)' }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
