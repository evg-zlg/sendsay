import { useDrag } from 'react-dnd'
import { operators, digits, ItemType } from '../../const/const';
import CalcButton from '../ui-kit/CalcButton';
import Display from './Display';

type SidebarItemProps = {
  type: string;
};

function SidebarItem({ type }: SidebarItemProps) {
  const [ {isDragging}, dragRef] = useDrag(
    () => ({
      type: ItemType.SIDEBAR,
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
        opacity: 1,
        cursor: 'move',
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
