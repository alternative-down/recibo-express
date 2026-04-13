export interface Plan {
  id: 'free' | 'individual' | 'ilimitado';
  name: string;
  price: number; // monthly, 0 for free
  receiptsPerMonth: number;
  features: string[];
  recommended?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Grátis',
    price: 0,
    receiptsPerMonth: 3,
    features: [
      '3 recibos por mês',
      'Todos os modelos',
      'Download em PDF',
      'Sem cadastro obrigatório',
    ],
  },
  {
    id: 'individual',
    name: 'Individual',
    price: 19,
    receiptsPerMonth: 30,
    features: [
      'Até 30 recibos por mês',
      'Todos os modelos',
      'Download em PDF',
      'Histórico completo',
    ],
  },
  {
    id: 'ilimitado',
    name: 'Ilimitado',
    price: 49,
    receiptsPerMonth: Infinity,
    features: [
      'Recibos ilimitados',
      'Histórico completo',
      'Todos os modelos',
      'Download em PDF',
      'Prioridade no suporte',
      'Modelos exclusivos',
    ],
    recommended: true,
  },
];

export interface ReceiptTemplate {
  id: string;
  name: string;
  description: string;
  price: number;
  planType: string; // 'free' | 'individual' | 'ilimitado'
  icon: string;
  fields: Array<{ label: string; key: string; required: boolean; placeholder: string }>;
}

export const TEMPLATES: ReceiptTemplate[] = [
  {
    id: 'classico',
    name: 'Clássico',
    description: 'Modelo tradicional, elegante e simples.',
    price: 0,
    planType: 'free',
    icon: '📄',
    fields: [
      { label: 'Nome do Prestador', key: 'providerName', required: true, placeholder: 'João Silva' },
      { label: 'CPF/CNPJ do Prestador', key: 'providerDocument', required: true, placeholder: '123.456.789-00' },
      { label: 'Nome do Recebedor', key: 'clientName', required: true, placeholder: 'Maria Santos' },
      { label: 'CPF/CNPJ do Recebedor', key: 'clientDocument', required: true, placeholder: '987.654.321-00' },
      { label: 'Descrição', key: 'description', required: true, placeholder: 'Prestação de serviços de consultoria' },
      { label: 'Valor (R$)', key: 'amount', required: true, placeholder: '500,00' },
      { label: 'Data', key: 'date', required: true, placeholder: '13/04/2026' },
      { label: 'Forma de Pagamento', key: 'paymentMethod', required: true, placeholder: 'PIX / Transferência' },
    ],
  },
  {
    id: 'moderno',
    name: 'Moderno',
    description: 'Visual limpo e contemporâneo.',
    price: 0,
    planType: 'free',
    icon: '✨',
    fields: [
      { label: 'Nome do Prestador', key: 'providerName', required: true, placeholder: 'João Silva' },
      { label: 'CPF/CNPJ do Prestador', key: 'providerDocument', required: true, placeholder: '123.456.789-00' },
      { label: 'Nome do Recebedor', key: 'clientName', required: true, placeholder: 'Maria Santos' },
      { label: 'CPF/CNPJ do Recebedor', key: 'clientDocument', required: true, placeholder: '987.654.321-00' },
      { label: 'Descrição', key: 'description', required: true, placeholder: 'Prestação de serviços de consultoria' },
      { label: 'Valor (R$)', key: 'amount', required: true, placeholder: '500,00' },
      { label: 'Data', key: 'date', required: true, placeholder: '13/04/2026' },
      { label: 'Forma de Pagamento', key: 'paymentMethod', required: true, placeholder: 'PIX / Transferência' },
    ],
  },
  {
    id: 'simples',
    name: 'Simples',
    description: 'Minimalista e direto ao ponto.',
    price: 0,
    planType: 'free',
    icon: '☑️',
    fields: [
      { label: 'Nome do Prestador', key: 'providerName', required: true, placeholder: 'João Silva' },
      { label: 'CPF/CNPJ do Prestador', key: 'providerDocument', required: true, placeholder: '123.456.789-00' },
      { label: 'Nome do Recebedor', key: 'clientName', required: true, placeholder: 'Maria Santos' },
      { label: 'CPF/CNPJ do Recebedor', key: 'clientDocument', required: true, placeholder: '987.654.321-00' },
      { label: 'Descrição', key: 'description', required: true, placeholder: 'Prestação de serviços' },
      { label: 'Valor (R$)', key: 'amount', required: true, placeholder: '500,00' },
      { label: 'Data', key: 'date', required: true, placeholder: '13/04/2026' },
      { label: 'Forma de Pagamento', key: 'paymentMethod', required: true, placeholder: 'PIX' },
    ],
  },
  {
    id: 'formal',
    name: 'Formal',
    description: 'Para situações que exigem seriedade máxima.',
    price: 0,
    planType: 'free',
    icon: '📋',
    fields: [
      { label: 'Nome do Prestador', key: 'providerName', required: true, placeholder: 'João Silva ME' },
      { label: 'CPF/CNPJ do Prestador', key: 'providerDocument', required: true, placeholder: '12.345.678/0001-90' },
      { label: 'Endereço do Prestador', key: 'providerAddress', required: true, placeholder: 'Rua Example, 100, Centro, São Paulo - SP' },
      { label: 'Nome do Recebedor', key: 'clientName', required: true, placeholder: 'Empresa XYZ Ltda' },
      { label: 'CPF/CNPJ do Recebedor', key: 'clientDocument', required: true, placeholder: '98.765.432/0001-10' },
      { label: 'Descrição', key: 'description', required: true, placeholder: 'Serviços profissionais de contabilidade' },
      { label: 'Valor por extenso', key: 'amountText', required: true, placeholder: 'Quinhentos reais' },
      { label: 'Valor (R$)', key: 'amount', required: true, placeholder: '500,00' },
      { label: 'Data', key: 'date', required: true, placeholder: '13 de Abril de 2026' },
      { label: 'Forma de Pagamento', key: 'paymentMethod', required: true, placeholder: 'Transferência Bancária' },
    ],
  },
  {
    id: 'branco',
    name: 'Branco',
    description: 'Totalmente editável, sem marca d\'água.',
    price: 0,
    planType: 'free',
    icon: '⬜',
    fields: [
      { label: 'Nome do Prestador', key: 'providerName', required: true, placeholder: 'João Silva' },
      { label: 'CPF/CNPJ do Prestador', key: 'providerDocument', required: true, placeholder: '123.456.789-00' },
      { label: 'Nome do Recebedor', key: 'clientName', required: true, placeholder: 'Maria Santos' },
      { label: 'CPF/CNPJ do Recebedor', key: 'clientDocument', required: true, placeholder: '987.654.321-00' },
      { label: 'Descrição', key: 'description', required: true, placeholder: 'Descrição do serviço ou venda' },
      { label: 'Valor (R$)', key: 'amount', required: true, placeholder: '500,00' },
      { label: 'Data', key: 'date', required: true, placeholder: '13/04/2026' },
      { label: 'Forma de Pagamento', key: 'paymentMethod', required: true, placeholder: 'PIX' },
    ],
  },
];

export function getTemplateById(id: string): ReceiptTemplate | undefined {
  return TEMPLATES.find(t => t.id === id);
}

export function renderReceipt(template: ReceiptTemplate, formData: Record<string, string>): string {
  const now = new Date().toLocaleDateString('pt-BR');
  const get = (key: string) => formData[key] || '[—]';
  return `═══════════════════════════════════════════════
                   RECIBO
═══════════════════════════════════════════════

${template.name.toUpperCase()}

Recebi(emos) de: ${get('clientName')}
CPF/CNPJ: ${get('clientDocument')}

A quantia de: R$ ${get('amount')}
${get('amountText') ? `(${get('amountText')})` : ''}

Referente a: ${get('description')}

Forma de pagamento: ${get('paymentMethod') || '—'}

Data: ${now}

${get('providerAddress') ? `Endereço: ${get('providerAddress')}\n` : ''}───────────────────────────────────────────────

Assinatura do Prestador:



_____________________________________________
${get('providerName')}
CPF/CNPJ: ${get('providerDocument')}`;
}