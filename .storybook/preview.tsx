import React from "react";

import type { Preview } from "@storybook/react";

import { ThemeProvider } from "../src/components/providers/ThemeProvider";

import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Story />
    </ThemeProvider>
  ),
];
