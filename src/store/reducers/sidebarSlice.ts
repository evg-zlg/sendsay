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
  },
});

export const { updateItemsSidebar } = sidebarSlice.actions;

export const sidebarState = sidebarSlice.reducer;
