import React from 'react';
import { Tooltip, UnstyledButton } from '@mantine/core';
import type { NavbarLinkProps } from './types';
import { useStyles } from './styles';

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
