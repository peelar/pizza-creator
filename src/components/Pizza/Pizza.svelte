<script lang="ts">
  import type { Topping } from '../../../types';
  import { getToppingsSum } from '../../../helpers';

  export let toppings: Topping[] = [
    { type: 'cheese', price: 2 },
    { type: 'ham', price: 4 },
    { type: 'cheese', price: 3 },
  ];
  $: toppingsSum = getToppingsSum(toppings);
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    border: 1px solid red;
    background-color: beige;
    border-radius: 50%;
  }
</style>

<div>
  <ul>
    {#each toppingsSum as topping}
      <li>{topping.type}</li>
    {/each}
  </ul>
</div>
