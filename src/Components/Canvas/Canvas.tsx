import { useDrop } from 'react-dnd/dist/hooks';
import { ItemType } from '../../const/const';
import './Canvas.scss';
import IconDrop from './IconDrop';
import ConstructorItem from '../ConstructorItem';

import { useAppSelector } from '../../hooks/redux';

function Canvas() {
  const { canvasItems } = useAppSelector((state) => state.canvasState);

  function handleDropItem() {
    console.log('drop');
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.SIDEBAR,
    drop: handleDropItem,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      
    }),
  }));

  return (
    <div className="canvas" ref={drop}>
      {canvasItems.length === 0 && (
        <div className={`canvas__invite ${isOver ? 'canvas__invite--isOver' : ''}`}>
          <IconDrop />
          <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
          <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
        </div>
      )}
      {canvasItems.length > 0 && canvasItems.map((item) => (
        <ConstructorItem key={item.type} constructorItem={item} />
      ))}
    </div>
  );
}

export default Canvas;
