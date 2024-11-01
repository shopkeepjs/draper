import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Switch from './Switch.svelte';

describe('Switch Component', () => {
	it('renders without props', () => {
		const { container } = render(Switch);
		expect(container).toBeTruthy();
	});
});
