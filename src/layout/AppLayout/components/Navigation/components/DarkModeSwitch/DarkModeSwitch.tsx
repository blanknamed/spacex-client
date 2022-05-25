import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

export const DarkModeSwitch = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {
    colorScheme, toggleColorScheme,
  } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      sx={(theme) => ({
        borderRadius: theme.radius.md,
        height: 50,
        width: 50,
      })}
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
};
