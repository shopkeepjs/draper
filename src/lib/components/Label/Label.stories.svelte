<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Label from './Label.svelte';

	const { Story } = defineMeta({
		title: 'incomplete/Label',
		component: Label,
		tags: ['!dev'],
		argTypes: {
			style: {
				table: {
					disable: true
				}
			},
			children: {
				table: {
					disable: true
				}
			},
			cs: {
				control: {
					disable: true
				}
			}
		}
	});
</script>

<Story
	name="Base"
	args={{
		cs: {
			backgroundColor: 'rebeccapurple',
			paddingInline: '1rem',
			paddingBlock: '1rem',
			color: 'white'
		}
	}}
>
	{#snippet children(args: typeof Label)}
		<Label {...args}>Test</Label>
	{/snippet}
</Story>
