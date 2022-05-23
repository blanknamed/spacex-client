import * as React from 'react';
import { Group, Navbar as MantineNavbar } from '@mantine/core';
import { Logout, SwitchHorizontal } from 'tabler-icons-react';
import { NavbarLink } from './components/NavbarLink';
import { mockdata } from '../../constants/links';

export const Navbar = () => {
  const [active, setActive] = React.useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <MantineNavbar
      width={{ base: 80 }}
      sx={{ height: '98vh' }}
    >
      <MantineNavbar.Section grow mt={50}>
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Group>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
