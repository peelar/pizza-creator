<script lang="ts">
  import Pizza from '../Pizza/Pizza.svelte';
  import { getToppingsSum } from '../../../helpers';

  import type { Topping } from '../../../types';
  export let toppings: Topping[] = [];
  export let removeTopping: (id: string) => void;

  $: toppingsTypesSum = getToppingsSum(toppings);
  $: toppingSum = Object.values(toppingsTypesSum).reduce((prev, next) => prev + next.sum, 0);
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
  <Pizza {toppings} {removeTopping} />

  <h4>Sum</h4>
  <ul>
    {#each Object.keys(toppingsTypesSum) as key}
      <li>{key}[{toppingsTypesSum[key].amount}]: {toppingsTypesSum[key].sum}$</li>
    {/each}
  </ul>
  <h5>Total: ${toppingSum}</h5>
</div>
