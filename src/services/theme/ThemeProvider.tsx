import * as React from 'react';
import { ColorSchemeProvider, Global, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import type { ColorScheme } from '@mantine/core';
import type { PropsWithChildren } from 'types/utils';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['ctrl+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <Global styles={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      })}
      />
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: ['Plus Jakarta Sans', 'sans-serif'],

        }}
        withNormalizeCSS
      >

        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
