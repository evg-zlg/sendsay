import { ReactElement, CSSProperties, DragEvent } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { disableMoveItemSidebar } from '../../store/reducers/sidebarSlice';
import { changeDragItem } from '../../store/reducers/dndSlice';
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

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    dispatcher(changeDragItem(constructorItem));
  };

  const handleDragEnd = () => {
    dispatcher(changeDragItem(null));
  }

  return (
    <div
      className="sidebar-item"
      style={styleSidebarItem}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
    </div>
  );
}

export default SidebarItem;
