<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Styles } from '$lib/types/styles.js';

	type LabelProps = {
		cs?: Styles;
		style?: never;
		class?: string;
	} & (WithInputChild | WithoutInputChild);

	type WithInputChild = {
		children: Snippet;
		for?: string;
	};
	type WithoutInputChild = {
		for: string;
		children?: Snippet;
	};

	let { cs = {}, style, children, for: htmlFor, class: className }: LabelProps = $props();
</script>

<label {style} for={htmlFor} class={className}>
	{#if children}
		{@render children()}
	{/if}
</label>
