import { useEffect, useState } from 'react';
import { ItemType } from '../../const/const';
import './Canvas.scss';
import IconDrop from './IconDrop';
import ConstructorItem from '../ConstructorItem';
import { TConstructorItem } from '../../types/types';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { addItemInCanvas } from '../../store/reducers/canvasSlice';
import CanvasItem from './CanvasItem';

function Canvas() {
  const { canvasItems: canvasItemsFromStore } = useAppSelector((state) => state.canvasState);
  const dispatcher = useAppDispatch();
  const [lastOverItem, setLastOverItem] = useState<TConstructorItem | null>(null);
  const [showDnDZone, setShowDnDZone] = useState(false);

  const dropItemFromSidebar = (item: TConstructorItem) => {
    dispatcher(addItemInCanvas(item));
  };

  const dropItemFromCanvas = (item: TConstructorItem) => {
    // dispatcher
  };

  return (
    <div className="canvas" >
      {canvasItemsFromStore.length === 0 && (
        <div className={`canvas__invite  'canvas__invite--isOver' : ''}`}>
          <IconDrop />
          <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
          <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
        </div>
      )}
      {canvasItemsFromStore.length > 0 &&
        canvasItemsFromStore.map((item) => (
          <CanvasItem
            key={item.type}
            constructorItem={item}
            setLastOverItem={setLastOverItem}
          >
            <ConstructorItem typeItem={item.type} />
          </CanvasItem>
        ))}
    </div>
  );
}

export default Canvas;
