/**
 * Wrapper de seção — max-w 1200px, padding clamp, ritmo escuro/claro/alternado.
 */
export function SectionWrapper({ children, className = '', variant = 'light' }) {
  const isDark = variant === 'dark';
  const isAlternate = variant === 'alternate';
  const bgClass = isDark
    ? 'bg-neutral-900 text-neutral-100 section-dark'
    : isAlternate
      ? 'bg-neutral-100'
      : 'bg-neutral-white';
  return (
    <section className={`${bgClass} py-[clamp(80px,10vw,140px)] ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-20">
        {children}
      </div>
    </section>
  );
}
