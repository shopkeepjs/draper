import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { threadPreprocessor } from '@shopkeep/thread';
import { elementNames } from './src/lib/constants/constants.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		threadPreprocessor({
			attributeName: 'cs',
			elementNames,
			shouldIncludeStorybookFiles: true
		})
	],
	kit: {
		adapter: adapter(),
		files: {
			lib: 'src/lib'
		}
	}
};

export default config;
