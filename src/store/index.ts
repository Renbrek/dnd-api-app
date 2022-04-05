import {configureStore} from '@reduxjs/toolkit';
import { spellReducer } from './spell/spell.slice';
import { spellsReducer } from './spells/spells.slice';


export const index = configureStore({
  reducer:{
    spellsReducer,
    spellReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch