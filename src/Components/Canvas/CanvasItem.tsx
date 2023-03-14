import { useState, ReactElement, CSSProperties, useEffect, Dispatch, SetStateAction } from 'react';

import { TConstructorItem } from '../../types/types';

type CanvasItemProps = {
  constructorItem: TConstructorItem;
  setLastOverItem: Dispatch<SetStateAction<TConstructorItem | null>>;
  children: ReactElement;
};

function CanvasItem({ constructorItem, setLastOverItem, children }: CanvasItemProps) {
  const [showDnDZone, setShowDnDZone] = useState(false);
  const styleCanvasItem: CSSProperties = {
    cursor: ! (constructorItem.type === 'display') ? 'move' : 'auto',
    pointerEvents: ! (constructorItem.type === 'display') ? 'auto' : 'none',
  };

  return (
    <div className="canvas-item" style={styleCanvasItem}>
      <div className="canvas-item__wrapper-for-drop" >
        {children}
        {showDnDZone && <div className="anvas-item__dnd-zone" />}
      </div>
    </div>
  );
}

export default CanvasItem;
