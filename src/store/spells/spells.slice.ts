import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSpells } from "../../services/api/dndApi";
import LoadingStatus from "../../types/LoadingStatus";

type SpellsItem = {
  index: string;
  name: string;
  url: string;
};

export interface SpellsState {
  items: SpellsItem[];
  status: LoadingStatus;
  error: string | null | undefined;
}

export const thunkFetchSpells = createAsyncThunk<{
  count: number;
  results: SpellsItem[];
}>("@@spells/fetchSpells", async () => {
  return await fetchSpells();
});

const initialState: SpellsState = {
  items: [],
  status: "idle",
  error: null,
};

export const spellsSlice = createSlice({
  name: "@@spells",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkFetchSpells.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(thunkFetchSpells.fulfilled, (state, action) => {
      state.items = action.payload.results;
      state.status = "succeeded";
    });
    builder.addCase(thunkFetchSpells.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const spellsReducer = spellsSlice.reducer;
