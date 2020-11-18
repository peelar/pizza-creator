<script lang="ts">
  import type { Topping } from '../../../types';
  export let toppings: Topping[] = [];
  $: toppingTypes = Array.from(new Set(toppings.reduce((prev, next) => [...prev, next.type], [])));
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
  {#each toppingTypes as type}<button>{type}</button>{/each}
</div>
