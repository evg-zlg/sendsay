import './Canvas.scss';
import IconDrop from './IconDrop';

function Canvas() {
  return (
    <div className="canvas">
      <div className="canvas__invite">
        <IconDrop />
        <p className="canvas__text canvas__text--accent">Перетащите сюда</p>
        <p className="canvas__text">{`любой элемент \n из левой панели`}</p>
      </div>
    </div>
  );
}

export default Canvas;
