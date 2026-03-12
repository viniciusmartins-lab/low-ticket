/**
 * [3] PROBLEMA / DOR — 03_CONTENT.md + cursor-rules (label, H2, conteúdo com reveal).
 */
import { SectionWrapper } from '../ui/SectionWrapper';
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const problems = [
  {
    number: '01',
    title: 'Paciente sempre pedindo desconto',
    description: 'Não importa se é um procedimento simples ou um tratamento de alto valor. Ele escuta o preço… e a primeira reação é negociar.',
  },
  {
    number: '02',
    title: 'Paciente que faz o orçamento e NUNCA mais volta',
    description: 'Você ainda faz o follow-up. Manda mensagem. Tenta retomar. E mesmo assim, ele some.',
  },
  {
    number: '03',
    title: 'O paciente nunca te indica',
    description: 'Ele paga o tratamento certinho, mas nunca trouxe nenhum cliente.',
  },
];

export function Problem() {
  return (
    <SectionWrapper variant="light" className="scroll-mt-24" id="problema">

      {/* Header */}
      <div className="section-header text-center">
        <LabelTag className="mb-3">✦ Situações comuns</LabelTag>
        <h2
          className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
          style={{ color: 'var(--color-neutral-900)' }}
        >
          Alguma dessas situações acontece com você?
        </h2>
      </div>

      <RevealOnScroll className="mt-12 max-w-3xl mx-auto">

        {/* Lista com números grandes */}
        <ul className="space-y-0" role="list">
          {problems.map((item, index) => (
            <li
              key={item.number}
              className="relative flex gap-8 py-14"
              style={{
                borderTop: '1px solid rgba(194,176,103,0.2)',
                borderBottom: index === problems.length - 1 ? '1px solid rgba(194,176,103,0.2)' : 'none',
              }}
            >
              {/* Número grande como âncora visual */}
              <span
                className="shrink-0 w-16 text-[clamp(3.5rem,7vw,5rem)] font-extrabold leading-none select-none"
                style={{
                  color: 'var(--color-primary)',
                  opacity: 0.3,
                  fontFamily: 'Stark, serif',
                  letterSpacing: '-2px',
                }}
                aria-hidden="true"
              >
                {item.number}
              </span>

              {/* Conteúdo */}
              <div className="flex flex-col justify-center gap-2">
                <strong
                  className="text-[clamp(15px,1.1vw,17px)] font-bold leading-snug"
                  style={{ color: 'var(--color-neutral-900)' }}
                >
                  {item.title}
                </strong>
                <span
                  className="text-[clamp(14px,1vw,16px)] leading-relaxed"
                  style={{ color: 'var(--color-neutral-700)' }}
                >
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Conclusão — abaixo da lista */}
        <div className="mt-10 flex flex-col items-center gap-5">

          {/* Frase em destaque — gradiente suave com borda dourada */}
          <div
            className="w-full rounded-3xl px-10 py-9 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(194,176,103,0.12) 0%, rgba(194,176,103,0.04) 50%, rgba(29,22,0,0.06) 100%)',
              border: '1px solid rgba(194,176,103,0.25)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <p
              className="text-[clamp(15px,1.2vw,18px)] font-semibold leading-relaxed"
              style={{ color: 'var(--color-neutral-900)' }}
            >
              Até a conclusão do tratamento, a qualidade da sua estrutura e a sua postura ditam a{' '}
              <em className="not-italic font-bold" style={{ color: 'var(--color-primary)' }}>
                percepção dos seus pacientes.
              </em>
            </p>
          </div>

          {/* Divisor com linha + ícone */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(194,176,103,0.3))' }} />
            <span style={{ color: 'rgba(194,176,103,0.5)', fontSize: '18px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(194,176,103,0.3))' }} />
          </div>

          {/* Frase de impacto */}
          <p
            className="text-center text-[clamp(15px,1.2vw,17px)] font-bold leading-relaxed"
            style={{ color: 'var(--color-neutral-900)' }}
          >
            E saber disso pode fazer você lucrar até 3x mais
          </p>

        </div>

      </RevealOnScroll>
    </SectionWrapper>
  );
}
