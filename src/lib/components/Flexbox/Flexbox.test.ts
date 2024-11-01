import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Flexbox from './Flexbox.svelte';
import FlexboxTest from './Flexbox.example.svelte';

describe('Flexbox Component', () => {
	it('renders without props', () => {
		const { container } = render(Flexbox);
		expect(container).toBeTruthy();
	});

	it('renders with children prop', () => {
		const { container } = render(FlexboxTest);
		expect(container.textContent).toBe('Child');
	});
});
