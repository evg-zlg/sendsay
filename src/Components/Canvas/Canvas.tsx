import { Droppable } from 'react-beautiful-dnd';
import './Canvas.scss';
import IconDrop from './IconDrop';

function Canvas() {
  return (
    <Droppable droppableId="canvas">
      {(provided) => (
        <div 
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="canvas"
        >
          <div className="canvas__invite">
            <IconDrop />
            <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
            <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Canvas;
