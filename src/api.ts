import type { Subscription } from './types';

export async function fetchSubscriptions(): Promise<Subscription[]> {
  const res = await fetch('/subscriptions.json');

  if (!res.ok) throw new Error('Request failed');

  return res.json();
}
