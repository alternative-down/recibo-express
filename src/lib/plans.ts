export interface Plan {
  id: 'free' | 'individual' | 'ilimitado';
  name: string;
  price: number;
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