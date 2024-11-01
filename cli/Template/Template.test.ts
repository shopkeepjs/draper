import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Template from './Template.svelte';
import TemplateTest from './Template.example.svelte';

describe('Template Component', () => {
	it('renders without props', () => {
		const { container } = render(Template);
		expect(container).toBeTruthy();
	});
});
