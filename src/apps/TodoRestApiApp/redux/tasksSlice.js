import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
