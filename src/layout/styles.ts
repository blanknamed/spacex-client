import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  layoutContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    padding: theme.spacing.lg, flexGrow: 1,
  },
}));
