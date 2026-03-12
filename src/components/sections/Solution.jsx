/**
 * [4] SOLUÇÃO / BENEFÍCIOS — 03_CONTENT.md + cursor-rules (label, H2, cards).
 */
import { LabelTag } from '../ui/LabelTag';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Shield, Star, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: Shield, title: 'Fachada & Recepção', description: 'Uma fachada bem cuidada e recepção acolhedora constroem confiança antes mesmo de o paciente sentar na cadeira.' },
  { icon: Star, title: 'Detalhes que diferenciam', description: 'Água gelada, estofado conservado, iluminação adequada — cada detalhe tem o poder de construir ou destruir a percepção de valor.' },
  { icon: Zap, title: 'Comunicação Visual & Equipe', description: 'Tecnologia, postura da equipe e comunicação visual estruturada trabalham juntos para elevar sua autoridade.' },
  { icon: TrendingUp, title: 'Aumente sua Conversão', description: 'Quando a experiência muda, o resultado financeiro acompanha: mais confiança, menos negociação, mais indicações.' },
];

export function Solution() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-6 md:px-20"
      style={{
        background: 'linear-gradient(135deg, #1a1400 0%, #2a2000 40%, #1d1600 70%, #0e0e0e 100%)',
      }}
    >
      {/* Brilho dourado sutil no fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(194,176,103,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="section-header text-center">
          <LabelTag className="mb-3" style={{ color: 'var(--color-primary)' }}>✦ Benefícios</LabelTag>
          <h2
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight md:tracking-[-1.5px]"
            style={{ color: '#ffffff' }}
          >
            Não é sobre técnica.{' '}
            <em className="not-italic" style={{ color: 'var(--color-primary)' }}>
              É sobre percepção.
            </em>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[560px] text-[clamp(15px,1.2vw,17px)] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Dentista, seu consultório pode estar espantando os pacientes em silêncio. E o pior: você nem percebe.
          </p>
        </div>

        {/* Cards glassmorphism */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {benefits.map(({ icon: Icon, title, description }) => (
            <RevealOnScroll key={title} className="h-full">
              <div
                className="group relative flex flex-col gap-4 rounded-2xl p-6 h-full transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(194,176,103,0.15)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(194,176,103,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(194,176,103,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(194,176,103,0.15)';
                }}
              >
                {/* Linha dourada topo */}
                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(194,176,103,0.4), transparent)' }}
                />

                {/* Ícone */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(194,176,103,0.1)' }}
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                </div>

                {/* Título */}
                <h3
                  className="font-heading text-base font-semibold leading-snug"
                  style={{ color: 'rgba(255,255,255,0.92)' }}
                >
                  {title}
                </h3>

                {/* Descrição */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
