// store/documentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  documents: [
    // Example document
    // { id: '1', title: 'Contract.pdf', description: 'Signed contract', date: '2025-09-02' }
  ],
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    addDocument: (state, action) => {
      const newDoc = { id: Date.now().toString(), ...action.payload };
      state.documents.push(newDoc);
    },
    updateDocument: (state, action) => {
      const { id, title, description, date } = action.payload;
      const index = state.documents.findIndex(doc => doc.id === id);
      if (index !== -1) {
        state.documents[index] = { ...state.documents[index], title, description, date };
      }
    },
    deleteDocument: (state, action) => {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
    },
  },
});

export const { addDocument, updateDocument, deleteDocument } = documentsSlice.actions;
export default documentsSlice.reducer;
