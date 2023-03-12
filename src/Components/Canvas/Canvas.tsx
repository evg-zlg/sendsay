import { useDrop } from 'react-dnd/dist/hooks';
import { ItemType } from '../../const/const';
import './Canvas.scss';
import IconDrop from './IconDrop';

function Canvas() {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemType.SIDEBAR,
      drop: () => console.log('drop'),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
  )

  return (
    <div className="canvas" ref={drop}>
      <div className={`canvas__invite ${isOver ? 'canvas__invite--isOver' : ''}`}>
        <IconDrop />
        <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
        <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
      </div>
    </div>
  );
}

export default Canvas;
