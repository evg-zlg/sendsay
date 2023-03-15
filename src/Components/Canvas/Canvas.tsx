import { DragEvent, useState } from 'react';
import './Canvas.scss';
import IconDrop from './IconDrop';
import ConstructorItem from '../ConstructorItem';
import { TConstructorItem } from '../../types/types';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { addItemInCanvas } from '../../store/reducers/canvasSlice';
import { disableMoveItemSidebar } from '../../store/reducers/sidebarSlice';
import CanvasItem from './CanvasItem';

function Canvas() {
  const { canvasItems: canvasItemsFromStore } = useAppSelector((state) => state.canvasState);
  const { dragItem: dragItemFromStore } = useAppSelector((state) => state.dndState);
  const dispatcher = useAppDispatch();
  const [lastOverItem, setLastOverItem] = useState<TConstructorItem | null>(null);
  const [showDnDZone, setShowDnDZone] = useState(false);

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowDnDZone(false);
  };
  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowDnDZone(true);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (dragItemFromStore) {
      dispatcher(addItemInCanvas(dragItemFromStore));
      dispatcher(disableMoveItemSidebar(dragItemFromStore));
    }
    e.preventDefault();
    setShowDnDZone(false);
  };
  return (
    <div
      className="canvas"
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {canvasItemsFromStore.length === 0 && (
        <div className={`canvas__invite ${showDnDZone ? 'canvas__invite--isOver' : ''}`}>
          <IconDrop />
          <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
          <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
        </div>
      )}
      {canvasItemsFromStore.length > 0 &&
        canvasItemsFromStore.map((item) => (
          <CanvasItem key={item.type} constructorItem={item} setLastOverItem={setLastOverItem}>
            <ConstructorItem typeItem={item.type} />
          </CanvasItem>
        ))}
    </div>
  );
}

export default Canvas;
