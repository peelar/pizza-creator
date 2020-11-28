<script lang="ts">
  import type { Topping } from '../../../types';

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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background-color: darksalmon;
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
      <li><button on:click={() => removeTopping(topping.id)}> {topping.type} </button></li>
    {/each}
  </ul>
</div>
