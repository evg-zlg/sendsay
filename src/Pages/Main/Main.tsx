import CalcButton from '../../Components/ui-kit/CalcButton';
import Toggle from '../../Components/ui-kit/Toggle';
import './Main.scss';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <aside className="sidebar">
          <CalcButton symbol="7" type="digit" />
          <CalcButton symbol="+" type="operator" />
          <CalcButton symbol="=" type="equals" />
        </aside>
        <div className="canvas">
          canvas
          <Toggle />
        </div>
      </div>
    </main>
  );
}

export default Main;
