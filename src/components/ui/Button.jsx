/**
 * Botões — 02_BRAND + cursor-rules (pill shape, hover lift).
 */
export function Button({
  children,
  variant = 'primary',
  type = 'button',
  href,
  className = '',
  onClick,
  disabled,
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-3.5 font-heading font-bold text-[15px] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary text-neutral-900 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary-light hover:-translate-y-0.5',
    ghost: 'border border-neutral-400/30 text-neutral-700 hover:border-primary/50 hover:text-primary',
    whatsapp: 'bg-success text-white hover:brightness-110 hover:-translate-y-0.5',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
