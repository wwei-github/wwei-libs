import "../packages/components/index.css";
import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { initialize, mswDecorator } from 'msw-storybook-addon';
// Initialize MSW
initialize();
// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];


const queryClient = new QueryClient({
  // staleTime:Infinity,
  // cacheTime:Infinity,
  // refetchOnWindowFocus:false
})

addDecorator(stories=>(
  <QueryClientProvider client={queryClient}>{stories()}</QueryClientProvider>
))

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