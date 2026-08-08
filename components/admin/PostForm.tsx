'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

export type PostFormValues = {
  slug?: string;
  title: string;
  autor: string;
  data: string;
  tempo_leitura: string;
  imagem_capa: string;
  autoria_conteudo?: string;
  body: string;
};

const EMPTY: PostFormValues = {
  title: '',
  autor: 'Flávio Goulart',
  data: new Date().toISOString().slice(0, 10),
  tempo_leitura: '3 min',
  imagem_capa: '',
  autoria_conteudo: '',
  body: '',
};

export function PostForm({
  mode,
  initial,
}: {
  mode: 'create' | 'edit';
  initial?: PostFormValues;
}) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const fileInput = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<PostFormValues>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  function set<K extends keyof PostFormValues>(key: K, value: PostFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleUpload(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
    const json = await res.json();
    setUploading(false);
    if (json.ok) set('imagem_capa', json.path);
    else setError(json.error ?? 'Falha no upload da imagem.');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const url = mode === 'create' ? '/api/admin/posts' : `/api/admin/posts/${initial?.slug}`;
    const method = mode === 'create' ? 'POST' : 'PUT';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    setSaving(false);

    if (!json.ok) {
      setError(json.error ?? 'Não foi possível salvar.');
      return;
    }
    router.push('/admin');
    router.refresh();
  }

  async function handleDelete() {
    if (!initial?.slug) return;
    if (!confirm('Excluir este post? Essa ação não pode ser desfeita.')) return;
    await fetch(`/api/admin/posts/${initial.slug}`, { method: 'DELETE' });
    router.push('/admin');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
          Título
          <input
            required
            value={values.title}
            onChange={(e) => set('title', e.target.value)}
            className="rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
          Autor
          <input
            required
            value={values.autor}
            onChange={(e) => set('autor', e.target.value)}
            className="rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
          Data
          <input
            required
            type="date"
            value={values.data}
            onChange={(e) => set('data', e.target.value)}
            className="rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
          Tempo de leitura
          <input
            value={values.tempo_leitura}
            onChange={(e) => set('tempo_leitura', e.target.value)}
            placeholder="3 min"
            className="rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] outline-none focus:border-accent"
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
        Imagem de capa
        <div className="flex items-center gap-4">
          <input
            value={values.imagem_capa}
            onChange={(e) => set('imagem_capa', e.target.value)}
            placeholder="/images/capa.jpg ou URL"
            className="flex-1 rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] outline-none focus:border-accent"
          />
          <motion.button
            type="button"
            whileTap={reduced ? undefined : { scale: 0.95 }}
            onClick={() => fileInput.current?.click()}
            disabled={uploading}
            className="shrink-0 rounded-xl border border-line px-4 py-2.5 text-[13.5px] font-medium text-ink/70 disabled:opacity-50"
          >
            {uploading ? 'Enviando…' : 'Enviar imagem'}
          </motion.button>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
            }}
          />
        </div>
        {values.imagem_capa && (
          <div className="relative mt-2 h-32 w-full overflow-hidden rounded-xl border border-line">
            <Image src={values.imagem_capa} alt="" fill className="object-cover" unoptimized />
          </div>
        )}
      </label>

      <label className="mt-5 flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
        Assinatura adicional (opcional)
        <input
          value={values.autoria_conteudo ?? ''}
          onChange={(e) => set('autoria_conteudo', e.target.value)}
          placeholder="Elaborado por..."
          className="rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] outline-none focus:border-accent"
        />
      </label>

      <label className="mt-5 flex flex-col gap-1.5 text-[13px] font-medium text-ink/60">
        Conteúdo (Markdown)
        <textarea
          required
          rows={16}
          value={values.body}
          onChange={(e) => set('body', e.target.value)}
          className="rounded-xl border border-line bg-white px-4 py-3 font-mono text-[13.5px] leading-relaxed outline-none focus:border-accent"
        />
      </label>

      {error && <p className="mt-4 text-[13.5px] text-red-600">{error}</p>}

      <div className="mt-7 flex items-center gap-4">
        <motion.button
          type="submit"
          disabled={saving}
          whileTap={reduced ? undefined : { scale: 0.97 }}
          className="rounded-full bg-ink px-7 py-3 text-[14.5px] font-medium text-white disabled:opacity-50"
        >
          {saving ? 'Salvando…' : mode === 'create' ? 'Publicar post' : 'Salvar alterações'}
        </motion.button>
        {mode === 'edit' && (
          <motion.button
            type="button"
            onClick={handleDelete}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            className="text-[14px] font-medium text-red-600"
          >
            Excluir post
          </motion.button>
        )}
      </div>
    </form>
  );
}
