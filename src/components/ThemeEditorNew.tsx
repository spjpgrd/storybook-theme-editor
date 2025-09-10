import { useState } from 'react';
import { StorybookTheme, defaultLightTheme, defaultDarkTheme } from '../theme';
import ColorPicker from './ColorPicker';
import NumberInput from './NumberInput';
import TextInput from './TextInput';
import BaseSelector from './BaseSelector';
import StorybookSidebar from './StorybookSidebar';
import { Download, RotateCcw, Sun, Moon, Eye, Code } from 'lucide-react';

export default function ThemeEditor() {
  const [theme, setTheme] = useState<StorybookTheme>(defaultLightTheme);
  const [showCode, setShowCode] = useState(false);

  const updateTheme = (updates: Partial<StorybookTheme>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  const resetToDefault = () => {
    setTheme(theme.base === 'light' ? defaultLightTheme : defaultDarkTheme);
  };

  const switchBase = (base: 'light' | 'dark') => {
    setTheme(base === 'light' ? defaultLightTheme : defaultDarkTheme);
  };

  const exportTheme = () => {
    const themeString = `export const YourTheme = {
  base: '${theme.base}',
  colorPrimary: '${theme.colorPrimary}',
  colorSecondary: '${theme.colorSecondary}',
  appBg: '${theme.appBg}',
  appContentBg: '${theme.appContentBg}',
  appPreviewBg: '${theme.appPreviewBg}',
  appBorderColor: '${theme.appBorderColor}',
  appBorderRadius: ${theme.appBorderRadius},
  fontBase: '${theme.fontBase}',
  fontCode: '${theme.fontCode}',
  textColor: '${theme.textColor}',
  textInverseColor: '${theme.textInverseColor}',
  textMutedColor: '${theme.textMutedColor}',
  barTextColor: '${theme.barTextColor}',
  barHoverColor: '${theme.barHoverColor}',
  barSelectedColor: '${theme.barSelectedColor}',
  barBg: '${theme.barBg}',
  buttonBg: '${theme.buttonBg}',
  buttonBorder: '${theme.buttonBorder}',
  booleanBg: '${theme.booleanBg}',
  booleanSelectedBg: '${theme.booleanSelectedBg}',
  inputBg: '${theme.inputBg}',
  inputBorder: '${theme.inputBorder}',
  inputTextColor: '${theme.inputTextColor}',
  inputBorderRadius: ${theme.inputBorderRadius},${theme.brandTitle ? `
  brandTitle: '${theme.brandTitle}',` : ''}${theme.brandUrl ? `
  brandUrl: '${theme.brandUrl}',` : ''}${theme.brandTarget ? `
  brandTarget: '${theme.brandTarget}',` : ''}${theme.gridCellSize ? `
  gridCellSize: ${theme.gridCellSize},` : ''}
};`;

    const blob = new Blob([themeString], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'YourTheme.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Demo Only */}
      <StorybookSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Storybook Theme Editor</h1>
              <p className="text-sm text-gray-600">Customize your Storybook theme and export it as a JavaScript file</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={resetToDefault}
                className="flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </button>
              <button
                onClick={exportTheme}
                className="flex items-center px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <Download className="w-4 h-4 mr-1" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Theme Controls */}
                <div className="space-y-8">
                  {/* Base Theme */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Sun className="w-5 h-5 mr-2" />
                      Base Theme
                    </h2>
                    <BaseSelector value={theme.base} onChange={switchBase} />
                  </div>

                  {/* Primary Colors */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Sun className="w-5 h-5 mr-2" />
                      Primary Colors
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="Primary Color"
                        value={theme.colorPrimary}
                        onChange={(color) => updateTheme({ colorPrimary: color })}
                        description="Main accent color"
                      />
                      <ColorPicker
                        label="Secondary Color"
                        value={theme.colorSecondary}
                        onChange={(color) => updateTheme({ colorSecondary: color })}
                        description="Secondary accent color"
                      />
                    </div>
                  </div>

                  {/* App Colors */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Moon className="w-5 h-5 mr-2" />
                      App Colors
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="App Background"
                        value={theme.appBg}
                        onChange={(color) => updateTheme({ appBg: color })}
                      />
                      <ColorPicker
                        label="Content Background"
                        value={theme.appContentBg}
                        onChange={(color) => updateTheme({ appContentBg: color })}
                      />
                      <ColorPicker
                        label="Preview Background"
                        value={theme.appPreviewBg}
                        onChange={(color) => updateTheme({ appPreviewBg: color })}
                      />
                      <ColorPicker
                        label="Border Color"
                        value={theme.appBorderColor}
                        onChange={(color) => updateTheme({ appBorderColor: color })}
                      />
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Typography</h2>
                    <div className="space-y-4">
                      <TextInput
                        label="Base Font"
                        value={theme.fontBase}
                        onChange={(font) => updateTheme({ fontBase: font })}
                        placeholder="e.g., 'Helvetica', 'Arial', sans-serif"
                        description="Main font family"
                      />
                      <TextInput
                        label="Code Font"
                        value={theme.fontCode}
                        onChange={(font) => updateTheme({ fontCode: font })}
                        placeholder="e.g., 'Monaco', 'Consolas', monospace"
                        description="Monospace font for code"
                      />
                    </div>
                  </div>

                  {/* Text Colors */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Text Colors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="Text Color"
                        value={theme.textColor}
                        onChange={(color) => updateTheme({ textColor: color })}
                      />
                      <ColorPicker
                        label="Inverse Text"
                        value={theme.textInverseColor}
                        onChange={(color) => updateTheme({ textInverseColor: color })}
                      />
                      <ColorPicker
                        label="Muted Text"
                        value={theme.textMutedColor}
                        onChange={(color) => updateTheme({ textMutedColor: color })}
                      />
                    </div>
                  </div>

                  {/* Navigation Bar */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation Bar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="Bar Background"
                        value={theme.barBg}
                        onChange={(color) => updateTheme({ barBg: color })}
                      />
                      <ColorPicker
                        label="Bar Text"
                        value={theme.barTextColor}
                        onChange={(color) => updateTheme({ barTextColor: color })}
                      />
                      <ColorPicker
                        label="Bar Hover"
                        value={theme.barHoverColor}
                        onChange={(color) => updateTheme({ barHoverColor: color })}
                      />
                      <ColorPicker
                        label="Bar Selected"
                        value={theme.barSelectedColor}
                        onChange={(color) => updateTheme({ barSelectedColor: color })}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Buttons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="Button Background"
                        value={theme.buttonBg}
                        onChange={(color) => updateTheme({ buttonBg: color })}
                      />
                      <ColorPicker
                        label="Button Border"
                        value={theme.buttonBorder}
                        onChange={(color) => updateTheme({ buttonBorder: color })}
                      />
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Inputs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="Input Background"
                        value={theme.inputBg}
                        onChange={(color) => updateTheme({ inputBg: color })}
                      />
                      <ColorPicker
                        label="Input Border"
                        value={theme.inputBorder}
                        onChange={(color) => updateTheme({ inputBorder: color })}
                      />
                      <ColorPicker
                        label="Input Text"
                        value={theme.inputTextColor}
                        onChange={(color) => updateTheme({ inputTextColor: color })}
                      />
                    </div>
                  </div>

                  {/* Boolean Controls */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Boolean Controls</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ColorPicker
                        label="Boolean Background"
                        value={theme.booleanBg}
                        onChange={(color) => updateTheme({ booleanBg: color })}
                      />
                      <ColorPicker
                        label="Boolean Selected"
                        value={theme.booleanSelectedBg}
                        onChange={(color) => updateTheme({ booleanSelectedBg: color })}
                      />
                    </div>
                  </div>

                  {/* Border Radius */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Border Radius</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <NumberInput
                        label="App Border Radius"
                        value={theme.appBorderRadius}
                        onChange={(radius) => updateTheme({ appBorderRadius: radius })}
                        min={0}
                        max={20}
                        description="px"
                      />
                      <NumberInput
                        label="Input Border Radius"
                        value={theme.inputBorderRadius}
                        onChange={(radius) => updateTheme({ inputBorderRadius: radius })}
                        min={0}
                        max={20}
                        description="px"
                      />
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Grid</h2>
                    <NumberInput
                      label="Grid Cell Size"
                      value={theme.gridCellSize || 10}
                      onChange={(size) => updateTheme({ gridCellSize: size })}
                      min={4}
                      max={32}
                      description="px"
                    />
                  </div>

                  {/* Brand */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Brand</h2>
                    <div className="space-y-4">
                      <TextInput
                        label="Brand Title"
                        value={theme.brandTitle || ''}
                        onChange={(title) => updateTheme({ brandTitle: title })}
                        placeholder="Your brand name"
                      />
                      <TextInput
                        label="Brand URL"
                        value={theme.brandUrl || ''}
                        onChange={(url) => updateTheme({ brandUrl: url })}
                        placeholder="https://your-website.com"
                      />
                      <TextInput
                        label="Brand Target"
                        value={theme.brandTarget || ''}
                        onChange={(target) => updateTheme({ brandTarget: target })}
                        placeholder="_self, _blank, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Live Preview
                  </h2>
                  <div
                    className="p-6 rounded-lg border-2 border-dashed"
                    style={{
                      backgroundColor: theme.appBg,
                      borderColor: theme.appBorderColor,
                      borderRadius: `${theme.appBorderRadius}px`
                    }}
                  >
                    <div
                      className="p-4 rounded mb-4"
                      style={{
                        backgroundColor: theme.appContentBg,
                        borderRadius: `${theme.appBorderRadius}px`
                      }}
                    >
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor, fontFamily: theme.fontBase }}
                      >
                        Storybook Theme Preview
                      </h3>
                      <p
                        className="mb-4"
                        style={{ color: theme.textMutedColor, fontFamily: theme.fontBase }}
                      >
                        This is how your theme will look in Storybook
                      </p>

                      <div
                        className="p-3 rounded mb-4"
                        style={{
                          backgroundColor: theme.barBg,
                          borderRadius: `${theme.appBorderRadius}px`
                        }}
                      >
                        <div className="flex space-x-4">
                          <button
                            className="px-3 py-1 rounded text-sm"
                            style={{
                              backgroundColor: theme.buttonBg,
                              color: theme.textColor,
                              border: `1px solid ${theme.buttonBorder}`,
                              borderRadius: `${theme.inputBorderRadius}px`
                            }}
                          >
                            Button
                          </button>
                          <span
                            className="px-3 py-1 rounded text-sm"
                            style={{
                              backgroundColor: theme.booleanSelectedBg,
                              color: theme.textInverseColor,
                              borderRadius: `${theme.inputBorderRadius}px`
                            }}
                          >
                            Selected
                          </span>
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Input field"
                        className="w-full p-2 rounded"
                        style={{
                          backgroundColor: theme.inputBg,
                          color: theme.inputTextColor,
                          border: `1px solid ${theme.inputBorder}`,
                          borderRadius: `${theme.inputBorderRadius}px`
                        }}
                      />
                    </div>
                  </div>

                  {/* Export Section */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Export Your Theme</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Click the export button to download your theme as a JavaScript file that you can use in your Storybook project.
                    </p>
                    <button
                      onClick={exportTheme}
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Theme
                    </button>
                  </div>

                  {showCode && (
                    <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{`export const YourTheme = {
  base: '${theme.base}',
  colorPrimary: '${theme.colorPrimary}',
  colorSecondary: '${theme.colorSecondary}',
  appBg: '${theme.appBg}',
  appContentBg: '${theme.appContentBg}',
  appPreviewBg: '${theme.appPreviewBg}',
  appBorderColor: '${theme.appBorderColor}',
  appBorderRadius: ${theme.appBorderRadius},
  fontBase: '${theme.fontBase}',
  fontCode: '${theme.fontCode}',
  textColor: '${theme.textColor}',
  textInverseColor: '${theme.textInverseColor}',
  textMutedColor: '${theme.textMutedColor}',
  barTextColor: '${theme.barTextColor}',
  barHoverColor: '${theme.barHoverColor}',
  barSelectedColor: '${theme.barSelectedColor}',
  barBg: '${theme.barBg}',
  buttonBg: '${theme.buttonBg}',
  buttonBorder: '${theme.buttonBorder}',
  booleanBg: '${theme.booleanBg}',
  booleanSelectedBg: '${theme.booleanSelectedBg}',
  inputBg: '${theme.inputBg}',
  inputBorder: '${theme.inputBorder}',
  inputTextColor: '${theme.inputTextColor}',
  inputBorderRadius: ${theme.inputBorderRadius},${theme.brandTitle ? `
  brandTitle: '${theme.brandTitle}',` : ''}${theme.brandUrl ? `
  brandUrl: '${theme.brandUrl}',` : ''}${theme.brandTarget ? `
  brandTarget: '${theme.brandTarget}',` : ''}${theme.gridCellSize ? `
  gridCellSize: ${theme.gridCellSize},` : ''}
};`}</code>
                      </pre>
                    </div>
                  )}

                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="mt-4 flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    {showCode ? 'Hide' : 'Show'} Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
