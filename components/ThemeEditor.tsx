'use client';

import { useState } from 'react';
import { StorybookTheme, defaultLightTheme, defaultDarkTheme } from '@/types/theme';
import ColorPicker from './ColorPicker';
import NumberInput from './NumberInput';
import TextInput from './TextInput';
import BaseSelector from './BaseSelector';
import StorybookSidebar from './StorybookSidebar';
import { Download, RotateCcw, Sun, Moon, Eye, Code, ChevronUp, ChevronDown, Settings } from 'lucide-react';

export default function ThemeEditor() {
  const [theme, setTheme] = useState<StorybookTheme>(defaultLightTheme);
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'controls' | 'actions'>('controls');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Storybook Theme Editor</h1>
              <p className="text-sm text-gray-600">Customize your Storybook theme and export it as a JavaScript file</p>
            </div>

            {/* Toggle Drawer Button */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              {isDrawerOpen ? 'Hide' : 'Show'} Controls
              {isDrawerOpen ? <ChevronDown className="w-4 h-4 ml-2" /> : <ChevronUp className="w-4 h-4 ml-2" />}
            </button>
          </div>
        </div>

        {/* Canvas Area - Live Preview */}
        <div className={`flex-1 bg-white p-8 transition-all duration-300 ${isDrawerOpen ? 'pb-96' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 rounded-lg border-2 border-dashed min-h-[400px]"
              style={{
                backgroundColor: theme.appBg,
                borderColor: theme.appBorderColor,
                borderRadius: `${theme.appBorderRadius}px`
              }}
            >
              <div
                className="p-6 rounded mb-6"
                style={{
                  backgroundColor: theme.appContentBg,
                  borderRadius: `${theme.appBorderRadius}px`
                }}
              >
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: theme.textColor, fontFamily: theme.fontBase }}
                >
                  Storybook Theme Preview
                </h2>
                <p
                  className="mb-6 text-lg"
                  style={{ color: theme.textMutedColor, fontFamily: theme.fontBase }}
                >
                  This is how your theme will look in Storybook. Use the controls below to customize your theme.
                </p>

                {/* Navigation Bar Preview */}
                <div
                  className="p-4 rounded mb-6"
                  style={{
                    backgroundColor: theme.barBg,
                    borderRadius: `${theme.appBorderRadius}px`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <span
                        className="px-3 py-2 rounded text-sm font-medium"
                        style={{
                          backgroundColor: theme.barSelectedColor,
                          color: theme.textInverseColor,
                          borderRadius: `${theme.inputBorderRadius}px`
                        }}
                      >
                        Selected Item
                      </span>
                      <span
                        className="px-3 py-2 rounded text-sm hover:bg-opacity-80 transition-colors"
                        style={{
                          color: theme.barTextColor,
                          borderRadius: `${theme.inputBorderRadius}px`
                        }}
                      >
                        Hover Item
                      </span>
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: theme.barTextColor }}
                    >
                      Navigation Bar
                    </div>
                  </div>
                </div>

                {/* Buttons Preview */}
                <div className="mb-6">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: theme.textColor, fontFamily: theme.fontBase }}
                  >
                    Buttons
                  </h3>
                  <div className="flex space-x-4">
                    <button
                      className="px-4 py-2 rounded font-medium"
                      style={{
                        backgroundColor: theme.buttonBg,
                        color: theme.textColor,
                        border: `1px solid ${theme.buttonBorder}`,
                        borderRadius: `${theme.inputBorderRadius}px`
                      }}
                    >
                      Primary Button
                    </button>
                    <button
                      className="px-4 py-2 rounded font-medium"
                      style={{
                        backgroundColor: theme.colorPrimary,
                        color: theme.textInverseColor,
                        border: `1px solid ${theme.colorPrimary}`,
                        borderRadius: `${theme.inputBorderRadius}px`
                      }}
                    >
                      Accent Button
                    </button>
                  </div>
                </div>

                {/* Inputs Preview */}
                <div className="mb-6">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: theme.textColor, fontFamily: theme.fontBase }}
                  >
                    Inputs
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Text input field"
                      className="w-full p-3 rounded"
                      style={{
                        backgroundColor: theme.inputBg,
                        color: theme.inputTextColor,
                        border: `1px solid ${theme.inputBorder}`,
                        borderRadius: `${theme.inputBorderRadius}px`
                      }}
                    />
                    <textarea
                      placeholder="Textarea field"
                      rows={3}
                      className="w-full p-3 rounded resize-none"
                      style={{
                        backgroundColor: theme.inputBg,
                        color: theme.inputTextColor,
                        border: `1px solid ${theme.inputBorder}`,
                        borderRadius: `${theme.inputBorderRadius}px`
                      }}
                    />
                  </div>
                </div>

                {/* Boolean Controls Preview */}
                <div className="mb-6">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: theme.textColor, fontFamily: theme.fontBase }}
                  >
                    Boolean Controls
                  </h3>
                  <div className="flex space-x-4">
                    <div
                      className="px-3 py-2 rounded text-sm"
                      style={{
                        backgroundColor: theme.booleanSelectedBg,
                        color: theme.textInverseColor,
                        borderRadius: `${theme.inputBorderRadius}px`
                      }}
                    >
                      Selected Toggle
                    </div>
                    <div
                      className="px-3 py-2 rounded text-sm"
                      style={{
                        backgroundColor: theme.booleanBg,
                        color: theme.textColor,
                        border: `1px solid ${theme.appBorderColor}`,
                        borderRadius: `${theme.inputBorderRadius}px`
                      }}
                    >
                      Unselected Toggle
                    </div>
                  </div>
                </div>

                {/* Code Preview */}
                <div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: theme.textColor, fontFamily: theme.fontBase }}
                  >
                    Code Block
                  </h3>
                  <div
                    className="p-4 rounded"
                    style={{
                      backgroundColor: theme.appPreviewBg,
                      borderRadius: `${theme.appBorderRadius}px`
                    }}
                  >
                    <pre
                      className="text-sm"
                      style={{
                        color: theme.textColor,
                        fontFamily: theme.fontCode
                      }}
                    >
{`// Your Storybook theme
const theme = {
  base: '${theme.base}',
  colorPrimary: '${theme.colorPrimary}',
  // ... more properties
};`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls Drawer - Sticky */}
        {isDrawerOpen && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('controls')}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'controls'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Controls (24)
              </button>
              <button
                onClick={() => setActiveTab('actions')}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'actions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Actions
              </button>
            </div>

            {/* Controls Content */}
            <div className="max-h-96 overflow-y-auto">
              {activeTab === 'controls' && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Base Theme */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Base Theme</h3>
                      <BaseSelector value={theme.base} onChange={switchBase} />
                    </div>

                    {/* Primary Colors */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Primary Colors</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">App Colors</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Typography</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Text Colors</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Navigation Bar</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Buttons</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Inputs</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Boolean Controls</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Border Radius</h3>
                      <div className="space-y-3">
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Grid</h3>
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
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Brand</h3>
                      <div className="space-y-3">
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
                </div>
              )}

              {activeTab === 'actions' && (
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={resetToDefault}
                        className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset to Default
                      </button>
                      <button
                        onClick={exportTheme}
                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export Theme
                      </button>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setShowCode(!showCode)}
                        className="flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        <Code className="w-4 h-4 mr-2" />
                        {showCode ? 'Hide' : 'Show'} Generated Code
                      </button>

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
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
