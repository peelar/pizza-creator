export type ToppingType = 'cheese' | 'ham' | 'pineapple';

export type Topping = {
  id: string;
  type: ToppingType;
  price: number;
};
