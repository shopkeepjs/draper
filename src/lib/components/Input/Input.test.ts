import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Input from './Input.svelte';
import InputTest from './Input.example.svelte';

describe('Input Component', () => {
	it('renders without props', () => {
		const { container } = render(Input);
		expect(container).toBeTruthy();
	});
});
