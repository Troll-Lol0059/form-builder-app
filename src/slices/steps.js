import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: JSON.parse(localStorage.getItem('step')) || 1,
    editForm: JSON.parse(localStorage.getItem('editForm')) || false,
    formData:null,
    formTitle: localStorage.getItem('title') || 'Untitled',
}

const formSlice= createSlice( {
    name:"formSlice",
    initialState,
    reducers:{
        setStep: (state,action) => {
            state.step = action.payload
        },
        setFormHeading:(state,action) => {
            state.formTitle = action.payload
        },
        setEditForm: (state,action) => {
            state.editForm = action.payload
        },
        setFormData:(state,action) => {
            state.formData = action.payload
        },
        resetQuoteState: (state) => {
            state.step = 1
            state.editForm = false
        },
    }
} )

export const {
    setStep,
    setEditForm,
    setFormHeading,
    setFormData,
} = formSlice.actions

export default formSlice.reducer;