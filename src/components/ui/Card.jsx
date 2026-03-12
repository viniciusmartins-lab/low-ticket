/**
 * Card — cursor-rules (borda sutil, ::before linha destaque, hover).
 */
export function Card({ children, className = '' }) {
  return (
    <div className={`card-modern ${className}`}>
      {children}
    </div>
  );
}
