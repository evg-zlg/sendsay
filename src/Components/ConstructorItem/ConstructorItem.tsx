import './ConstructorItem.scss';

import { useDrag } from 'react-dnd';
import { operators, digits, ItemType } from '../../const/const';
import CalcButton from '../ui-kit/CalcButton';
import Display from './Display';

import { useAppDispatch } from '../../hooks/redux';
import { disableMoveItemSidebar } from '../../store/reducers/sidebarSlice';
import { TConstructorItem } from '../../types/types';

type ConstructorItemProps = {
  constructorItem: TConstructorItem;
};

function ConstructorItem({ constructorItem }: ConstructorItemProps) {
  const dispatcher = useAppDispatch();

  function disableMoveThisItem() {
    dispatcher(disableMoveItemSidebar(constructorItem));
  }

  const [, dragRef] = useDrag(
    () => ({
      type: ItemType.SIDEBAR,
      item: constructorItem,
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          disableMoveThisItem();
        }
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );

  return (
    <li
      className="constructor-item"
      ref={dragRef}
      style={{
        opacity: constructorItem.canMove ? 1 : 0.5,
        cursor: constructorItem.canMove ? 'move' : 'auto',
        pointerEvents: constructorItem.canMove ? 'auto' : 'none',
      }}
    >
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
