import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchClasses } from "../../services/api/dndApi";
import LoadingStatus from "../../types/LoadingStatus";

type ClassesItem = {
  index: string;
  name: string;
  url: string;
};

interface ClassesState {
  items: ClassesItem[];
  status: LoadingStatus;
  error: string | null | undefined;
}

const initialState: ClassesState = {
  items: [],
  status: "idle",
  error: null,
};

export const thunkFetchClasses = createAsyncThunk<{
  count: number;
  results: ClassesItem[];
}>("@@classesSlice/fetchClasses", async () => {
  return await fetchClasses();
});

const classesSlice = createSlice({
  name: "@@classesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkFetchClasses.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(thunkFetchClasses.fulfilled, (state, action) => {
      state.items = action.payload.results;
      state.status = "succeeded";
    });
    builder.addCase(thunkFetchClasses.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const classesReducer = classesSlice.reducer;
