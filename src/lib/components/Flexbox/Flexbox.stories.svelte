<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Flexbox from './Flexbox.svelte';
	import Box from '../Wrap/Wrap.svelte';

	const { Story } = defineMeta({
		title: 'Components/Flexbox',
		component: Flexbox,
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
			color: 'white'
		}
	}}
>
	{#snippet children(args: typeof Flexbox)}
		<Flexbox {...args}>
			<!-- TODO - change this to cs={} once https://github.com/shopkeepjs/thread/issues/6 is fixed -->
			<Box style="flex-grow: 1;">This is left</Box>
			<Box style="flex-grow: 1; background-color: pink; color: black; text-align: right;"
				>This is right!</Box
			>
		</Flexbox>
	{/snippet}
</Story>
