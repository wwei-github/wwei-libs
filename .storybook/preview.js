import "../packages/components/index.css";
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'rgb(31 41 55)' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'rgb(94 234 212)' }
  }
}