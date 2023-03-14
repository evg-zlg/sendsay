import { ReactElement, CSSProperties } from 'react';
import { useDrag } from 'react-dnd';
import { ItemType } from '../../const/const';
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
  const [, dragRef] = useDrag(
    () => ({
      type: ItemType.SIDEBAR,
      item: constructorItem,

      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          disableMoveThisItem();
        }
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );
  const styleSidebarItem: CSSProperties = {
    opacity: constructorItem.canMove ? 1 : 0.5,
    cursor: constructorItem.canMove ? 'move' : 'auto',
    pointerEvents: constructorItem.canMove ? 'auto' : 'none',
  };

  return (
    <div className="sidebar-item" ref={dragRef} style={styleSidebarItem}>
      {children}
    </div>
  );
}

export default SidebarItem;
