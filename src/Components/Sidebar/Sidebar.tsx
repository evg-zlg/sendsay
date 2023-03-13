import './Sidebar.scss';

import { useAppSelector } from '../../hooks/redux';
import ConstructorItem from '../ConstructorItem';

function Sidebar() {
  const { sidebarItems } = useAppSelector((state) => state.sidebarState);
  return (
    <ul className="sidebar">
      {sidebarItems.map((item) => (
        <ConstructorItem key={item.type} constructorItem={item} />
      ))}
    </ul>
  );
}

export default Sidebar;
