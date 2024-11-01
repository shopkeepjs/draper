<script module lang="ts">
	import { defineMeta, type StoryContext } from '@storybook/addon-svelte-csf';
	import Switch from './Switch.svelte';
	import Text from '../Text/Text.svelte';

	const { Story } = defineMeta({
		title: 'Components/Switch',
		component: Switch,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: {
					type: 'select',
					options: ['sm', 'md']
				}
			},
			accentColor: {
				control: 'color'
			},
			label: {
				control: 'text'
			},
			style: {
				table: {
					disable: true
				}
			},
			children: {
				table: {
					disable: true
				}
			}
		}
	});
</script>

<Story name="Base">
	{#snippet children(args: typeof Switch, context: StoryContext<typeof Story>)}
		<Switch label={'Replace me'} />
	{/snippet}
</Story>

<Story name="Variations">
	{#snippet children(args: typeof Switch)}
		<Switch label={'I am small'} size="sm" />
		<Switch label={'But I am big!'} />
		<Switch><Text>And I'm a child</Text></Switch>
	{/snippet}
</Story>
