import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 1,
    editForm:false,
    formTitle:'Untitled',
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
} = formSlice.actions

export default formSlice.reducer;