/**
 * Input com label, obrigatório opcional, acessível (label associado).
 */
export function Input({
  id,
  label,
  type = 'text',
  required = false,
  placeholder = '',
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-1 block font-body text-sm font-medium text-neutral-900">
        {label}
        {required && <span className="text-error" aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="input-modern w-full font-body placeholder-neutral-400"
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
