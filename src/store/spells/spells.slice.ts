import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getSpells} from '../../services/api/dndApi';

export interface SpellsState {
  items: spell[];
  status: string | null;
  error: string | null | undefined;
}

interface spell {
  index: string,
  name: string,
  url: string,
}

export const fetchSpells = createAsyncThunk(
  'spells/fetchSpells',
  getSpells
);

const initialState: SpellsState = {
  items: [],
  status: null,
  error: null,
};


export const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchSpells.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchSpells.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.items = action.payload.results
    });
    builder.addCase(fetchSpells.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });

  }
});

export const spellsReducer = spellsSlice.reducer;