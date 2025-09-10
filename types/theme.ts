export interface StorybookTheme {
  base: 'light' | 'dark';
  colorPrimary: string;
  colorSecondary: string;
  appBg: string;
  appContentBg: string;
  appPreviewBg: string;
  appBorderColor: string;
  appBorderRadius: number;
  fontBase: string;
  fontCode: string;
  textColor: string;
  textInverseColor: string;
  textMutedColor: string;
  barTextColor: string;
  barHoverColor: string;
  barSelectedColor: string;
  barBg: string;
  buttonBg: string;
  buttonBorder: string;
  booleanBg: string;
  booleanSelectedBg: string;
  inputBg: string;
  inputBorder: string;
  inputTextColor: string;
  inputBorderRadius: number;
  brandTitle?: string;
  brandUrl?: string;
  brandImage?: string;
  brandTarget?: string;
  gridCellSize?: number;
}

export interface ThemePreset {
  name: string;
  theme: StorybookTheme;
}

export const defaultLightTheme: StorybookTheme = {
  base: 'light',
  colorPrimary: '#ff4785',
  colorSecondary: '#1ea7fd',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#f6f9fc',
  appBorderColor: '#e1e5e9',
  appBorderRadius: 4,
  fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif',
  fontCode: '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraMono-Regular", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
  textColor: '#333333',
  textInverseColor: '#ffffff',
  textMutedColor: '#666666',
  barTextColor: '#999999',
  barHoverColor: '#1ea7fd',
  barSelectedColor: '#1ea7fd',
  barBg: '#f6f9fc',
  buttonBg: '#ffffff',
  buttonBorder: '#e1e5e9',
  booleanBg: '#ffffff',
  booleanSelectedBg: '#1ea7fd',
  inputBg: '#ffffff',
  inputBorder: '#e1e5e9',
  inputTextColor: '#333333',
  inputBorderRadius: 4,
  brandTitle: 'Storybook',
  brandUrl: 'https://storybook.js.org/',
  brandTarget: '_self',
  gridCellSize: 10,
};

export const defaultDarkTheme: StorybookTheme = {
  base: 'dark',
  colorPrimary: '#ff4785',
  colorSecondary: '#1ea7fd',
  appBg: '#2f2f2f',
  appContentBg: '#2f2f2f',
  appPreviewBg: '#1a1a1a',
  appBorderColor: '#3a3a3a',
  appBorderRadius: 4,
  fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif',
  fontCode: '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraMono-Regular", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
  textColor: '#ffffff',
  textInverseColor: '#333333',
  textMutedColor: '#999999',
  barTextColor: '#999999',
  barHoverColor: '#1ea7fd',
  barSelectedColor: '#1ea7fd',
  barBg: '#1a1a1a',
  buttonBg: '#2f2f2f',
  buttonBorder: '#3a3a3a',
  booleanBg: '#2f2f2f',
  booleanSelectedBg: '#1ea7fd',
  inputBg: '#2f2f2f',
  inputBorder: '#3a3a3a',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,
  brandTitle: 'Storybook',
  brandUrl: 'https://storybook.js.org/',
  brandTarget: '_self',
  gridCellSize: 10,
};
