import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSpellByIndex } from "../../services/api/dndApi";
import Spell from "../../types/Spell";
import LoadingStatus from "../../types/LoadingStatus";

// Added common interface ApiCall(?)
export interface SpellState {
  item: Spell | null;
  status: LoadingStatus;
  error: string | null | undefined;
}

export const thunkFetchSpellByIndex = createAsyncThunk<Spell, string | undefined>(
  "@@spell/fetchSpellByIndex",
  async (index) => {
    return await fetchSpellByIndex(index);
  }
);

const initialState: SpellState = {
  item: null,
  status: "idle",
  error: null,
};

export const spellSlice = createSlice({
  name: "@@spell",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkFetchSpellByIndex.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(thunkFetchSpellByIndex.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(thunkFetchSpellByIndex.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const spellReducer = spellSlice.reducer;
