
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import GlobalStylesExample from './GlobalStyles.example.svelte';

describe('GlobalStyles', () => {
	describe('Flexbox Component', () => {
		it('renders without props', () => {
			const { container } = render(GlobalStylesExample);
			expect(container).toBeTruthy();
		});

		it('renders with children prop', () => {
			const { container } = render(GlobalStylesExample);
			expect(container.textContent).toBe('Child');
		});
	});
});