import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="mesh-overlay grain-overlay relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-surface px-5 text-center">
      <div aria-hidden className="mesh-accent absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-xl">
        <p className="eyebrow text-[13px] font-semibold uppercase text-accent-soft">Erro 404</p>
        <h1 className="display mt-4 text-5xl font-semibold text-white sm:text-6xl">Página não encontrada</h1>
        <p className="subhead mt-5 text-[16px] text-white/60">
          O conteúdo que você procura pode ter mudado de endereço.
        </p>
        <Button href="/" variant="white" className="mt-9">
          Voltar para a home
        </Button>
      </div>
    </div>
  );
}
