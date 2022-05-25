import React from 'react';
import { Tooltip, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import type { NavbarLinkProps } from './types';

export const NavbarLink = ({
  icon: Icon, label, active, onClick, link,
}: NavbarLinkProps) => {
  const navigate = useNavigate();

  const {
    classes, cx,
  } = useStyles();
  const handleLinkClick = () => {
    navigate(link);

    if (onClick) {
      onClick();
    }
  };

  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton
        onClick={handleLinkClick}
        className={cx(classes.link, {
          [classes.active]: active,
        })}
      >
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
};
