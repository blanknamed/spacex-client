import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    flexDirection: 'row',
  },
  background: {
    flexGrow: 1,
    background: theme.fn.linearGradient(
      90,
      theme.colors.dark[0],
      theme.colors.orange[1],
      theme.colors.orange[2],
      theme.colors.orange[3],
    ),
  },
  content: {
    display: 'flex',
    flex: '0 0 45%',
    justifyContent: 'center',
    alignContent: 'center',
  },
}));
