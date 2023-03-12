import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { canvasState } from './reducers/canvasSlice';
import { constructorState } from './reducers/constructorSlice';


export const rootReducer = combineReducers({
  'constructorMode': constructorState,
  'canvasState': canvasState,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export { store };
