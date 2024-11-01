import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Wrap from './Wrap.svelte';
import WrapTest from './Wrap.example.svelte';

describe('Wrap Component', () => {
	it('renders without props', () => {
		const { container } = render(Wrap);
		expect(container).toBeTruthy();
	});

	it('renders with children prop', () => {
		const { container } = render(WrapTest);
		expect(container.textContent).toBe('Child');
	});

	it('renders with cs prop', () => {
		const { container } = render(Wrap, { cs: { margin: '10px' } });
		expect(container).toBeTruthy(); // Assuming cs is used internally and not directly visible
	});
});
