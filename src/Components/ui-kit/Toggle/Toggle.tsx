import { useState } from 'react';
import './Toggle.scss';
import IconEye from './IconEye';
import IconSelector from './IconSelector';

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
  const [runtimeMode, setRuntimeMode] = useState(false);

  const handleClickInput = () => {
    setRuntimeMode((prev) => !prev);
  };
  return (
    <div className="toggle">
      <input
        className="toggle__input"
        type="radio"
        name="toggle"
        id="toggle-runtime"
        onClick={handleClickInput}
        checked={runtimeMode}
      />
      <label
        className={`${ClassNameLabel.Default} ${ClassNameLabel.Runtime} ${
          runtimeMode ? ClassNameLabel.Active : ''
        }`}
        htmlFor="toggle-runtime"
      >
        <IconEye active={runtimeMode} />
        {InputLabel.Runtime}
      </label>

      <input
        className="toggle__input"
        type="radio"
        name="toggle"
        id="toggle-constructor"
        checked={!runtimeMode}
        onClick={handleClickInput}
      />
      <label
        className={`${ClassNameLabel.Default} ${ClassNameLabel.Constructor} ${
          runtimeMode ? '' : ClassNameLabel.Active
        }`}
        htmlFor="toggle-constructor"
      >
        <IconSelector active={!runtimeMode} />
        {InputLabel.Constructor}
      </label>
    </div>
  );
}

export default Toggle;
