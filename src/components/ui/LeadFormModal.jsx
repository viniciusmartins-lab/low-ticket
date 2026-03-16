import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useMemo, useState } from 'react';
import { trackEvent } from '../../lib/analytics';
import { useWebhook } from '../../hooks/useWebhook';

const MAX_PHONE_DIGITS = 11;

function onlyDigits(value) {
  return (value || '').replace(/\D/g, '');
}

function formatBrPhone(digits) {
  const d = onlyDigits(digits).slice(0, MAX_PHONE_DIGITS);
  if (!d) return '';
  if (d.length <= 2) return `(${d}`;
  const ddd = d.slice(0, 2);
  const rest = d.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  if (rest.length <= 8) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
}

export function LeadFormModal({ isOpen, onClose }) {
  const { sendLead } = useWebhook();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState('idle'); // idle | success | error

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const phoneFormatted = useMemo(() => formatBrPhone(phoneDigits), [phoneDigits]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const digits = onlyDigits(phoneDigits);

    if (!trimmedName) nextErrors.name = 'Informe seu nome.';
    if (!trimmedEmail) nextErrors.email = 'Informe seu e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) nextErrors.email = 'E-mail inválido.';

    if (!digits) nextErrors.phone = 'Informe seu telefone.';
    else if (digits.length < 10) nextErrors.phone = 'Telefone incompleto.';

    setErrors(nextErrors);
    return { ok: Object.keys(nextErrors).length === 0, cleaned: { name: trimmedName, email: trimmedEmail, phone: digits } };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { ok, cleaned } = validate();
    if (!ok) return;

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const success = await sendLead(cleaned);
      if (success) {
        trackEvent('generate_lead', {
          form_name: 'lead_modal',
          page_location: typeof window !== 'undefined' ? window.location.href : '',
        });
        setName('');
        setEmail('');
        setPhoneDigits('');
        setSubmitState('success');
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setSubmitState('idle');
    setErrors({});
    onClose?.();
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleClose} className="relative z-[999]">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm md:backdrop-blur" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95 translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-2"
            >
              <DialogPanel className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#0e0e0e] p-5 md:p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <DialogTitle as={DialogTitle} className="text-lg font-bold" style={{ color: '#fff' }}>
                      Garanta seu ticket
                    </DialogTitle>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      Preencha os dados para continuar.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="rounded-lg px-2 py-1 text-sm"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    aria-label="Fechar"
                  >
                    ✕
                  </button>
                </div>

                <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Nome
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      inputMode="text"
                      className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      placeholder="Seu nome"
                      required
                    />
                    {errors.name && <p className="text-xs mt-1 text-red-300">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Telefone
                    </label>
                    <input
                      value={phoneFormatted}
                      onChange={(e) => setPhoneDigits(onlyDigits(e.target.value).slice(0, MAX_PHONE_DIGITS))}
                      autoComplete="tel"
                      inputMode="tel"
                      type="tel"
                      className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      placeholder="(11) 91234-5678"
                      required
                    />
                    {errors.phone && <p className="text-xs mt-1 text-red-300">{errors.phone}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      E-mail
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      inputMode="email"
                      type="email"
                      className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      placeholder="seuemail@dominio.com"
                      required
                    />
                    {errors.email && <p className="text-xs mt-1 text-red-300">{errors.email}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 w-full rounded-xl px-4 py-3 font-semibold text-black disabled:opacity-60"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>

                  {submitState === 'success' && (
                    <p className="text-sm mt-1" style={{ color: 'rgba(194,176,103,0.9)' }}>
                      Enviado com sucesso.
                    </p>
                  )}
                  {submitState === 'error' && (
                    <p className="text-sm mt-1 text-red-300">
                      Não foi possível enviar agora. Tente novamente.
                    </p>
                  )}
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

