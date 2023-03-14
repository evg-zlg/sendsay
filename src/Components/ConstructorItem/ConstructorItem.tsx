import './ConstructorItem.scss';

import { CSSProperties } from 'react';
import { operators, digits } from '../../const/const';
import CalcButton from '../ui-kit/CalcButton';
import Display from './Display';

import { TConstructorItem } from '../../types/types';

type ConstructorItemProps = {
  constructorItem: TConstructorItem;
};

function ConstructorItem({ constructorItem }: ConstructorItemProps) {

  const styleConstructorItem: CSSProperties = {
    opacity: constructorItem.canMove || constructorItem.currentSource === 'canvas' ? 1 : 0.5,
    cursor: constructorItem.canMove ? 'move' : 'auto',
    pointerEvents: constructorItem.canMove ? 'auto' : 'none',
    boxShadow:
      constructorItem.currentSource === 'sidebar'
        ? '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
        : 'none',
  };
  return (
    <li className="constructor-item" style={styleConstructorItem}>
      {constructorItem.type === 'display' && <Display value="0" />}
      {constructorItem.type === 'operators' &&
        operators.map((operator) => (
          <CalcButton symbol={operator} type="operator" key={operator} />
        ))}
      {constructorItem.type === 'digits' &&
        digits.map((digit) => <CalcButton symbol={digit} type="digit" key={digit} />)}
      {constructorItem.type === 'equals' && <CalcButton symbol="=" type="equals" key="equals" />}
    </li>
  );
}

export default ConstructorItem;
