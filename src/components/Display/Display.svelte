<script lang="ts">
  import Pizza from '../Pizza/Pizza.svelte';
  import { getToppingsSum } from '../../../helpers';
  import type { Topping } from '../../../types';
  export let toppings: Topping[] = [];
  export let removeTopping: (id: string) => void;

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
  <Pizza {toppings} {removeTopping} />

  <h4>Sum</h4>
  <ul>
    {#each Object.keys(toppingsSum) as key}
      <li>{key}[{toppingsSum[key].amount}]: {toppingsSum[key].sum}$</li>
    {/each}
  </ul>
</div>
