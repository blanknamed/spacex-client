import * as React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import type { PropsWithChildren } from 'types/utils';

export const ThemeProvider = ({ children }:PropsWithChildren) => {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = React.useState(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
