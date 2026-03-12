/**
 * [11] FOOTER — 03_CONTENT.md
 * Copyright, links [PREENCHER], contato [PREENCHER].
 */
export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-900 py-12 text-neutral-100">
      <div className="mx-auto max-w-[1200px] px-6 md:px-20">
        <p className="font-body text-sm">
          © 2025 SucessOdonto. Todos os direitos reservados.
        </p>
        <div className="mt-4 flex flex-wrap gap-6 font-body text-sm">
          <a href="#" className="text-primary-light hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Política de Privacidade
          </a>
          <a href="#" className="text-primary-light hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Termos de Uso
          </a>
        </div>
        <p className="mt-4 font-body text-sm text-neutral-400">
          SucessOdonto — Grupo ICOM<br />
          E-mail: atendimentoaocliente@icom.com.br
        </p>
      </div>
    </footer>
  );
}
