<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrap from './Wrap.svelte';

	const { Story } = defineMeta({
		title: 'Components/Wrap',
		component: Wrap,
		tags: ['autodocs'],
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
	{#snippet children(args: typeof Wrap)}
		<Wrap {...args}>This is a wrapper</Wrap>
	{/snippet}
</Story>
