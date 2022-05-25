import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingTop: '20px',
  },
  layoutWrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    display: 'flex',
    flexDirection: 'row',
  },
}));
