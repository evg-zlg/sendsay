import './CalcButton.scss';

type CalcButtonProps = {
  symbol: string;
  type: 'operator' | 'digit' | 'equals';
};

function CalcButton({ symbol, type }: CalcButtonProps) {
  return (
    <button type="button" className={`calc-button calc-button--${type}`}>
      {symbol}
    </button>
  );
}

export default CalcButton;
