<script lang="ts">
  import Pizza from '../Pizza/Pizza.svelte';
  import { getToppingsSum } from '../../../helpers';

  import type { Topping } from '../../../types';
  export let toppings: Topping[] = [];
  export let removeTopping: (id: string) => void;

  $: typesSum = getToppingsSum(toppings);
  $: sum = Object.values(typesSum).reduce((prev, next) => prev + next.sum, 0);
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
    {#each Object.keys(typesSum) as key}
      <li>{key}[{typesSum[key].amount}]: {typesSum[key].sum}$</li>
    {/each}
  </ul>
  <h5>Total: ${sum}</h5>
</div>
