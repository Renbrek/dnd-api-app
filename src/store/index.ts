import {configureStore} from '@reduxjs/toolkit';
import { spellsReducer } from './spells/spells.slice';


export const index = configureStore({
  reducer:{
    spellsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch