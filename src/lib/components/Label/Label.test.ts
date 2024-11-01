import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Label from './Label.svelte';
import LabelTest from './Label.example.svelte';

describe('Label Component', () => {
	it('renders without props', () => {
		const { container } = render(Label);
		expect(container).toBeTruthy();
	});
});
