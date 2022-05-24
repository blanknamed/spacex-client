import React from 'react';
import { Tooltip, UnstyledButton } from '@mantine/core';
import { useStyles } from './styles';
import type { NavbarLinkProps } from './types';

export const NavbarLink = ({
  icon: Icon, label, active, onClick,
}: NavbarLinkProps) => {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
};
