<script lang="ts">
  import type { ToppingType } from '../../../types';
  import { types } from '../../../defaults';

  export let addTopping: (type: ToppingType) => void;
</script>

<style>
  div {
    flex: 1;
  }

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
</style>

<div>
  <h4>Customize</h4>
  <div class="grid">
    {#each types as type}<button on:click={() => addTopping(type)}>{type} ➕</button>{/each}
  </div>
</div>
