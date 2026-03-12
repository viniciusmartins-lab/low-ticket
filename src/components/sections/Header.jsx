/**
 * [1] HEADER / NAV — 03_CONTENT.md
 * Logo: logo-color.svg | CTA: Quero meu checklist → #formulario
 */
import { Button } from '../ui/Button';
import { trackEvent } from '../../lib/analytics';

export function Header() {
  const handleCtaClick = () => {
    trackEvent('click_cta_hero', { button_text: 'Quero meu checklist', page_location: window.location.href });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-3 md:px-20">
        <a href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="SucessOdonto - Página inicial">
          <img
            src="/assets/logo/PNG%20-%20Preto.png"
            alt="SucessOdonto"
            className="h-10 w-auto object-contain"
          />
        </a>
        <Button href="#formulario" variant="primary" onClick={handleCtaClick}>
          Quero meu checklist
        </Button>
      </div>
    </header>
  );
}
