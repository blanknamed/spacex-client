import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  active: {
    '&, &:hover': {
      backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                  : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },

  link: {
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
    alignItems: 'center',
    borderRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    display: 'flex',
    height: 50,
    justifyContent: 'center',

    width: 50,
  },
}));
