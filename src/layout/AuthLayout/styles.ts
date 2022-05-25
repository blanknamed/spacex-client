import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  //  Add gradient for dark mode
  background: {
    background: theme.fn.linearGradient(
      90,
      theme.white,
      theme.colors.orange[1],
      theme.colors.orange[2],
      theme.colors.orange[3],
    ),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    flexGrow: 1,
  },
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100%',
  },
  content: {
    alignContent: 'center',
    display: 'flex',
    flex: '0 0 45%',
    justifyContent: 'center',
  },
}));
