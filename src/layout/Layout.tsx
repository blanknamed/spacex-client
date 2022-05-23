import React from 'react';
import { Navbar } from './components/Navbar';
import { PropsWithChildren } from '../types/utils';
import { useStyles } from './styles';

export const Layout = ({ children }:PropsWithChildren) => {
  const { classes } = useStyles();

  return (
    <div className={classes.layoutContainer}>
      <Navbar />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};
