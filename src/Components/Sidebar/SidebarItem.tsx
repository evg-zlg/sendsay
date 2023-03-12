import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd'
import { operators, digits, ItemType } from '../../const/const';
import CalcButton from '../ui-kit/CalcButton';
import Display from './Display';

type SidebarItemProps = {
  type: string;
};

function SidebarItem({ type }: SidebarItemProps) {
  const [canMove, setCanMove] = useState(true);
  const [ {isDragging}, dragRef] = useDrag(
    () => ({
      type: ItemType.SIDEBAR,
      item: { type },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          setCanMove(false);
        }
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      })
    }),
    []
  )
  return (
    <li
      className="sidebar-item"
      ref={dragRef}
      style={{
        opacity: canMove ? 1 : 0.5,
        cursor: canMove ? 'move' : 'auto',
        pointerEvents: canMove ? 'auto': 'none', 
      }}
    >
      {type === 'display' && <Display value="0" />}
      {type === 'operators' &&
        operators.map((operator) => (
          <CalcButton symbol={operator} type="operator" key={operator} />
        ))}
      {type === 'digits' &&
        digits.map((digit) => <CalcButton symbol={digit} type="digit" key={digit} />)}
      {type === 'equals' && <CalcButton symbol="=" type="equals" key="equals" />}
    </li>
  );
}

export default SidebarItem;
