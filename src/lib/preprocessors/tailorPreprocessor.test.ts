import { describe, it, expect } from 'vitest';
import { convertsCsPropToInlineStyles, replaceSubstring, fabric, camelToKebabCase } from './fabric.js';

// write a test for replaceSubstring
describe('replaceSubstring', () => {
  it('should replace a substring within the specified range', () => {
    const original = 'Hello, world!';
    const replacement = 'beautiful';
    const start = 7;
    const end = 12;
    const expectedOutput = 'Hello, beautiful!';
    expect(replaceSubstring(original, replacement, start, end)).toBe(expectedOutput);
  });

  it('should replace from the start of the string', () => {
    const original = 'Hello, world!';
    const replacement = 'Hi';
    const start = 0;
    const end = 5;
    const expectedOutput = 'Hi, world!';
    expect(replaceSubstring(original, replacement, start, end)).toBe(expectedOutput);
  });

  it('should replace to the end of the string', () => {
    const original = 'Hello, world!';
    const replacement = 'everyone';
    const start = 7;
    const end = original.length;
    const expectedOutput = 'Hello, everyone';
    expect(replaceSubstring(original, replacement, start, end)).toBe(expectedOutput);
  });

  it('should handle replacement when start and end are the same', () => {
    const original = 'Hello, world!';
    const replacement = ' beautiful';
    const start = 5;
    const end = 5;
    const expectedOutput = 'Hello beautiful, world!';
    expect(replaceSubstring(original, replacement, start, end)).toBe(expectedOutput);
  });

  it('should throw an error if start index is out of bounds', () => {
    const original = 'Hello, world!';
    const replacement = 'test';
    const start = -1;
    const end = 5;
    expect(() => replaceSubstring(original, replacement, start, end)).toThrow('Start index must be greater than or equal to 0');
  });

  it('should throw an error if end index is less than start index', () => {
    const original = 'Hello, world!';
    const replacement = 'test';
    const start = 5;
    const end = 3;
    expect(() => replaceSubstring(original, replacement, start, end)).toThrow('End index must be greater than or equal to start index');
  });

  it('should throw an error if end index is out of bounds', () => {
    const original = 'Hello, world!';
    const replacement = 'test';
    const start = 5;
    const end = 50;
    expect(() => replaceSubstring(original, replacement, start, end)).toThrow('End index must be less than or equal to the length of the original string');
  });
  it('should replace to the end of the string when end is not provided', () => {
    const original = 'Hello, world!';
    const replacement = 'everyone';
    const start = 7;
    const expectedOutput = 'Hello, everyone';
    expect(replaceSubstring(original, replacement, start)).toBe(expectedOutput);
  });
});

describe('convertsCsPropToInlineStyles', () => {
  it('should convert camelCase properties to kebab-case', () => {
    const customStylingAttribute = {
      value: [
        {
          expression: {
            properties: [
              { key: { name: 'backgroundColor' }, value: { value: 'aqua' } },
              { key: { name: 'paddingTop' }, value: { value: '10px' } },
            ],
          },
        },
      ],
    };
    const expectedOutput = 'style="background-color: aqua; padding-top: 10px;"';
    expect(convertsCsPropToInlineStyles(customStylingAttribute)).toBe(expectedOutput);
  });

  it('should handle empty properties', () => {
    const customStylingAttribute = {
      value: [
        {
          expression: {
            properties: [],
          },
        },
      ],
    };
    const expectedOutput = 'style=""';
    expect(convertsCsPropToInlineStyles(customStylingAttribute)).toBe(expectedOutput);
  });

  it('should handle multiple properties', () => {
    const customStylingAttribute = {
      value: [
        {
          expression: {
            properties: [
              { key: { name: 'margin' }, value: { value: '5px' } },
              { key: { name: 'color' }, value: { value: 'red' } },
            ],
          },
        },
      ],
    };
    const expectedOutput = 'style="margin: 5px; color: red;"';
    expect(convertsCsPropToInlineStyles(customStylingAttribute)).toBe(expectedOutput);
  });
});

describe('camelToKebabCase', () => {
  it('should convert camelCase to kebab-case', () => {
    const input = 'backgroundColor';
    const expectedOutput = 'background-color';
    expect(camelToKebabCase(input)).toBe(expectedOutput);
  });

  it('should handle single word input', () => {
    const input = 'color';
    const expectedOutput = 'color';
    expect(camelToKebabCase(input)).toBe(expectedOutput);
  });

  it('should handle multiple uppercase letters', () => {
    const input = 'paddingTopLeft';
    const expectedOutput = 'padding-top-left';
    expect(camelToKebabCase(input)).toBe(expectedOutput);
  });

  it('should return an empty string when input is empty', () => {
    const input = '';
    const expectedOutput = '';
    expect(camelToKebabCase(input)).toBe(expectedOutput);
  });

  it('should handle already kebab-case input', () => {
    const input = 'border-width';
    const expectedOutput = 'border-width';
    expect(camelToKebabCase(input)).toBe(expectedOutput);
  });
});

describe('fabric', () => {
  it('should convert cs attribute to inline style', () => {
    const content = '<Box cs={{backgroundColor: "aqua", paddingTop: "10px"}} />';
    const expectedOutput = '<Box style="background-color: aqua; padding-top: 10px;" />';
    expect(fabric(content)).toBe(expectedOutput);
  });

  it('should handle multiple custom elements with cs attributes', () => {
    const content = '<Box cs={{margin: "5px"}} /><Box cs={{color: "red"}} />';
    const expectedOutput = '<Box style="margin: 5px;" /><Box style="color: red;" />';
    expect(fabric(content)).toBe(expectedOutput);
  });

  it('should return original content if no cs attribute is present', () => {
    const content = '<Box id="test" />';
    expect(fabric(content)).toBe(content);
  });

  it('should handle invalid content gracefully', () => {
    const content = '<Box cs={{invalidJson: }} />';
    expect(fabric(content)).toBe(content);
  });

  it('should convert nested custom elements with cs attributes', () => {
    const content = '<Box cs={{color: "blue"}}><div></div></Box>';
    const expectedOutput = '<Box style="color: blue;"><div></div></Box>';
    expect(fabric(content)).toBe(expectedOutput);
  });

  it('should convert cs attribute to inline style', () => {
    const content = `<script>
      import { Box } from './index.js';
    </script>

    <Box cs={{ height: '200px', width: '200px', backgroundColor: 'aqua' }}></Box>
    <Box cs={{ height: '200px', width: '200px' }}></Box>
    <Box data-asdf="asdf" cs={{ height: '200px', width: '200px' }}></Box>
    <Box cs={{ height: '200px', width: '200px' }} data-asdf="asdf"></Box>
    <Box data-qwer="qwer" cs={{ height: '200px', width: '200px' }} data-asdf="asdf"></Box>`;
    const expectedOutput = `<script>
      import { Box } from './index.js';
    </script>

    <Box style="height: 200px; width: 200px; background-color: aqua;"></Box>
    <Box style="height: 200px; width: 200px;"></Box>
    <Box data-asdf="asdf" style="height: 200px; width: 200px;"></Box>
    <Box style="height: 200px; width: 200px;" data-asdf="asdf"></Box>
    <Box data-qwer="qwer" style="height: 200px; width: 200px;" data-asdf="asdf"></Box>`;
    expect(fabric(content)).toBe(expectedOutput.trim());
  })
  it('should convert cs attribute to inline style when there is a style tag', () => {
    const content = `<script>
      import { Box } from './index.js';
    </script>

    <style>
      .box {
        background-color: aqua;
      }
    </style>
    <Box cs={{ height: '200px', width: '200px', backgroundColor: 'aqua' }}></Box>
    <Box cs={{ height: '200px', width: '200px' }}></Box>
    <Box data-asdf="asdf" cs={{ height: '200px', width: '200px' }}></Box>
    <Box cs={{ height: '200px', width: '200px' }} data-asdf="asdf"></Box>
    <Box data-qwer="qwer" cs={{ height: '200px', width: '200px' }} data-asdf="asdf"></Box>`;
    const expectedOutput = `<script>
      import { Box } from './index.js';
    </script>

    <style>
      .box {
        background-color: aqua;
      }
    </style>
    <Box style="height: 200px; width: 200px; background-color: aqua;"></Box>
    <Box style="height: 200px; width: 200px;"></Box>
    <Box data-asdf="asdf" style="height: 200px; width: 200px;"></Box>
    <Box style="height: 200px; width: 200px;" data-asdf="asdf"></Box>
    <Box data-qwer="qwer" style="height: 200px; width: 200px;" data-asdf="asdf"></Box>`;
    expect(fabric(content)).toBe(expectedOutput.trim());
  })
});