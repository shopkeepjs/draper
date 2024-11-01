<script lang="ts">
	import type { SizeMaxMed, Styles } from '$lib/types/styles.js';
	import Label from '$lib/components/Label/Label.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import type { Snippet } from 'svelte';

	type BaseSwitchProps = {
		style?: never;
		size?: SizeMaxMed;
		accentColor?: string;
		onChange: (checked: boolean) => void;
	};

	type SwitchPropsWithLabel = BaseSwitchProps & { label: string; children?: never };
	type SwitchPropsWithChildren = BaseSwitchProps & { children: Snippet; label?: never };

	type SwitchProps = SwitchPropsWithLabel | SwitchPropsWithChildren;

	let { style, size = 'md', label, children, accentColor, onChange }: SwitchProps = $props();

	let checked = $state(false);
	$effect(() => onChange(checked));
</script>

<Label
	style="display: flex; align-items: center; {accentColor && `--colors-primary-500:${accentColor}`}"
	class="switch-label {size}"
>
	<Input bind:checked type="checkbox" cs={{ marginRight: '.5rem' }} {style} />
	{#if label}
		{label}
	{:else if children}
		{@render children()}
	{/if}
</Label>

<style>
	:global(.switch-label.sm input) {
		--line-height: 1.25;
	}
	:global(.switch-label.md input) {
		--line-height: 1.5;
	}
	:global(.switch-label input) {
		--height: calc(var(--line-height) * 1rem);
		--width: calc(var(--height) * 1.75);
		appearance: none;
		position: relative;
		display: inline-block;
		background: lightgrey;
		height: var(--height);
		width: var(--width);
		border-radius: 2rem;
		box-shadow: 0px 1px 3px #0003 inset;
		transition: 0.15s linear background;
		margin-block: calc((44px - var(--height)) / 2);
		margin-inline: calc((44px - var(--width)) / 2);
	}
	:global(.switch-label input)::before {
		--toggle-margin: 0.4rem;
		content: '🗙';
		display: block;
		height: calc(var(--height) - var(--toggle-margin));
		aspect-ratio: 1/1;
		background: white;
		border-radius: 50%;
		position: absolute;
		top: calc(var(--toggle-margin) / 2);
		left: calc(var(--toggle-margin) / 2);
		box-shadow: 0px 1px 3px #0003;
		transition: 0.15s linear transform;
		transform: translateX(0rem);
	}
	:global(.switch-label input):checked {
		background: var(--colors-primary-500);
	}
	:global(.switch-label input):checked::before {
		transform: translateX(calc(var(--width) - var(--height)));
	}
	:global(.switch-label input):focus-visible {
		outline: 2px solid var(--colors-primary-500);
		outline-offset: 2px;
	}
	:global(.switch-label) {
		user-select: none;
	}

	/* Touch target to force 44px by 44px for a11y */
	:global(.switch-label input)::after {
		content: '';
		position: absolute;
		top: calc(-1 * (44px - var(--height)) / 2);
		bottom: calc(-1 * (44px - var(--height)) / 2);
		left: calc(-1 * (44px - var(--width)) / 2);
		right: calc(-1 * (44px - var(--width)) / 2);
	}
</style>
