/**
 * [8] NÚMEROS / RESULTADOS — 03_CONTENT.md.
 */
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const stats = [
  { value: '15.000+', label: 'Dentistas impactados em todo o Brasil' },
  { value: '15+', label: 'Anos de atuação no setor odontológico' },
  { value: '64', label: 'Pontos estratégicos mapeados no Checklist' },
  { value: '3x', label: 'Mais conversão de orçamentos com o método' },
];

export function Stats() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-6 md:px-20"
      style={{
        background: 'linear-gradient(135deg, #1a1400 0%, #2a2000 40%, #1d1600 70%, #0e0e0e 100%)',
      }}
    >
      {/* Brilho central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(194,176,103,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="section-header text-center mb-16">
          <LabelTag className="mb-3" style={{ color: 'var(--color-primary)' }}>✦ Resultados</LabelTag>
          <h2
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
            style={{ color: '#ffffff' }}
          >
            SucessOdonto{' '}
            <em className="not-italic" style={{ color: 'var(--color-primary)' }}>em números</em>
          </h2>
        </div>

        {/* Stats — cards individuais */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {stats.map(({ value, label }) => (
            <RevealOnScroll key={label} className="h-full">
              <div
                className="flex flex-col items-center justify-center text-center gap-3 px-6 py-10 rounded-2xl transition-all duration-300 h-full"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(194,176,103,0.15)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(194,176,103,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(194,176,103,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(194,176,103,0.15)';
                }}
              >
                <span
                  className="text-[clamp(2.8rem,5vw,4rem)] font-extrabold leading-none"
                  style={{
                    color: 'var(--color-primary)',
                    fontFamily: 'Stark, serif',
                    letterSpacing: '-1px',
                  }}
                >
                  {value}
                </span>

                <div className="w-8 h-px" style={{ background: 'rgba(194,176,103,0.35)' }} />

                <p
                  className="text-sm leading-relaxed max-w-[140px]"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
