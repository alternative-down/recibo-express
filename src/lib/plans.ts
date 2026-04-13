export interface Plan {
  id: 'free' | 'pro';
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
    receiptsPerMonth: 1,
    features: [
      '1 recibo por mês',
      'Todos os modelos',
      'Download em PDF',
      'Branding Alternative Down',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.9,
    receiptsPerMonth: Infinity,
    features: [
      'Recibos ilimitados',
      'Todos os modelos',
      'Download em PDF',
      'Sem branding',
      'Histórico completo',
      'Prioridade no suporte',
    ],
    recommended: true,
  },
];
