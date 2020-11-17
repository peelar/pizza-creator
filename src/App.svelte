<script lang="ts">
	import Display from "./components/Display/Display.svelte";
	import Creator from "./components/Creator/Creator.svelte";
</script>

<header>
	<h1>Let's make pizza</h1>
</header>
<main>
	<Display />
	<Creator />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1rem;
		margin: 0 auto;
		min-height: 600px;
		width: 80%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		text-align: center;
	}
</style>