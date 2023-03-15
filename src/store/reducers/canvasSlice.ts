import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorItem } from '../../types/types';

type TCanvasItem = {
  constructorItem: TConstructorItem;
  offsetBottom: number;
};

type initialStateProps = {
  canvasItems: TCanvasItem[];
};
const initialState: initialStateProps = {
  canvasItems: [],
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addItemInCanvas(state, actions: PayloadAction<TConstructorItem>) {
      const canMove = actions.payload.type !== 'display';

      state.canvasItems.push({
        ...actions.payload,
        constructorItem: { ...actions.payload, canMove },
        offsetBottom: 0,
      });
    },

    removeItemFromCanvas(state, actions: PayloadAction<TConstructorItem>) {
      state.canvasItems = state.canvasItems.filter(
        (item) => item?.constructorItem.type !== actions.payload.type,
      );
    },

    updateBottomItemInCavas(state, actions: PayloadAction<TCanvasItem>) {
      state.canvasItems = state.canvasItems.map((item) => {
        if (item.constructorItem.type === actions.payload.constructorItem.type) {
          return {
            ...item,
            offsetBottom: actions.payload.offsetBottom,
          };
        }
        return item;
      });
    },

    updateItemsCanvas(state, actions: PayloadAction<{ item: TConstructorItem; position: number }>) {
      // state.canvasItems
    },
  },
});

export const { addItemInCanvas, updateItemsCanvas, removeItemFromCanvas, updateBottomItemInCavas } =
  canvasSlice.actions;

export const canvasState = canvasSlice.reducer;
