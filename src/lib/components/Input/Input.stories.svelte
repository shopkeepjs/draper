<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from './Input.svelte';

	const { Story } = defineMeta({
		title: 'incomplete/Input',
		component: Input,
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
	{#snippet children(args: typeof Input)}
		<Input {...args}>Test</Input>
	{/snippet}
</Story>
