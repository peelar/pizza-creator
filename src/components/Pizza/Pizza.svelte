<script lang="ts">
  import type { Topping } from '../../../types';

  export let toppings: Topping[];
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vw;
    max-width: 450px;
    max-height: 450px;
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
