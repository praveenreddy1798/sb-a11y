import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { theme } from '../src/theme';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'blue', value: '#2cc5d2' },
      { name: 'white', value: '#fff' },
    ],
  },
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
  mswDecorator,
];
