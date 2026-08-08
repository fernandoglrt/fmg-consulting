import { getLeads } from '@/lib/leads';

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString('pt-BR');
}

export default function LeadsPage() {
  const leads = getLeads();

  return (
    <div>
      <h1 className="headline mb-6 text-2xl font-semibold text-ink">Mensagens recebidas</h1>

      {leads.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line p-10 text-center text-[14.5px] text-ink/50">
          Nenhuma mensagem recebida pelo formulário de contato ainda.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {leads.map((lead) => (
            <div key={lead.id} className="rounded-2xl border border-line bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-ink">{lead.nome}</h3>
                <span className="text-[12.5px] text-ink/40">{formatDateTime(lead.criadoEm)}</span>
              </div>
              <p className="mt-1 text-[13.5px] text-ink/55">
                {lead.email}
                {lead.telefone ? ` · ${lead.telefone}` : ''}
              </p>
              <p className="mt-3 text-[14.5px] text-ink/80">{lead.mensagem}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
