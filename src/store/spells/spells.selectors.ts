import { RootState } from "../index";

export const selectSpellsStatus = (state: RootState) =>
  state.spellsReducer.status;

export const selectSpells = (state: RootState) => state.spellsReducer.items;
