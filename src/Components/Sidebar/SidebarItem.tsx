import {ReactElement} from 'react';

type SidebarItemProps = {
  children: ReactElement | ReactElement[];
}

function SidebarItem({children}: SidebarItemProps) {
  return (
    <li className="sidebar-item">
      {children}
    </li>
  );
};

export default SidebarItem;