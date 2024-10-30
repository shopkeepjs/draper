
import { parse } from 'svelte/compiler'
import type { Attribute } from 'svelte/types/compiler/interfaces';

function camelToKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

const customElementNames = ['Box']

function replaceSubstring(start: number, end: number, replacement: string, content: string) {
  return content.substring(0, start) + replacement + content.substring(end)
}

function replacesCssPropWithInlineStyles(customStylingAttribute: Attribute, content: string) {
  const cssProperties = customStylingAttribute.value[0].expression.properties.reduce((acc: string, property: any) => {
    const propertyName = camelToKebabCase(property.key.name)
    // TODO - insert design system specific values to transition things like 1 to 4px etc
    const propertyValue = property.value.value
    return acc + `${propertyName}: ${propertyValue}; `
  }, '')
  return replaceSubstring(customStylingAttribute.start, customStylingAttribute.end, `style="${cssProperties.trim()}"`, content)
}

export function cssPropToInlineStyles(content: string) {
  try {
    const { html: parsedContent } = parse(content)
    let newContent = content;
    parsedContent.children?.forEach((node) => {
      const isACustomElement = customElementNames.includes(node.name)
      const customStyling: Attribute = node.attributes.find(({ name }: { name: string }) => name === 'cs')
      if (isACustomElement && customStyling) {
        newContent = replacesCssPropWithInlineStyles(customStyling, content)
      } else {
        return content;
      }
    })
    return newContent
  } catch {
    return content
  }
}

export function tailorPreprocessor() {
  return {
    markup({ content }: { content: string }) {
      const transformedCode = cssPropToInlineStyles(content);
      return {
        code: transformedCode,
      };
    },
  };
}
