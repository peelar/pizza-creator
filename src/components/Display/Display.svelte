<script lang="ts">
  import { getToppingsSum } from '../../../helpers';
  import type { Topping } from '../../../types';
  import Pizza from '../Pizza/Pizza.svelte';

  let toppings: Topping[] = [
    { type: 'cheese', price: 2 },
    { type: 'ham', price: 4 },
    { type: 'cheese', price: 3 },
  ];
  $: toppingsSum = getToppingsSum(toppings);
</script>

<style>
  div {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid papayawhip;
    padding: 1rem;
  }
</style>

<div>
  <Pizza {toppings} />

  <h4>Sum</h4>
  <ul>
    {#each Object.keys(toppingsSum) as key}
      <li>{key}[{toppingsSum[key].amount}]: {toppingsSum[key].sum}$</li>
    {/each}
  </ul>
</div>
