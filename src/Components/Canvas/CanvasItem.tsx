import { ReactElement } from 'react';
import { useDrag } from 'react-dnd';
import { ItemType } from '../../const/const';

import { TConstructorItem } from '../../types/types';

type CanvasItemProps = {
  constructorItem: TConstructorItem;
  children: ReactElement;
};

function CanvasItem({ constructorItem, children }: CanvasItemProps) {
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
  return (
    <div className="canvas-item" ref={dragRef}>
      <div className="canvas-item__wrapper-for-drop">{children}</div>
    </div>
  );
}

export default CanvasItem;
