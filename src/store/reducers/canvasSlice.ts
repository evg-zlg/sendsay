import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorItem } from '../../types/types';

type initialStateProps = {
  canvasItems: TConstructorItem[];
};
const initialState: initialStateProps = {
  canvasItems: [],
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addItemInCanvas(state, actions: PayloadAction<TConstructorItem>) {
      const canMove = ! (actions.payload.type === 'display');
      state.canvasItems.push({...actions.payload, currentSource: 'canvas', canMove});
    },
    updateItemsCanvas(state, actions: PayloadAction<{ item: TConstructorItem; position: number }>) {
      // state.canvasItems
    },
  },
});

export const { addItemInCanvas, updateItemsCanvas } = canvasSlice.actions;

export const canvasState = canvasSlice.reducer;
