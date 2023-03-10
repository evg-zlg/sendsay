import './Sidebar.scss';

import CalcButton from '../ui-kit/CalcButton';
import SidebarItem from './SidebarItem';
import Display from './Display';

function Sidebar() {
  const operators = ['/', 'x', '-', '+'];
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','];

  return (
    <ul className="sidebar">
      <SidebarItem>
        <Display value="0" />
      </SidebarItem>
      <SidebarItem>
        {operators.map((operator) => (
          <CalcButton key={operator} symbol={operator} type="operator" />
        ))}
      </SidebarItem>
      <SidebarItem>
        {digits.map((digit) => (
          <CalcButton key={digit} symbol={digit} type="digit" />
        ))}
      </SidebarItem>
      <SidebarItem>
        <CalcButton symbol="=" type="equals" />
      </SidebarItem>
    </ul>
  );
}

export default Sidebar;
