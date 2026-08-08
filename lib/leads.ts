import fs from 'fs';
import path from 'path';

const leadsFile = path.join(process.cwd(), 'data/leads.json');

export type Lead = {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
  consentimento: boolean;
  criadoEm: string;
};

function ensureFile() {
  if (!fs.existsSync(leadsFile)) {
    fs.mkdirSync(path.dirname(leadsFile), { recursive: true });
    fs.writeFileSync(leadsFile, '[]');
  }
}

export function getLeads(): Lead[] {
  ensureFile();
  const raw = fs.readFileSync(leadsFile, 'utf8');
  try {
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

export function addLead(lead: Omit<Lead, 'id' | 'criadoEm'>): Lead {
  ensureFile();
  const leads = getLeads();
  const entry: Lead = {
    ...lead,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    criadoEm: new Date().toISOString(),
  };
  leads.unshift(entry);
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  return entry;
}
