import type { Styles } from "../types/styles.js";

export const camelToKebab = (camelString: string): string => {
	let kebabString = '';
	for (let i = 0; i < camelString.length; i += 1) {
		const char = camelString[i];
		if (char.toUpperCase() === char) {
			kebabString += `-${char.toLowerCase()}`;
		} else {
			kebabString += char;
		}
	}
	return kebabString;
};

export const parse = (styles: Styles) => {
	return Object.entries(styles).reduce((str: string, [key, value]: [string, unknown]) => {
		// TODO - re-implement this
		// if (key === 'boxShadow' && typeof value === 'string' && typeGuard<Volume>(value, volumes))
		// 	return (str += `box-shadow: ${boxShadowLookup[value]};`);
		const property = camelToKebab(key);
		return `${str}${property}:${value};`;
	}, '');
};