import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getSpell} from '../../services/api/dndApi';


// Added common interface ApiCall(?)
export interface SpellState {
  item: any;
  status: string | null;
  error: string | null | undefined;
}

export const thunkFetchSpell = createAsyncThunk(
  'spells/fetchSpell',
  async (index: string | undefined) => {
    return getSpell(index)
  }
);

const initialState: SpellState = {
  item: null,
  status: null,
  error: null,
};

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunkFetchSpell.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(thunkFetchSpell.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.item = action.payload;
    });
    builder.addCase(thunkFetchSpell.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  }
});

export const spellReducer = spellSlice.reducer;