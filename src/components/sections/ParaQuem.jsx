/**
 * PARA QUEM É O CHECKLIST — 03_CONTENT.md + cursor-rules.
 */
import { SectionWrapper } from '../ui/SectionWrapper';
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Check } from 'lucide-react';

const items = [
  { text: 'Dentistas que desejam parar de disputar preço e ganhar na qualidade' },
  { text: 'Clínicas que querem aumentar o ticket médio dos serviços prestados' },
  { text: 'Profissionais que querem elevar o nível da experiência do paciente' },
  { text: 'Quem deseja crescer com posicionamento, não com desconto' },
];

export function ParaQuem() {
  return (
    <SectionWrapper variant="alternate">

      {/* Header */}
      <div className="section-header text-center">
        <LabelTag className="mb-3">✦ Público</LabelTag>
        <h2
          className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
          style={{ color: 'var(--color-neutral-900)' }}
        >
          Para quem é o{' '}
          <em className="not-italic" style={{ color: 'var(--color-primary)' }}>Checklist</em>
        </h2>
        <p
          className="mx-auto mt-4 max-w-[480px] text-[clamp(14px,1vw,16px)] leading-relaxed"
          style={{ color: 'var(--color-neutral-700)' }}
        >
          Se você se identifica com algum desses perfis, esse material foi feito para você.
        </p>
      </div>

      {/* Grid 2 colunas */}
      <RevealOnScroll className="mx-auto mt-12 max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ text }, index) => (
            <div
              key={text}
              className="group flex gap-4 rounded-2xl p-5 transition-all duration-300"
              style={{
                background: 'rgba(194,176,103,0.06)',
                border: '1px solid rgba(194,176,103,0.15)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(194,176,103,0.12)';
                e.currentTarget.style.borderColor = 'rgba(194,176,103,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(194,176,103,0.06)';
                e.currentTarget.style.borderColor = 'rgba(194,176,103,0.15)';
              }}
            >
              {/* Ícone check */}
              <div
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: 'rgba(194,176,103,0.15)' }}
              >
                <Check className="w-4 h-4" style={{ color: 'var(--color-primary)' }} strokeWidth={2.5} />
              </div>

              {/* Texto */}
              <p
                className="text-[clamp(14px,1vw,15px)] leading-relaxed"
                style={{ color: 'var(--color-neutral-700)' }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

    </SectionWrapper>
  );
}
