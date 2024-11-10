<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Icon from './Icon.svelte';

	const { Story } = defineMeta({
		title: 'incomplete/Icon',
		component: Icon,
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
	{#snippet children(args: typeof Icon)}
		<Icon {...args}>Test</Icon>
	{/snippet}
</Story>
