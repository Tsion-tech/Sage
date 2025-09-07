import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

// Fetch appointments
export const fetchAppointments = createAsyncThunk(
  'appointments/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/appointments');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Fetch messages for an appointment
export const fetchMessages = createAsyncThunk(
  'appointments/messages',
  async (appointmentId, { rejectWithValue }) => {
    try {
      const res = await api.get(`/appointments/${appointmentId}/messages`);
      return { appointmentId, messages: res.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Send message
export const sendMessage = createAsyncThunk(
  'appointments/sendMessage',
  async ({ appointmentId, message }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/appointments/${appointmentId}/messages`, { message });
      return { appointmentId, message: res.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Set reminder
export const setReminder = createAsyncThunk(
  'appointments/setReminder',
  async ({ appointmentId, reminder }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/appointments/${appointmentId}/reminder`, { reminder });
      return { appointmentId, reminder: res.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: { list: [], messages: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => { state.loading = true; })
      .addCase(fetchAppointments.fulfilled, (state, action) => { state.loading = false; state.list = action.payload; })
      .addCase(fetchAppointments.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages[action.payload.appointmentId] = action.payload.messages;
      })

      .addCase(sendMessage.fulfilled, (state, action) => {
        const { appointmentId, message } = action.payload;
        if (!state.messages[appointmentId]) state.messages[appointmentId] = [];
        state.messages[appointmentId].push(message);
      })

      .addCase(setReminder.fulfilled, (state, action) => {
        const { appointmentId, reminder } = action.payload;
        const appt = state.list.find(a => a.id === appointmentId);
        if (appt) appt.reminder = reminder;
      });
  },
});

export default appointmentsSlice.reducer;
