import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateProps = {
  isConstructor: boolean;
};
const initialState: initialStateProps = {
  isConstructor: true,
};

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    changeConstructorMode(state, actions: PayloadAction<boolean>) {
      state.isConstructor = actions.payload;
    },
  },
});



export const { changeConstructorMode } = constructorSlice.actions;

export const constructorState = constructorSlice.reducer;
