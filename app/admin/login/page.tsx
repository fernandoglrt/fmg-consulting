'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const reduced = useReducedMotion();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const json = await res.json();
    setLoading(false);
    if (!json.ok) {
      setError(json.error ?? 'Não foi possível entrar.');
      return;
    }
    router.push(params.get('next') || '/admin');
    router.refresh();
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: reduced ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 22, stiffness: 220 }}
      className="w-full max-w-sm rounded-3xl border border-line bg-white p-8 shadow-xl shadow-black/5"
    >
      <Image src="/images/logo-fmg.png" alt="FMG Consulting" width={130} height={49} className="h-9 w-auto" />
      <h1 className="headline mt-6 text-xl font-semibold text-ink">Acesso restrito</h1>
      <p className="mt-1 text-[14px] text-ink/55">Entre com a senha de administrador.</p>

      <input
        type="password"
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        className="mt-6 w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-accent"
      />

      {error && <p className="mt-3 text-[13.5px] text-red-600">{error}</p>}

      <motion.button
        type="submit"
        disabled={loading}
        whileTap={reduced ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', damping: 22, stiffness: 400 }}
        className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white disabled:opacity-50"
      >
        {loading ? 'Entrando…' : 'Entrar'}
      </motion.button>
    </motion.form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-5">
      <div aria-hidden className="mesh-accent absolute inset-0" />
      <div className="grain-overlay absolute inset-0 opacity-30" />
      <div className="relative">
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
