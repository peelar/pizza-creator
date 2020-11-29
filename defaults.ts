import type { ToppingType } from './types';

export const types = ['cheese', 'ham', 'pineapple'] as ToppingType[];
export const prices: Record<ToppingType, number> = {
  ham: 3,
  cheese: 2,
  pineapple: 5,
};
