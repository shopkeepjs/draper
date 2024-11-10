# Tailor

ShopkeepJS Tailor is a Svelte-based component library designed to provide a set of reusable UI components. This project uses SvelteKit, Vite, and Storybook for development and testing.

## Project Structure

### Key Directories and Files

- **.storybook/**: Configuration for Storybook.
- **.svelte-kit/**: SvelteKit generated files.
- **src/**: Source code for the project.
  - **lib/**: Contains the main library components.
  - **routes/**: SvelteKit routes.
  - **types/**: TypeScript types.
- **static/**: Static assets.
- **svelte.config.js**: Svelte configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **vite.config.ts**: Vite configuration file.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Features

- **Svelte Native Components**: Designed specifically for SvelteKit projects, enabling seamless integration and efficient development.
- **Highly Customizable**: All components are highly customizable to fit your design requirements.
- **Accessibility Focused**: Built with accessibility (a11y) best practices to ensure an inclusive experience for all users.
- **Responsive**: All components are mobile-first and fully responsive, adapting perfectly to different screen sizes.

## Installation

To get started with the library, install it via npm or yarn:

```bash
npm install @shopkeepjs/tailor
```

## Usage

To use a component from the library, simply import it into your Svelte file:

```svelte
<script>
  import { Wrap } from '@shopkeepjs/tailor';
</script>

<Wrap>Hi I'm wrapped!</Wrap>
```

## Available Components

The library includes a variety of components to help you build your application. Here are some of the components available:

- **Wrap**: A simple wrapper component.
- **Flexbox**: A simple wrapper component that is automatically flexboxed.
- **Text**: A wrapper for your text elements.

## Documentation

-- 

## Development

To contribute or run the library locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/shopkeepjs/tailor.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! Please see the [contributing guide](CONTRIBUTING.md) for more information on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or issues, feel free to open an issue on [GitHub](https://github.com/your-namespace/your-library-name/issues) or reach out to us at [support@your-email.com](mailto:support@your-email.com).

---

