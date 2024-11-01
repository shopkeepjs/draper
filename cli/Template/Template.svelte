<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Styles } from '$lib/types/styles.js';

	let { cs = {}, style, children }: { cs?: Styles; style?: never; children?: Snippet } = $props();
</script>

<div {style}>
	{#if children}
		{@render children()}
	{/if}
</div>
