import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialItemsSidebar } from '../../const/const';
import { TConstructorItem } from '../../types/types';

type initialStateProps = {
  sidebarItems: TConstructorItem[];
};
const initialState: initialStateProps = {
  sidebarItems: initialItemsSidebar,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    updateItemsSidebar(state, actions: PayloadAction<TConstructorItem[]>) {
      state.sidebarItems = actions.payload;
    },
    disableMoveItemSidebar(state, actions: PayloadAction<TConstructorItem>) {
      state.sidebarItems = state.sidebarItems.map((item) => {
        if (item.type === actions.payload.type) {
          return {
            ...item,
            canMove: false,
          };
        }
        return item;
      });
    },
    enebleItemInSidebar(state, actions: PayloadAction<TConstructorItem>) {
      state.sidebarItems = state.sidebarItems.map((item) => {
        if (item.type === actions.payload.type) {
          return {
            ...item,
            canMove: true,
          };
        }
        return item;
      });
    },
  },
});

export const { updateItemsSidebar, disableMoveItemSidebar, enebleItemInSidebar } =
  sidebarSlice.actions;

export const sidebarState = sidebarSlice.reducer;
