import './Toggle.scss';
import IconEye from './IconEye';
import IconSelector from './IconSelector';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeConstructorMode } from '../../../store/reducers/constructorSlice';

enum InputLabel {
  Runtime = 'Runtime',
  Constructor = 'Constructor',
}

enum ClassNameLabel {
  Default = 'toggle__label',
  Runtime = 'toggle__label--runtime',
  Constructor = 'toggle__label--constructor',
  Active = 'toggle__label--active',
}

function Toggle() {
  const dispatcher = useAppDispatch();
  const { isConstructor } = useAppSelector((state) => state.constructorState);

  const handleClickInput = () => {
    dispatcher(changeConstructorMode( !isConstructor));
  };

  return (
    <div className="toggle">
      <input
        className="toggle__input"
        type="radio"
        name="toggle"
        id="toggle-runtime"
        onClick={handleClickInput}
        defaultChecked={!isConstructor}
      />
      <label
        className={`${ClassNameLabel.Default} ${ClassNameLabel.Runtime} ${
          !isConstructor ? ClassNameLabel.Active : ''
        }`}
        htmlFor="toggle-runtime"
      >
        <IconEye active={!isConstructor} />
        {InputLabel.Runtime}
      </label>

      <input
        className="toggle__input"
        type="radio"
        name="toggle"
        id="toggle-constructor"
        defaultChecked={isConstructor}
        onClick={handleClickInput}
      />
      <label
        className={`${ClassNameLabel.Default} ${ClassNameLabel.Constructor} ${
          !isConstructor ? '' : ClassNameLabel.Active
        }`}
        htmlFor="toggle-constructor"
      >
        <IconSelector active={isConstructor} />
        {InputLabel.Constructor}
      </label>
    </div>
  );
}

export default Toggle;
