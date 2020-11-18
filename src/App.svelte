<script lang="ts">
  import Display from './components/Display/Display.svelte';
  import Creator from './components/Creator/Creator.svelte';
  import type { Topping } from '../types';

  let toppings: Topping[] = [
    { type: 'cheese', price: 2 },
    { type: 'ham', price: 4 },
    { type: 'cheese', price: 3 },
  ];
</script>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }
</style>

<header>
  <h1>Let's make pizza with Svelte</h1>
</header>
<main>
  <Display {toppings} />
  <Creator {toppings} />
</main>
