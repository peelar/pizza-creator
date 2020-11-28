<script lang="ts">
  import type { Topping, ToppingType } from '../../../types';

  export let types: Topping['type'][] = [];
  export let addTopping: (type: ToppingType) => void;
</script>

<style>
  div {
    flex: 1;
    border: 1px solid papayawhip;
    padding: 1rem;
  }

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 2rem;
  }
</style>

<div>
  <h4>Customize</h4>
  {#each types as type}<button on:click={() => addTopping(type)}>{type}</button>{/each}
</div>
