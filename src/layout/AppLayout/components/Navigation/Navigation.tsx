import * as React from 'react';
import { Group, Navbar } from '@mantine/core';
import { Logout, SwitchHorizontal } from 'tabler-icons-react';
import { NavbarLink } from './components/NavbarLink';
import { DarkModeSwitch } from './components/DarkModeSwitch';
import { appLinks } from '../../constants/links';

export const Navigation = () => {
  const [active, setActive] = React.useState(2);

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
      sx={{
        bottom: 0,
        height: '100vh',
        top: 0,
      }}
    >
      <Navbar.Section grow mt={50}>
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <DarkModeSwitch />
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};
