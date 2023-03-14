import { useDrop } from 'react-dnd/dist/hooks';
import { ItemType } from '../../const/const';
import './Canvas.scss';
import IconDrop from './IconDrop';
import ConstructorItem from '../ConstructorItem';
import { TConstructorItem } from '../../types/types';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { addItemInCanvas } from '../../store/reducers/canvasSlice';

function Canvas() {
  const { canvasItems: canvasItemsFromStore } = useAppSelector((state) => state.canvasState);
  const dispatcher = useAppDispatch();

  function handleDropItem(item: TConstructorItem) {
    dispatcher(addItemInCanvas(item));
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.SIDEBAR,
    drop: (item) => {
      handleDropItem(item as TConstructorItem)
    } ,
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
      {canvasItemsFromStore.length > 0 && canvasItemsFromStore.map((item) => (
        <ConstructorItem key={item.type} constructorItem={item} />
      ))}
    </div>
  );
}

export default Canvas;
