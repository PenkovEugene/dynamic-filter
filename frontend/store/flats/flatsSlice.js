import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../pages/api/constants";

export const getFlats = createAsyncThunk(
  'flats/getFlats',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/flats`);
      return res.data;
    } catch(err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
);


const flatsSlice = createSlice({
  name: 'flats',
  initialState: {
    list: [],
    // filtered: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getFlats.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlats.fulfilled, (state, { payload }) => {
      state.list = payload.data;
      state.isLoading = false;
    });

    builder.addCase(getFlats.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default flatsSlice.reducer;