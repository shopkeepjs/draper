<script lang="ts">
	import type { Styles } from '$lib/types/styles.js';

	let {
		cs = {},
		style,
		type,
		checked = $bindable()
	}: { cs?: Styles; style?: never; type: string; checked?: boolean } = $props();
</script>

{#if type === 'checkbox'}
	<input type="checkbox" {style} bind:checked />
{/if}
