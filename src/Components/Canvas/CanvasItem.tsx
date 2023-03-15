import { useState, ReactElement, Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { removeItemFromCanvas, updateBottomItemInCavas } from '../../store/reducers/canvasSlice';
import { enebleItemInSidebar } from '../../store/reducers/sidebarSlice';

import { TConstructorItem } from '../../types/types';

type CanvasItemProps = {
  constructorItem: TConstructorItem;
  setLastOverItem: Dispatch<SetStateAction<TConstructorItem | null>>;
  children: ReactElement;
};

function CanvasItem({ constructorItem, setLastOverItem, children }: CanvasItemProps) {
  const dispatcher = useAppDispatch();
  const [showDnDZone, setShowDnDZone] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const draggable = constructorItem.type !== 'display';

  const handleReturnItem = () => {
    dispatcher(removeItemFromCanvas(constructorItem));
    dispatcher(enebleItemInSidebar(constructorItem));
  };

  useEffect(() => {
    console.log(itemRef.current?.offsetHeight);
    console.log(itemRef.current?.offsetTop);
    if (itemRef.current) {
      const offsetBottom = itemRef.current.offsetHeight + itemRef.current.offsetTop;
      dispatcher(
        updateBottomItemInCavas({
          constructorItem,
          offsetBottom,
        }),
      );
    }
  }, []);

  return (
    <div
      ref={itemRef}
      className="canvas-item"
      draggable={draggable}
      onDoubleClick={handleReturnItem}
      style={{ cursor: draggable ? 'move' : 'default' }}
    >
      <div className="canvas-item__wrapper-for-drop">{children}</div>
    </div>
  );
}

export default CanvasItem;
