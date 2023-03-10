import { CSSProperties } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { operators, digits } from '../../const/const';
import CalcButton from '../ui-kit/CalcButton';
import Display from './Display';

type SidebarItemProps = {
  type: string;
  provided: DraggableProvided | null;
  // style: CSSProperties | null;
};

function SidebarItem({ type, provided }: SidebarItemProps) {
  return (
    <li
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      className="sidebar-item"
      // style={provided?.draggableProps.style}
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
