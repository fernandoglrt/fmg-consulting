import Image from 'next/image';

export const CLIENTS = [
  { name: 'Allianz Seguradora', file: 'cliente-allianz.png' },
  { name: 'Pansera Corretora de Seguros', file: 'cliente-pansera.png' },
  { name: 'Lugano', file: 'cliente-lugano.png' },
  { name: 'Rasen Bier', file: 'cliente-rasen-bier.jpg' },
  { name: 'GOWINZ Business Group', file: 'cliente-gowinz.png' },
  { name: 'Icebar Gramado', file: 'cliente-icebar.png' },
  { name: 'FEPAM', file: 'cliente-fepam.png' },
  { name: 'UworK', file: 'cliente-uwork.png' },
  { name: 'Associação Brasileira de Hidroponia', file: 'cliente-hidroponia.png' },
  { name: 'Madeireira e Ferragem Mathias Velho', file: 'cliente-mathias-velho.png' },
  { name: 'COMEX', file: 'cliente-comex.png' },
  { name: 'Francesco Trattoria', file: 'cliente-francesco-trattoria.png' },
  { name: 'Espaço Terapêutico Vida e Cor', file: 'cliente-vida-e-cor.png' },
];

export function ClientLogos({ marquee = true }: { marquee?: boolean }) {
  if (!marquee) {
    return (
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {CLIENTS.map((c) => (
          <div
            key={c.file}
            className="flex h-24 items-center justify-center rounded-2xl border border-line bg-white p-4 shadow-soft transition-shadow duration-300 hover:shadow-lifted"
          >
            <Image
              src={`/images/${c.file}`}
              alt={c.name}
              width={140}
              height={70}
              className="max-h-14 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    );
  }

  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-16 py-4 hover:[animation-play-state:paused]">
        {doubled.map((c, i) => (
          <Image
            key={`${c.file}-${i}`}
            src={`/images/${c.file}`}
            alt={c.name}
            width={170}
            height={85}
            className="h-14 w-auto shrink-0 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
