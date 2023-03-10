import './CalcButton.scss';

type CalcButtonProps = {
  symbol: string;
  type: 'operator' | 'digit' | 'equals';
};

function CalcButton({ symbol, type }: CalcButtonProps) {
  let className = `calc-button calc-button--${type}`;
  if (symbol === '0') {
    className += ' calc-button--is-zero';
  }

  return (
    <button
      type="button"
      className={className}
    >
      {symbol}
    </button>
  );
}

export default CalcButton;
