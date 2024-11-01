<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Styles } from '$lib/types/styles.js';

	let { cs = {}, style, children }: { cs?: Styles; style?: never; children: Snippet } = $props();
</script>

{#if style || cs}
	<div {style}>
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}

<style>
	:global(html) {
		font-family: 'Roboto', sans-serif;
		--line-height: 1.5;
		--colors-primary-500: #1d74c1;
	}
	@media (prefers-reduced-motion: no-preference) {
		:global(html) {
			scroll-behavior: smooth;
		}
	}
	:global(h1, h2, h3, h4, h5, h6) {
		text-wrap: balance;
	}
	:global(header, footer, main, section, article) {
		container-type: inline-size;
	}
</style>
