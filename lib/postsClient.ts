export type PostMeta = {
  slug: string;
  title: string;
  autor: string;
  data: string;
  tempo_leitura: string;
  imagem_capa: string;
  autoria_conteudo?: string;
};

const coverMap: Record<string, string> = {
  'hedge-de-convivio': '/images/post-hedge-de-convivio.png',
  'futurize-se-ontem': '/images/post-futurize-se-ontem.jpeg',
  'o-ser-estrategico': '/images/post-o-ser-estrategico.jpg',
  'lgpd-nas-relacoes-de-trabalho': '/images/post-lgpd-relacoes-trabalho.png',
};

export function localCover(slug: string) {
  return coverMap[slug] ?? '/images/hero-blog.jpg';
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}
