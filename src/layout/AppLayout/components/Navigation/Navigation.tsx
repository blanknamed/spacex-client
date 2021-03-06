import * as React from 'react';
import { Group, Navbar } from '@mantine/core';
import { Logout, SwitchHorizontal } from 'tabler-icons-react';
import { Routes } from 'router';
import { NavbarLink } from './components/NavbarLink';
import { DarkModeSwitch } from './components/DarkModeSwitch';
import { useStyles } from './styles';
import { appLinks } from '../../constants/links';

export const Navigation = () => {
  const [active, setActive] = React.useState(2);
  const { classes } = useStyles();

  const links = appLinks.map((link, index) => {
    const isLinkActive = index === active;

    return (
      <NavbarLink
        {...link}
        key={link.label}
        active={isLinkActive}
        onClick={() => setActive(index)}
      />
    );
  });

  return (
    <Navbar
      width={{
        base: 80,
      }}
      className={classes.navbar}
    >
      <Navbar.Section grow mt={50}>
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <DarkModeSwitch />
          <NavbarLink link={Routes.Login} icon={SwitchHorizontal} label="Change account" />
          <NavbarLink link="" icon={Logout} label="Logout" />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};
