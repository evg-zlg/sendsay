import './Sidebar.scss';

import { useAppSelector } from '../../hooks/redux';
import ConstructorItem from '../ConstructorItem';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const { sidebarItems } = useAppSelector((state) => state.sidebarState);
  return (
    <ul className="sidebar">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.type} constructorItem={item}>
          <ConstructorItem typeItem={item.type} />
        </SidebarItem>
      ))}
    </ul>
  );
}

export default Sidebar;
