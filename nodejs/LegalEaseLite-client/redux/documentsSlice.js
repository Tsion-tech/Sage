import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

// Fetch documents
export const fetchDocuments = createAsyncThunk(
  'documents/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/documents');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Upload document
export const uploadDocument = createAsyncThunk(
  'documents/upload',
  async ({ file, title }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        name: file.name,
        type: file.mimeType || 'application/octet-stream',
      });
      formData.append('title', title);

      const res = await api.post('/documents', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const documentsSlice = createSlice({
  name: 'documents',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => { state.loading = true; })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch documents';
      })

      .addCase(uploadDocument.pending, (state) => { state.loading = true; })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to upload document';
      });
  },
});

export default documentsSlice.reducer;
