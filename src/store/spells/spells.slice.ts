import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSpells } from '../../services/api/dndApi';

export interface SpellsState {
  items: spell[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

interface spell {
  index: string;
  name: string;
  url: string;
}

export const thunkFetchSpells = createAsyncThunk(
  '@@spells/fetchSpells',
  async () => {
    return getSpells();
  }
);

const initialState: SpellsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const spellsSlice = createSlice({
  name: '@@spells',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkFetchSpells.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(thunkFetchSpells.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload.results;
    });
    builder.addCase(thunkFetchSpells.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const spellsReducer = spellsSlice.reducer;
