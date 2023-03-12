import './Sidebar.scss';

import SidebarItem from './SidebarItem';
import { constructorItems } from '../../const/const';

function Sidebar() {
  return (
    <ul className="sidebar">
      {constructorItems.map((item) => (
        <SidebarItem key={item} type={item} />
      ))}
    </ul>
  );
}

export default Sidebar;
