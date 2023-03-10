import { DragDropContext } from 'react-beautiful-dnd';
import Canvas from '../../Components/Canvas';
import Sidebar from '../../Components/Sidebar';
import Toggle from '../../Components/ui-kit/Toggle';
import './Constructor.scss';

function Constructor() {

  const handleDragEnd = () => {
    console.log('drag end')
  };

  return (
    <main className="constructor">
      <header className="constructor__toggle">
        <Toggle />
      </header>
      <div className="constructor__container">
        <DragDropContext onDragEnd={handleDragEnd}>
          <aside className="constructor__sidebar">
            <Sidebar />
          </aside>
          <div className="constructor__canvas">
            <Canvas />
          </div>
        </DragDropContext>
      </div>
    </main>
  );
}

export default Constructor;
