/** @type { import('@storybook/svelte').Preview } */
import GlobalStyles from '../src/lib/components/GlobalStyles/GlobalStyles.svelte';

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [() => GlobalStyles]
};

export default preview;
