import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Navigation } from './components/Navigation';
import { useStyles } from './styles';

export const AppLayout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.layoutWrapper}>
      <Navigation />
      <Box className={classes.content}>
        <Outlet />
      </Box>
    </div>
  );
};
