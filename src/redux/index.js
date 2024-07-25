// combines all reducers
import { combineReducers } from "@reduxjs/toolkit";

// required slices
import formSlice from '../slices/steps';
import inputSlice from "../slices/inputSlice";


export const rootReducer = combineReducers({
    formSlice:formSlice,
    inputs: inputSlice,
})
