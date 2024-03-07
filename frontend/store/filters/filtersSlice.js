import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../pages/api/constants";

export const getFilters = createAsyncThunk(
  'filters/getfilters',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/filters`);
      return res.data;
    } catch(err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
);


const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    list: [],
    // filtered: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getFilters.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFilters.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });

    builder.addCase(getFilters.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default filtersSlice.reducer;