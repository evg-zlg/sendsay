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
      const canMove = !(actions.payload.type === 'display');
      state.canvasItems.push({ ...actions.payload, currentSource: 'canvas', canMove });
    },
    removeItemFromCanvas(state, actions: PayloadAction<TConstructorItem>) {
      state.canvasItems = state.canvasItems.filter((item) => item.type !== actions.payload.type);
    },
    updateItemsCanvas(state, actions: PayloadAction<{ item: TConstructorItem; position: number }>) {
      // state.canvasItems
    },
  },
});

export const { addItemInCanvas, updateItemsCanvas, removeItemFromCanvas } = canvasSlice.actions;

export const canvasState = canvasSlice.reducer;
