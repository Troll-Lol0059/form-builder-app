import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const inputSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.push(action.payload);
    },
    deleteInput: (state, action) => {
      return state.filter(input => input.id !== action.payload);
    },
    updateInput: (state, action) => {
      const { id, placeholder } = action.payload;
      const existingInput = state.find(input => input.id === id);
      if (existingInput) {
        existingInput.placeholder = placeholder;
      }
    }
  }
});

export const { addInput, deleteInput, updateInput } = inputSlice.actions;
export default inputSlice.reducer;
