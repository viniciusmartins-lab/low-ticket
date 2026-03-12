/**
 * Label tag acima de títulos — cursor-rules (padrão visual).
 */
export function LabelTag({ children, className = '' }) {
  return (
    <span className={`label-tag block ${className}`}>
      {children}
    </span>
  );
}
