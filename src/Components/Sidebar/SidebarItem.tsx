import { ReactElement, CSSProperties } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { disableMoveItemSidebar } from '../../store/reducers/sidebarSlice';
import { TConstructorItem } from '../../types/types';

type SidebarItemProps = {
  constructorItem: TConstructorItem;
  children: ReactElement;
};

function SidebarItem({ constructorItem, children }: SidebarItemProps) {
  const dispatcher = useAppDispatch();

  function disableMoveThisItem() {
    dispatcher(disableMoveItemSidebar(constructorItem));
  }
 
  const styleSidebarItem: CSSProperties = {
    opacity: constructorItem.canMove ? 1 : 0.5,
    cursor: constructorItem.canMove ? 'move' : 'auto',
    pointerEvents: constructorItem.canMove ? 'auto' : 'none',
  };

  return (
    <div className="sidebar-item" style={styleSidebarItem}>
      {children}
    </div>
  );
}

export default SidebarItem;
