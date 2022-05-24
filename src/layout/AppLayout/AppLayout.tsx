import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import { Navigation } from './components/Navigation';
import { useStyles } from './styles';

export const AppLayout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.layoutContainer}>
      <Navigation />
      <Container
        size="lg"
        className={classes.content}
      >
        <Outlet />
      </Container>
    </div>
  );
};
