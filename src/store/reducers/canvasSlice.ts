import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TItem } from '../../types/types';

type initialStateProps = {
  canvasItems: TItem[];
};
const initialState: initialStateProps = {
  canvasItems: [],
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addItemInCanvas(state, actions: PayloadAction<TItem>) {
      state.canvasItems.push(actions.payload);
    },
    updateItemsCanvas(state, actions: PayloadAction<{ item: TItem; position: number }>) {
      // state.canvasItems
    },
  },
});

export const { addItemInCanvas, updateItemsCanvas } = canvasSlice.actions;

export const canvasState = canvasSlice.reducer;
