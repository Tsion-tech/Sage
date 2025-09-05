import { configureStore, createSlice } from "@reduxjs/toolkit";

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: { userInfo: { email: "mizan@example.com" } },
  reducers: {},
});

// Documents Slice
const documentsSlice = createSlice({
  name: "documents",
  initialState: [],
  reducers: {},
});

// Appointments Slice
const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    documents: documentsSlice.reducer,
    appointments: appointmentsSlice.reducer,
  },
});
