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
    updateItemsSidebar(state, action: PayloadAction<TConstructorItem[]>) {
      state.sidebarItems = action.payload;
    },
    disableMoveItemSidebar(state, action: PayloadAction<TConstructorItem>) {
      state.sidebarItems = state.sidebarItems.map((item) => {
        if (item.type === action.payload.type) {
          return {
            ...item,
            canMove: false,
          };
        }
        return item;
      });
    },
  },
});

export const { updateItemsSidebar, disableMoveItemSidebar } = sidebarSlice.actions;

export const sidebarState = sidebarSlice.reducer;
