import { Draggable, Droppable } from 'react-beautiful-dnd';
import './Sidebar.scss';

import SidebarItem from './SidebarItem';
import { constructorItems } from '../../const/const';

function Sidebar() {
  return (
    <Droppable droppableId="sidebar" isDropDisabled>
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef} className="sidebar">
          {constructorItems.map((item, index) => (
            <Draggable key={item} draggableId={item} index={index}>
              {(providedItem, snapshotItem) => (
                <>
                  <SidebarItem
                    provided={providedItem}
                    type={item}
                    style={null}
                  />
                  {/* {snapshotItem.isDragging && (
                    <SidebarItem
                      provided={null}
                      style={{ transform: 'none !important' }}
                      type={item}
                    />
                  )} */}
                </>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
    // <ul className="sidebar">
    //   {constructorItems.map((item, index) => (
    //     <SidebarItem key={item} index={index} type={item} />
    //   ))}
    // </ul>
  );
}

export default Sidebar;
