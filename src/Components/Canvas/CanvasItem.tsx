import { useState, ReactElement, Dispatch, SetStateAction } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { removeItemFromCanvas } from '../../store/reducers/canvasSlice';
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

  const draggable = constructorItem.type !== 'display';
  
  const handleReturnItem = () => {
    dispatcher(removeItemFromCanvas(constructorItem));
    dispatcher(enebleItemInSidebar(constructorItem));
  }

  return (
    <div
      className="canvas-item"
      draggable={draggable}
      onDoubleClick={handleReturnItem}
      style={{ cursor: draggable ? 'move' : 'default' }}
    >
      <div className="canvas-item__wrapper-for-drop">
        {children}
        {showDnDZone && <div className="anvas-item__dnd-zone" />}
      </div>
    </div>
  );
}

export default CanvasItem;
