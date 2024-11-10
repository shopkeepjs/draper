<script lang="ts">
	import type { Snippet } from 'svelte';
	import Wrap from '$lib/components/Wrap/Wrap.svelte';

	const {
		size = '16px',
		color = 'black',
		children,
		class: className
	}: {
		children: Snippet;
		color?: string;
		size?: string;
		class?: string;
	} = $props();
</script>

<Wrap cs={{ width: size, height: size }} class="icon-wrapper {className}">
	{@render children()}
</Wrap>

<style>
	:global(.icon-wrapper) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	:global(svg) {
		width: 100%;
		height: 100%;
	}
</style>
