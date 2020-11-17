<script lang="ts">
  import type { Topping } from '../../../types';

  export let toppings: Topping[];
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
    {#each toppings as topping}
      <li>{topping.type}</li>
    {/each}
  </ul>
</div>
