<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Styles } from '../../types/styles.js';

	let {
		cs = {},
		style,
		children,
		class: className
	}: { cs?: Styles; style?: never; children?: Snippet; class?: string } = $props();
</script>

<div {style} class={className}>
	{#if children}
		{@render children()}
	{/if}
</div>
