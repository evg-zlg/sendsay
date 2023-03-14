import { useAppSelector } from '../../hooks/redux';
import Canvas from '../../Components/Canvas';
import Sidebar from '../../Components/Sidebar';
import Toggle from '../../Components/ui-kit/Toggle';
import './Constructor.scss';

function Constructor() {
  const { isConstructor } = useAppSelector((state) => state.constructorState);
  return (
    <main className="constructor">
      <header className="constructor__toggle">
        <Toggle />
      </header>
      <div className="constructor__container">
          <aside className="constructor__sidebar">{isConstructor && <Sidebar />}</aside>
          <div className="constructor__canvas">
            <Canvas />
          </div>
      </div>
    </main>
  );
}

export default Constructor;
