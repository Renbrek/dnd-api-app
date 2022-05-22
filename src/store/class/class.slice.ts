import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Class } from "../../types/Class";
import LoadingStatus from "../../types/LoadingStatus";
import { fetchClassByIndex } from "../../services/api/dndApi";

interface ClassState {
  class: Class
  status: LoadingStatus;
  error: string | null | undefined;
}

const initialState: ClassState = {
  class: {
    index: '',
    name: '',
    url: '',
    hitDie: 0,
    classLevels: '',
    multiClassing: {
      prerequisites: [],
      prerequisiteOptions: [],
      proficiencies: [],
      proficiencyChoices: [],
    },
    spellcasting: {
      level: 0,
      info: [],
      spellcastingAbility: {
        index: '',
        name: '',
        url: '',
      },
    },
    spells: '',
    startingEquipment: [],
    startingEquipmentOptions: [],
    proficiencyChoices: [],
    proficiencies: [],
    savingThrows: [],
    subclasses: [],
  },
  status: 'idle',
  error: null
}

export const thunkFetchClassByIndex = createAsyncThunk<Class, string | undefined>(
  '@@class/fetchClassByIndex',
  async (index) => {
    return await fetchClassByIndex(index)
  }
)

const classSlice = createSlice({
  name: '@@class',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunkFetchClassByIndex.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    })
    builder.addCase(thunkFetchClassByIndex.fulfilled, (state, action) => {
      state.class = action.payload;
      state.status = 'succeeded';
    })
    builder.addCase(thunkFetchClassByIndex.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export const classReducer = classSlice.reducer