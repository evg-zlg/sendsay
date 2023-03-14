import './ConstructorItem.scss';

import { operators, digits } from '../../const/const';
import CalcButton from '../ui-kit/CalcButton';
import Display from './Display';

import { TConstructorItem, TItem } from '../../types/types';

type ConstructorItemProps = {
  typeItem: TItem;
};

function ConstructorItem({ typeItem }: ConstructorItemProps) {
  return (
    <li className="constructor-item">
      {typeItem === 'display' && <Display value="0" />}
      {typeItem === 'operators' &&
        operators.map((operator) => (
          <CalcButton symbol={operator} type="operator" key={operator} />
        ))}
      {typeItem === 'digits' &&
        digits.map((digit) => <CalcButton symbol={digit} type="digit" key={digit} />)}
      {typeItem === 'equals' && <CalcButton symbol="=" type="equals" key="equals" />}
    </li>
  );
}

export default ConstructorItem;
