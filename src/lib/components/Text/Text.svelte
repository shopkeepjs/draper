<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Styles } from '../../types/styles.js';

	let { cs = {}, style, children }: { cs?: Styles; style?: never; children: Snippet } = $props();
</script>

<span {style}>{@render children()}</span>

<style>
	span {
		display: inline-block;
		max-width: 70ch;
		line-height: 1.4;
		text-wrap: pretty;
	}
</style>
