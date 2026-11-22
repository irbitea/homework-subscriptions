import type { Subscription } from '../../types';

export const mockData: Subscription[] = [
  {
    id: '1',
    customerName: 'Contoso',
    productName: 'Product A',
    status: 'active',
    quantity: 1,
    monthlyCost: 100,
    renewalDate: '2027-01-01',
  },
  {
    id: '2',
    customerName: 'Contoso',
    productName: 'Product B',
    status: 'expired',
    quantity: 2,
    monthlyCost: 50,
    renewalDate: '2026-01-01',
  },
  {
    id: '3',
    customerName: 'Fabrikam',
    productName: 'Product C',
    status: 'active',
    quantity: 3,
    monthlyCost: 25.5,
    renewalDate: '2027-02-01',
  },
];
