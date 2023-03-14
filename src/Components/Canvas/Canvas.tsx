import { useDrop } from 'react-dnd/dist/hooks';
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

  const dropItemFromSidebar = (item: TConstructorItem) => {
    dispatcher(addItemInCanvas(item));
  };

  function dropItemFromCanvas(item: TConstructorItem) {
    // dispatcher
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemType.SIDEBAR, ItemType.CANVAS],

    canDrop: (item: TConstructorItem) => {
      if (item.type === 'display' && canvasItemsFromStore.length > 0) {
        return false;
      }
      return true;
    },
    drop: (item: TConstructorItem) => {
      if (item.currentSource === 'sidebar') {
        dropItemFromSidebar(item);
      } else {
        dropItemFromCanvas(item);
      }
    },
    hover: (item, monitor) => {
      // console.log(monitor.getClientOffset());
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="canvas" ref={drop}>
      {canvasItemsFromStore.length === 0 && (
        <div className={`canvas__invite ${isOver ? 'canvas__invite--isOver' : ''}`}>
          <IconDrop />
          <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
          <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
        </div>
      )}
      {canvasItemsFromStore.length > 0 &&
        canvasItemsFromStore.map((item) => (
          <CanvasItem key={item.type} constructorItem={item}>
            <ConstructorItem constructorItem={item} />
          </CanvasItem>
        ))}
    </div>
  );
}

export default Canvas;
