<script lang="ts">
  import { colors } from '../../../defaults';
  import type { Topping } from '../../../types';

  export let topping: Topping;
  export let removeTopping: (id: string) => void;
</script>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 2rem;
    background-color: darksalmon;
    cursor: pointer;
  }
</style>

<li>
  <button
    style="background-color: {colors[topping.type]}"
    on:click={() => removeTopping(topping.id)}>
    {topping.type}
    ❌</button>
</li>
