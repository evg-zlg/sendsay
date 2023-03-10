import { DragEvent } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import './Canvas.scss';
import IconDrop from './IconDrop';

function Canvas() {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <Droppable droppableId="canvas">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="canvas">
          <div
            className={`canvas__invite ${snapshot.isDraggingOver ? 'canvas__invite--drop' : ''}`}
          >
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
