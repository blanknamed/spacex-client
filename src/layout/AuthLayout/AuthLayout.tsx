import { Outlet } from 'react-router-dom';
import { useStyles } from './styles';

export const AuthLayout = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Outlet />
      </div>
      <div className={classes.background} />
    </div>
  );
};
