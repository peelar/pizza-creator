<script lang="ts">
  import { v4 } from 'uuid';
  import Display from './components/Display/Display.svelte';
  import Creator from './components/Creator/Creator.svelte';
  import type { Topping, ToppingType } from '../types';

  const types = ['cheese', 'ham', 'pineapple'] as ToppingType[];
  const toppingPrices: Record<ToppingType, number> = {
    ham: 3,
    cheese: 2,
    pineapple: 5,
  };
  let toppings: Topping[] = [];

  const addTopping = (type: ToppingType) => {
    const topping = { type, price: toppingPrices[type], id: v4() };
    toppings = [...toppings, topping];
  };

  const removeTopping = (id: string) => {
    toppings = [...toppings].filter((topping) => topping.id !== id);
  };
</script>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }
</style>

<header>
  <h1>Let's make pizza with Svelte</h1>
</header>
<main>
  <Display {toppings} {removeTopping} />
  <Creator {types} {addTopping} />
</main>
