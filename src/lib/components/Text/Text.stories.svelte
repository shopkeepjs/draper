<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Text from './Text.svelte';

	const { Story } = defineMeta({
		title: 'Components/Text',
		component: Text,
		tags: ['autodocs'],
		argTypes: {
			style: {
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
			color: 'black'
		}
	}}
>
	{#snippet children(args: typeof Text)}
		<Text {...args}>Hello World</Text>
	{/snippet}
</Story>
