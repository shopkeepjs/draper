<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Template from './Template.svelte';

	const { Story } = defineMeta({
		title: 'incomplete/Template',
		component: Template,
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
	{#snippet children(args: typeof Template)}
		<Template {...args}>Test</Template>
	{/snippet}
</Story>
