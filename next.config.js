/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/post/hedge-de-conv%C3%ADvio', destination: '/blog/hedge-de-convivio', permanent: true },
      { source: '/post/hedge-de-convívio', destination: '/blog/hedge-de-convivio', permanent: true },
      { source: '/post/futurize-se-ontem', destination: '/blog/futurize-se-ontem', permanent: true },
      { source: '/post/o-ser-estrat%C3%A9gico', destination: '/blog/o-ser-estrategico', permanent: true },
      { source: '/post/o-ser-estratégico', destination: '/blog/o-ser-estrategico', permanent: true },
      {
        source: '/post/a-lei-geral-de-prote%C3%A7%C3%A3o-de-dados-nas-rela%C3%A7%C3%B5es-de-trabalho',
        destination: '/blog/lgpd-nas-relacoes-de-trabalho',
        permanent: true,
      },
      {
        source: '/post/a-lei-geral-de-proteção-de-dados-nas-relações-de-trabalho',
        destination: '/blog/lgpd-nas-relacoes-de-trabalho',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
