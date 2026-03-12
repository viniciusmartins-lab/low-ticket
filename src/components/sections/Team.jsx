/**
 * [6] EQUIPE / SÓCIOS — 03_CONTENT.md. Foto: socios/Ricardo (02_BRAND).
 */
import { SectionWrapper } from '../ui/SectionWrapper';
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const stats = [
  { value: '15+', label: 'Anos de atuação' },
  { value: '15k+', label: 'Dentistas impactados' },
  { value: '3', label: 'Programas exclusivos' },
];

export function Team() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-6 md:px-20"
      style={{
        background: 'linear-gradient(135deg, #1a1400 0%, #2a2000 40%, #1d1600 70%, #0e0e0e 100%)',
      }}
    >
      {/* Brilho radial dourado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(194,176,103,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="section-header text-center mb-16">
          <LabelTag className="mb-3" style={{ color: 'var(--color-primary)' }}>✦ Idealizador</LabelTag>
          <h2
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
            style={{ color: '#ffffff' }}
          >
            Ricardo Novack:{' '}
            <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
              o idealizador
            </em>{' '}
            do SucessOdonto
          </h2>
        </div>

        {/* Layout principal */}
        <RevealOnScroll className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">

          {/* Foto com borda e brilho */}
          <div className="relative shrink-0 w-full max-w-[300px] mx-auto md:mx-0">
            {/* Borda dourada decorativa atrás */}
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-3xl"
              style={{ border: '1px solid rgba(194,176,103,0.25)' }}
              aria-hidden="true"
            />
            <img
              src="/assets/socios/Ricardo/DSC05734.jpg"
              alt="Ricardo Novack — Fundador da Pós Graduação SucessOdonto e CEO do Grupo ICOM"
              width={300}
              height={400}
              loading="lazy"
              className="relative z-10 w-full rounded-3xl object-cover"
              style={{ aspectRatio: '3/4' }}
            />
            {/* Badge sobre a foto */}
            <div
              className="absolute z-20 -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold tracking-wider"
              style={{
                background: 'linear-gradient(135deg, rgba(194,176,103,0.95), rgba(180,160,80,0.95))',
                color: 'var(--color-neutral-900)',
              }}
            >
              CEO · Grupo ICOM
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col gap-6 pt-4">

            {/* Nome e cargo */}
            <div>
              <h3
                className="font-heading text-2xl font-bold"
                style={{ color: '#ffffff' }}
              >
                Ricardo Novack
              </h3>
              <p
                className="mt-1 text-sm font-medium tracking-wide"
                style={{ color: 'var(--color-primary)' }}
              >
                Fundador da Pós Graduação SucessOdonto e CEO do Grupo ICOM
              </p>
            </div>

            {/* Linha separadora */}
            <div
              className="w-16 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(194,176,103,0.6), transparent)' }}
            />

            {/* Bio */}
            <p
              className="text-[clamp(14px,1.1vw,16px)] leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Com mais de 15 anos de atuação no setor, Ricardo já impactou mais de 15.000 dentistas em todo o país por meio de cursos, mentorias, pós-graduações e programas de aceleração empresarial. Sua metodologia reúne estratégias de marketing, posicionamento, gestão financeira e liderança, com foco em crescimento previsível e sustentável. É também cofundador da MBA Select, grupo exclusivo voltado a dentistas de alto faturamento.
            </p>

            {/* Stats */}
            <div className="mt-2 flex gap-6 flex-wrap">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-0.5 px-5 py-3 rounded-2xl"
                  style={{
                    background: 'rgba(194,176,103,0.07)',
                    border: '1px solid rgba(194,176,103,0.15)',
                  }}
                >
                  <span
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: 'var(--color-primary)', fontFamily: 'Stark, serif' }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-xs tracking-wide"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
