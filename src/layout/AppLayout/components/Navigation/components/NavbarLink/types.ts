import type { Icon as TablerIcon } from 'tabler-icons-react';

export interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  link: string;
  active?: boolean;
  onClick?: () => void;

}
