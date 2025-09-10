![Storybook Theme Editor](/assets/spjpgrd-storybook-theme-editor.jpg)
# Storybook Theme Editor
Judging books by their cover

A web-based visual editor for creating and customizing Storybook themes. This tool allows you to:

- 🎨 Visually customize all Storybook theme properties
- 🌓 Switch between light and dark base themes
- 👀 See live preview of your theme changes
- 📥 Export your theme as a JavaScript file
- 🔄 Reset to default themes

## Features

- **Color Picker**: Visual color selection for all color properties
- **Number Inputs**: Slider and input controls for numeric values
- **Text Inputs**: Customize fonts and brand information
- **Live Preview**: See your theme changes in real-time
- **Export**: Download your theme as a ready-to-use JavaScript file

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd storybook-theme-editor
```

2. Install dependencies:
```bash
npm install
```


3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. **Select Base Theme**: Choose between light or dark base theme
2. **Customize Colors**: Use the color pickers to set all color properties
3. **Adjust Numbers**: Use sliders and inputs for border radius and grid size
4. **Set Typography**: Configure font families for base and code text
5. **Brand Settings**: Add your brand title, URL, and target
6. **Preview**: See your changes in the live preview panel
7. **Export**: Download your theme as `YourTheme.js`

## Theme Properties

The editor supports all Storybook theme properties:

- **Base**: `'light'` or `'dark'`
- **Colors**: Primary, secondary, backgrounds, borders, text, buttons, inputs
- **Typography**: Base font and code font families
- **Layout**: Border radius and grid cell size
- **Brand**: Title, URL, and target settings

## Integration with Storybook

After exporting your theme:

1. Save the `YourTheme.js` file to your Storybook project
2. Import and use it in your `.storybook/main.js`:

```javascript
import { YourTheme } from './YourTheme.js';

export default {
  // ... other config
  addons: [
    // ... other addons
    {
      name: '@storybook/addon-themes',
      options: {
        themes: {
          'Your Theme': YourTheme,
        },
      },
    },
  ],
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
A quick way to edit and create a theme for your Storybook.
