'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const reduced = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: String(data.get('nome') ?? ''),
      email: String(data.get('email') ?? ''),
      telefone: String(data.get('telefone') ?? ''),
      mensagem: String(data.get('mensagem') ?? ''),
      consentimento: data.get('consentimento') === 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Não foi possível enviar. Tente novamente.');
        setStatus('error');
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setError('Não foi possível enviar. Verifique sua conexão e tente novamente.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center shadow-soft"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7" />
          </svg>
        </span>
        <h3 className="headline mt-5 text-2xl font-semibold text-ink">Obrigado pelo envio!</h3>
        <p className="mt-2 text-[15px] text-ink/60">
          Recebemos sua mensagem e retornaremos em breve.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[13.5px] font-medium text-ink/70">
          Nome
          <input
            name="nome"
            required
            type="text"
            className="rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-all focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(26,134,201,0.12)]"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[13.5px] font-medium text-ink/70">
          E-mail
          <input
            name="email"
            required
            type="email"
            className="rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-all focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(26,134,201,0.12)]"
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5 text-[13.5px] font-medium text-ink/70">
        Telefone (opcional)
        <input
          name="telefone"
          type="tel"
          className="rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-all focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(26,134,201,0.12)]"
        />
      </label>

      <label className="mt-5 flex flex-col gap-1.5 text-[13.5px] font-medium text-ink/70">
        Mensagem
        <textarea
          name="mensagem"
          required
          rows={5}
          className="resize-none rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-all focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(26,134,201,0.12)]"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-[13px] text-ink/60">
        <input
          name="consentimento"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
        />
        Concordo em receber contato através dos dados fornecidos acima.
      </label>

      {status === 'error' && <p className="mt-3 text-[13.5px] text-red-600">{error}</p>}

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileTap={reduced ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', damping: 22, stiffness: 400 }}
        className="mt-7 rounded-full bg-ink px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar'}
      </motion.button>
    </form>
  );
}
