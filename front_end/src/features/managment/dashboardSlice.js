import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DASHBOARD_URL = "http://localhost:3030/posts";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(DASHBOARD_URL);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {entities: [], loading: 'idle', error: null };

const dashboardSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchDashboard.pending, (state) => {
        state.loading = 'loading';
    })

    .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
    })

    .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
    });
  },
});




export default dashboardSlice.reducer;
