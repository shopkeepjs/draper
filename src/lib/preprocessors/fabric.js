
import { parse } from 'svelte/compiler'

export function camelToKebabCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function replaceSubstring(original, replacement, start, end) {
  if (start < 0) {
    throw Error('Start index must be greater than or equal to 0')
  }
  if (end !== undefined && end < 0) {
    throw Error('End index must be greater than or equal to 0')
  }
  if (end !== undefined && end < start) {
    throw Error('End index must be greater than or equal to start index')
  } else if (end !== undefined && end > original.length) {
    throw Error('End index must be less than or equal to the length of the original string')
  }
  if (start > original.length) {
    throw Error('Start index must be less than or equal to the length of the original string')
  }
  if (end === undefined) {
    return original.substring(0, start) + replacement + original.substring(original.length)
  }
  return original.substring(0, start) + replacement + original.substring(end)
}

export function convertsCsPropToInlineStyles(customStylingAttribute) {
   const insideString = customStylingAttribute.value[0].expression.properties.reduce((acc, property) => {
    const propertyName = camelToKebabCase(property.key.name)
    // TODO - insert design system specific values to transition things like 1 to 4px etc
    const propertyValue = property.value.value
    return acc + `${propertyName}: ${propertyValue}; `
  }, '')
return `style="${insideString.trim()}"`
}

export function fabric(content, filename) {
  try {
    const {html, module} = parse(content, {filename})
    let offset = 0;
    html.children?.forEach((node) => {
      const isAFabricFile = filename.includes('fabric')
      const customStyling = node.attributes?.find(({ name }) => name === 'cs')
      if (isAFabricFile && customStyling) {
        const styleString = convertsCsPropToInlineStyles(customStyling)
        const stringDifference = styleString.length - (customStyling.end - customStyling.start)
        content = replaceSubstring(content, styleString, customStyling.start + offset, customStyling.end  + offset)
        offset = offset + stringDifference
      }
    })
    return content;
  } catch(error) {
    console.error('Error parsing content', error)
    return content;
  }
}

/**
 * @param {import('./public.d.ts').VitePreprocessOptions} [opts]
 * @returns {import('svelte/compiler').PreprocessorGroup}
 */
export function fabricPreprocessor() {
  return {
    name: 'fabric-preprocessor',
    markup({ content, filename}) {
      const transformedCode = fabric(content, filename);
      return {
        code: transformedCode,
      };
    }
  };
}
