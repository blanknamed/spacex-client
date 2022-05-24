import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  background: {
    background: theme.fn.linearGradient(
      90,
      theme.colors.dark[0],
      theme.colors.orange[1],
      theme.colors.orange[2],
      theme.colors.orange[3],
    ),
    flexGrow: 1,
  },
  container: {
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
