<script lang="ts">
	import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';
	import Switch from '$lib/components/Switch/Switch.svelte';
	import GlobalStyles from '$lib/components/GlobalStyles/GlobalStyles.svelte';
	import Text from '$lib/components/Text/Text.svelte';

	const checkChecked = (checked: boolean, index?: number) => console.log(checked, index);
</script>

<GlobalStyles>
	<Flexbox cs={{ flexFlow: 'column' }}>
		<Switch size="sm" onChange={checkChecked}>
			<Text cs={{ color: 'green' }}>Hi</Text>
		</Switch>
		<Switch label="This is medium" size="sm" onChange={checkChecked} />
		<Switch label="Hi" accentColor={'#1d74c1'} onChange={checkChecked} />
	</Flexbox>
</GlobalStyles>
