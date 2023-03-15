import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { canvasState } from './reducers/canvasSlice';
import { constructorState } from './reducers/constructorSlice';
import { sidebarState } from './reducers/sidebarSlice';
import { dndState } from './reducers/dndSlice';


export const rootReducer = combineReducers({
  constructorState,
  sidebarState,
  canvasState,
  dndState,
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
