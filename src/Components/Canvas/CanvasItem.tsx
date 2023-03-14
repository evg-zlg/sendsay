import { useState, ReactElement, CSSProperties, useEffect, Dispatch, SetStateAction } from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd/dist/hooks';

import { ItemType } from '../../const/const';
import { TConstructorItem } from '../../types/types';

type CanvasItemProps = {
  constructorItem: TConstructorItem;
  setLastOverItem: Dispatch<SetStateAction<TConstructorItem | null>>;
  showDnDZone: boolean;
  children: ReactElement;
};

function CanvasItem({ constructorItem, setLastOverItem, children }: CanvasItemProps) {
  const [, dragRef] = useDrag(
    () => ({
      type: ItemType.CANVAS,
      item: constructorItem,

      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );
  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemType.SIDEBAR, ItemType.CANVAS],
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (isOver) {
      setLastOverItem(constructorItem);
    }
  }, [isOver]);

  const styleCanvasItem: CSSProperties = {
    cursor: ! (constructorItem.type === 'display') ? 'move' : 'auto',
    pointerEvents: ! (constructorItem.type === 'display') ? 'auto' : 'none',
  };

  return (
    <div className="canvas-item" ref={dragRef} style={styleCanvasItem}>
      <div className="canvas-item__wrapper-for-drop" ref={drop}>
        {children}
        {<div className="anvas-item__dnd-zone" />}
      </div>
    </div>
  );
}

export default CanvasItem;
