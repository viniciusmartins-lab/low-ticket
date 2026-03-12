/**
 * [9] FAQ — 03_CONTENT.md (textos exatos) + cursor-rules.
 */
import { SectionWrapper } from '../ui/SectionWrapper';
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

const items = [
  { q: 'O que esse Checklist vai mudar no meu consultório?', a: 'Ele muda a forma como o paciente percebe você. Você deixa de ser "mais um dentista" e passa a ser visto como referência. Na prática, isso significa: Mais confiança na primeira consulta, menos negociação de preço, mais fidelização e, principalmente, mais conversão de orçamentos. Você não muda apenas o ambiente. Você muda a experiência do paciente no seu consultório. E quando a experiência muda, o resultado financeiro acompanha.' },
  { q: 'Funciona para consultórios pequenos?', a: 'Sim. O jogo não é de metragem — é de detalhes. Você não precisa de estrutura luxuosa, precisa de estratégia aplicada com inteligência para aumentar a percepção de valor que o paciente tem sobre seu consultório e seu trabalho.' },
  { q: 'Preciso investir muito dinheiro para aplicar o Checklist?', a: 'Não. O método é baseado em ajustes de alto impacto e baixo custo. Você implementa por prioridade, sem reformas desnecessárias.' },
  { q: 'Quanto tempo preciso para colocar em prática?', a: 'A proposta é simples: melhorias estratégicas, aplicáveis na rotina real de quem atende o dia inteiro. Clareza que reduz esforço.' },
  { q: 'Isso realmente me ajuda a cobrar mais?', a: 'Sim. Pois as mudanças são pensadas para aumentar a percepção de valor que o paciente tem sobre seu negócio. Quando o paciente sente que está em um lugar diferente, ele compara menos, negocia menos e paga mais.' },
  { q: 'E se eu já tiver pacientes?', a: 'Melhor ainda. O método aumenta a conversão de orçamentos, fidelização e indicações. Não é apenas sobre atrair, é sobre aumentar a sua conversão.' },
  { q: 'Em quanto tempo começo a ver resultados?', a: 'Alguns ajustes geram impacto imediato na postura do paciente. Outros são cumulativos. Mas a mudança na percepção costuma ser sentida nas primeiras semanas.' },
];

export function FAQ() {
  return (
    <SectionWrapper variant="light">

      {/* Header — layout 2 colunas no desktop */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <LabelTag className="mb-3">✦ FAQ</LabelTag>
          <h2
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px] max-w-[480px]"
            style={{ color: 'var(--color-neutral-900)' }}
          >
            Perguntas{' '}
            <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
              frequentes
            </em>
          </h2>
        </div>
        <p
          className="max-w-[320px] text-sm leading-relaxed md:text-right"
          style={{ color: 'var(--color-neutral-400)' }}
        >
          Tire suas dúvidas sobre o Checklist Consultório que Encanta antes de baixar.
        </p>
      </div>

      {/* Accordion */}
      <RevealOnScroll className="space-y-3 max-w-3xl mx-auto">
        {items.map(({ q, a }, index) => (
          <Disclosure key={q} as="div">
            {({ open }) => (
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: open ? 'rgba(194,176,103,0.06)' : 'rgba(255,255,255,0.8)',
                  border: open
                    ? '1px solid rgba(194,176,103,0.35)'
                    : '1px solid rgba(29,22,0,0.08)',
                }}
              >
                <DisclosureButton className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' }}
                >
                  {/* Número + pergunta */}
                  <div className="flex items-center gap-4">
                    <span
                      className="shrink-0 text-xs font-bold tabular-nums"
                      style={{ color: 'rgba(194,176,103,0.5)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-[15px] font-medium leading-snug"
                      style={{ color: 'var(--color-neutral-900)' }}
                    >
                      {q}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className="faq-chevron h-5 w-5 shrink-0 ml-4 transition-transform duration-200"
                    style={{ color: 'var(--color-primary)' }}
                  />
                </DisclosureButton>

                <DisclosurePanel
                  className="px-6 pb-5"
                  style={{ paddingLeft: 'calc(24px + 28px)' }} // alinha com o texto da pergunta
                >
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    {a}
                  </p>
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </RevealOnScroll>

    </SectionWrapper>
  );
}
