import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import appointmentsReducer from './appointmentsSlice';
import documentsReducer from './documentsSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    appointments: appointmentsReducer,
    documents: documentsReducer,
    theme: themeReducer,
  },
});

export default store;
