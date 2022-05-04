import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSpell } from '../../services/api/dndApi';

// Added common interface ApiCall(?)
export interface SpellState {
  item: any;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

export const thunkFetchSpell = createAsyncThunk(
  '@@spell/fetchSpell',
  async (index: string | undefined) => {
    return getSpell(index);
  }
);

const initialState: SpellState = {
  item: null,
  status: 'idle',
  error: null,
};

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkFetchSpell.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(thunkFetchSpell.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.item = action.payload;
    });
    builder.addCase(thunkFetchSpell.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const spellReducer = spellSlice.reducer;
