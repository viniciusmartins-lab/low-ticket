/**
 * [7] DEPOIMENTOS — 03_CONTENT.md
 */
import { SectionWrapper } from '../ui/SectionWrapper';
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Depois de aplicar o checklist, meus pacientes começaram a comentar espontaneamente sobre o ambiente. Em 30 dias, fechei 3 orçamentos que antes eu perderia.',
    name: 'Dra. Fernanda Lopes',
    role: 'Dentista · São Paulo, SP',
    stars: 5,
    initial: 'F',
  },
  {
    text: 'Eu achava que meu consultório estava bom. O checklist me mostrou 12 pontos que eu nunca tinha percebido. A experiência do paciente mudou completamente.',
    name: 'Dr. Bruno Meireles',
    role: 'Dentista · Curitiba, PR',
    stars: 5,
    initial: 'B',
  },
  {
    text: 'O material é direto e aplicável. Sem enrolação. Já na primeira semana consegui identificar o que estava afastando pacientes de alto valor do meu consultório.',
    name: 'Dra. Camila Rocha',
    role: 'Dentista · Belo Horizonte, MG',
    stars: 5,
    initial: 'C',
  },
];

export function Testimonials() {
  return (
    <SectionWrapper variant="alternate">

      {/* Header */}
      <div className="section-header text-center">
        <LabelTag className="mb-3">✦ Depoimentos</LabelTag>
        <h2
          className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
          style={{ color: 'var(--color-neutral-900)' }}
        >
          O que dizem os dentistas que já{' '}
          <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
            transformaram seus consultórios
          </em>
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealOnScroll key={i}>
            <div
              className="relative flex flex-col gap-5 rounded-2xl p-6 h-full transition-all duration-300"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(194,176,103,0.2)',
                boxShadow: '0 2px 20px rgba(29,22,0,0.05)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(194,176,103,0.45)';
                e.currentTarget.style.boxShadow = '0 4px 32px rgba(194,176,103,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(194,176,103,0.2)';
                e.currentTarget.style.boxShadow = '0 2px 20px rgba(29,22,0,0.05)';
              }}
            >
              {/* Linha dourada topo */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(194,176,103,0.5), transparent)' }}
              />

              {/* Aspas decorativas */}
              <span
                className="text-5xl leading-none font-serif select-none"
                style={{ color: 'rgba(194,176,103,0.25)', lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Estrelas */}
              <div className="flex gap-0.5 -mt-3" aria-label={`${t.stars} estrelas`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" style={{ color: 'var(--color-primary)' }} />
                ))}
              </div>

              {/* Texto */}
              <blockquote
                className="flex-1 text-[clamp(14px,1vw,15px)] leading-relaxed"
                style={{ color: 'var(--color-neutral-700)' }}
              >
                {t.text}
              </blockquote>

              {/* Divisor */}
              <div
                className="w-full h-px"
                style={{ background: 'rgba(194,176,103,0.15)' }}
              />

              {/* Autor */}
              <footer className="flex items-center gap-3">
                {/* Avatar inicial */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(194,176,103,0.2), rgba(194,176,103,0.08))',
                    color: 'var(--color-primary)',
                    border: '1px solid rgba(194,176,103,0.3)',
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <cite
                    className="not-italic text-sm font-bold block"
                    style={{ color: 'var(--color-neutral-900)' }}
                  >
                    {t.name}
                  </cite>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--color-neutral-400)' }}
                  >
                    {t.role}
                  </p>
                </div>
              </footer>
            </div>
          </RevealOnScroll>
        ))}
      </div>

    </SectionWrapper>
  );
}
