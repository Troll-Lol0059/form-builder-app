import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 1,
    editForm:false,
}

const formSlice= createSlice( {
    name:"formSlice",
    initialState,
    reducers:{
        setStep: (state,action) => {
            state.step = action.payload
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
} = formSlice.actions

export default formSlice.reducer;