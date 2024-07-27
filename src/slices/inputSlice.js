import { createSlice } from '@reduxjs/toolkit';

const storedData = localStorage.getItem('formData');
console.log(storedData);
const initialState = storedData ? JSON.parse(storedData) : [];

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
      const { id, title, placeholder, type } = action.payload;
      const existingInput = state.find(input => input.id === id);

      if (existingInput) {
        // Apply updates only for provided fields
        if (title !== undefined) existingInput.title = title;
        if (placeholder !== undefined) existingInput.placeholder = placeholder;
        if (type !== undefined) existingInput.type = type;
      }
    },
    resetInputs: () => initialState
  }
});

export const { addInput, deleteInput, updateInput,resetInputs } = inputSlice.actions;
export default inputSlice.reducer;

