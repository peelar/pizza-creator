import type { Topping } from './types';

type ToppingSum = Record<
  Topping['type'],
  {
    amount: number;
    sum: number;
  }
>;

export const getToppingsSum = (toppings: Topping[]): ToppingSum => {
  const toppingSum = toppings.reduce((prev, next) => {
    const key = next.type;
    const topping = prev[key];

    const amount = topping?.amount ?? 0;
    const sum = topping?.sum ?? 0;

    return {
      ...prev,
      [key]: {
        amount: amount + 1,
        sum: sum + next.price,
      },
    };
  }, {} as ToppingSum);

  return toppingSum;
};
