/**
 * [5] COMO FUNCIONA — 03_CONTENT.md + cursor-rules.
 */
import { SectionWrapper } from '../ui/SectionWrapper';
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const steps = [
  { step: '01', title: 'Acesse o Checklist', description: 'Receba acesso imediato aos 64 pontos que influenciam diretamente a forma como o paciente percebe o seu consultório.' },
  { step: '02', title: 'Identifique e Priorize', description: 'O método organiza os pontos de forma estratégica e aplicável, mostrando exatamente o que ajustar e o que priorizar primeiro.' },
  { step: '03', title: 'Aplique e Transforme', description: 'Implemente os ajustes certos, na ordem certa, e transforme sua estrutura em um ativo que sustenta seu faturamento.' },
];

export function HowItWorks() {
  return (
    <SectionWrapper variant="light">

      {/* Header */}
      <div className="section-header text-center">
        <LabelTag className="mb-3">✦ Processo</LabelTag>
        <h2
          className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
          style={{ color: 'var(--color-neutral-900)' }}
        >
          O Checklist{' '}
          <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
            Consultório que Encanta
          </em>
        </h2>
      </div>

      {/* Timeline horizontal no desktop, vertical no mobile */}
      <div className="mt-16 max-w-4xl mx-auto">

        {/* Linha conectora — só desktop */}
        <div className="hidden md:flex items-start justify-between relative mb-0">
          {/* Linha de fundo */}
          <div
            className="absolute top-7 left-[calc(16.6%)] right-[calc(16.6%)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(194,176,103,0.4), rgba(194,176,103,0.15), rgba(194,176,103,0.4))' }}
            aria-hidden="true"
          />

          {steps.map(({ step, title, description }) => (
            <RevealOnScroll key={step} className="flex flex-col items-center text-center w-1/3 px-6">

              {/* Número círculo */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-lg font-extrabold"
                style={{
                  background: 'linear-gradient(135deg, rgba(194,176,103,0.2) 0%, rgba(194,176,103,0.08) 100%)',
                  border: '1px solid rgba(194,176,103,0.4)',
                  color: 'var(--color-primary)',
                  fontFamily: 'Stark, serif',
                }}
              >
                {step}
              </div>

              <h3
                className="font-heading text-lg font-semibold leading-snug mb-2"
                style={{ color: 'var(--color-neutral-900)' }}
              >
                {title}
              </h3>
              <p
                className="text-[clamp(13px,1vw,15px)] leading-relaxed"
                style={{ color: 'var(--color-neutral-700)' }}
              >
                {description}
              </p>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile: vertical com linha lateral */}
        <div className="flex flex-col gap-0 md:hidden relative">
          {/* Linha vertical */}
          <div
            className="absolute left-6 top-7 bottom-7 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(194,176,103,0.4), rgba(194,176,103,0.1), rgba(194,176,103,0.4))' }}
            aria-hidden="true"
          />

          {steps.map(({ step, title, description }, index) => (
            <RevealOnScroll key={step}>
              <div className="flex gap-6 py-8" style={{ borderBottom: index < steps.length - 1 ? '1px solid rgba(194,176,103,0.1)' : 'none' }}>

                {/* Número círculo */}
                <div
                  className="relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-base font-extrabold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(194,176,103,0.2) 0%, rgba(194,176,103,0.06) 100%)',
                    border: '1px solid rgba(194,176,103,0.4)',
                    color: 'var(--color-primary)',
                    fontFamily: 'Stark, serif',
                  }}
                >
                  {step}
                </div>

                <div className="flex flex-col gap-1 justify-center">
                  <h3
                    className="font-heading text-lg font-semibold leading-snug"
                    style={{ color: 'var(--color-neutral-900)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[clamp(14px,1vw,15px)] leading-relaxed"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
