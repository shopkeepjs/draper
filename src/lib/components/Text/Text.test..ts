import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Text from './Text.example.svelte';

describe('Text Component', () => {
	it('renders without props', () => {
		const { container } = render(Text);
		expect(container).toBeTruthy();
	});
});
