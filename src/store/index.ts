import { configureStore } from "@reduxjs/toolkit";
import { spellsReducer } from "./spells/spells.slice";
import { spellReducer } from "./spell/spell.slice";
import { classesReducer } from "./classes/classes.slice";
import { classReducer } from "./class/class.slice";

export const store = configureStore({
  reducer: {
    spellsReducer,
    spellReducer,
    classesReducer,
    classReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
