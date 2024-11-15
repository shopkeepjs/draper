<script lang="ts">
	import type { SizeMaxMed, Styles } from '$lib/types/styles.js';
	import Label from '$lib/components/Label/Label.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import X from '$lib/icons/X.svelte';
	import type { Snippet } from 'svelte';
	import Check from '$lib/icons/Check.svelte';

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
	{#if checked}
		<Icon size={'10px'}><Check /></Icon>
	{:else}
		<Icon size={'10px'}><X /></Icon>
	{/if}
	{#if label}
		{label}
	{:else if children}
		{@render children()}
	{/if}
</Label>

<style>
	:global(.switch-label) {
		--height: calc(var(--line-height) * 1rem);
		--width: calc(var(--height) * 1.75);
	}
	:global(.switch-label.sm) {
		--line-height: 1.25;
	}
	:global(.switch-label.md) {
		--line-height: 1.5;
	}
	:global(.switch-label input) {
		appearance: none;
		position: relative;
		background: lightgrey;
		height: var(--height);
		width: var(--width);
		border-radius: 2rem;
		box-shadow: 0px 1px 3px #0003 inset;
		transition: 0.15s linear background;
		/* To make room for the 44px by 44px a11y target in :after */
		margin-block: calc((44px - var(--height)) / 2);
		margin-inline: calc((44px - var(--width)) / 2);
	}
	:global(.switch-label input)::before {
		--toggle-margin: 0.3rem;
		content: '';
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

	:global(.switch-label .icon-wrapper) {
		--toggle-margin: 0.4rem;
		--margin-left: calc(((44px - var(--width)) / 2));
		--thumb-width: calc((var(--height) - var(--toggle-margin)));

		--left-position: calc(var(--margin-left) + (var(--thumb-width) / 2) + 6px);
		position: absolute;
		left: var(--left-position);

		transition: opacity 0.1s linear 0.15s;
		opacity: 0.6;
	}
	:global(.switch-label input:checked ~ .icon-wrapper) {
		color: var(--colors-primary-500);
		transform: translateX(calc(var(--width) - var(--height) + 0.5px));
	}
</style>
