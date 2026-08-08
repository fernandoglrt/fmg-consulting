import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import {
  StrategyIcon,
  OrgModelIcon,
  ExecutionIcon,
  ProjectsIcon,
  FinanceIcon,
  PeopleIcon,
} from '@/components/icons/ServiceIcons';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Administração Estratégica, Modelagem Organizacional, Execução, Projetos, Finanças e Gestão de Pessoas.',
};

const services = [
  {
    icon: StrategyIcon,
    title: 'Administração Estratégica',
    items: [
      'Elaboração e controle do Planejamento Estratégico',
      'Riscos Operacionais',
      'Controles Internos, Compliance e Prevenção à lavagem de dinheiro',
      'Adequação à Lei Geral de Proteção aos Dados Pessoais (LGPD)',
    ],
  },
  {
    icon: OrgModelIcon,
    title: 'Modelagem Organizacional',
    items: [
      'Modelagem de Estrutura Organizacional',
      'Mapeamento e redesenho da estrutura organizacional',
      'Mapeamento, modelagem e redesenho de processos',
      'Otimização de processos',
      'Diagnóstico e eficiência operacional',
      'Gestão da Qualidade',
      'Governança Corporativa',
    ],
  },
  {
    icon: ExecutionIcon,
    title: 'Execução',
    items: [
      'Excelência Operacional',
      'Criação de vantagem competitiva',
      'Preparação dos líderes para execução',
      'Adequação das pessoas certas no lugar certo',
      'Criação do modelo para a mudança cultural',
    ],
  },
  {
    icon: ProjectsIcon,
    title: 'Projetos',
    items: ['Elaboração', 'Planejamento, execução e acompanhamento'],
  },
  {
    icon: FinanceIcon,
    title: 'Finanças',
    items: [
      'Elaboração, planejamento e controle de orçamento',
      'Controle financeiro',
      'Planejamento financeiro',
      'Análise financeira e balanços',
      'Plano de contas',
      'Roteiros contábeis',
    ],
  },
  {
    icon: PeopleIcon,
    title: 'Gestão de Pessoas',
    items: [
      'Descrição de cargos',
      'Plano de cargos e salários',
      'Capacitação profissional',
      'Manual de normas e condutas',
      'Reconhecimento e incentivo',
      'Recrutamento e seleção',
      'Avaliação de desempenho',
      'Gestão do clima organizacional',
      'Treinamentos corporativos',
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <PageHero
        image="/images/hero-servicos.jpg"
        compact
        eyebrow="O que fazemos"
        title="Serviços"
        subtitle="Soluções completas para administração estratégica, modelagem organizacional, execução, projetos, finanças e gestão de pessoas."
      />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <ServiceCard title={service.title} items={service.items} index={i} icon={<service.icon />} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 text-center sm:px-8">
        <Reveal>
          <Button href="/contato" variant="ink">
            Vamos conversar sobre o seu projeto
          </Button>
        </Reveal>
      </section>
    </>
  );
}
