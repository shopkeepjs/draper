import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Icon from './Icon.svelte';
import IconTest from './Icon.example.svelte';

describe('Icon Component', () => {
	it('renders without props', () => {
		const { container } = render(Icon);
		expect(container).toBeTruthy();
	});
});
