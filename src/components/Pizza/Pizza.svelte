<script lang="ts">
  import type { Topping } from '../../../types';
  import Ingredient from '../Ingredient/Ingredient.svelte';

  export let toppings: Topping[];
  export let removeTopping: (id: string) => void;
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

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    max-height: 90%;
    overflow: scroll;
  }
</style>

<div>
  <ul>
    {#each toppings as topping}
      <Ingredient {topping} {removeTopping} />
    {/each}
  </ul>
</div>
