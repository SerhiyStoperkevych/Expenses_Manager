import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expense: []
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expense.push(action.payload);
    },

    removeExpense: (state, action) => {
      state.expense = state.expense.filter((expense) => expense.id !== action.payload);
    },

    clearExpense: () => initialState
  }
});

export const { addExpense, removeExpense, clearExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
