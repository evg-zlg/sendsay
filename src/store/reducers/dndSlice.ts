import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorItem } from '../../types/types';

type initialStateProps = {
  dragItem: TConstructorItem | null;
};
const initialState: initialStateProps = {
  dragItem: null,
};

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    changeDragItem(state, actions: PayloadAction<TConstructorItem | null>) {
      state.dragItem = actions.payload;
    },
  },
});



export const { changeDragItem } = dndSlice.actions;

export const dndState = dndSlice.reducer;
