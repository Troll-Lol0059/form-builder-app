// combines all reducers
import { combineReducers } from "@reduxjs/toolkit";

// required slices
import formSlice from '../slices/steps';


export const rootReducer = combineReducers({
    formSlice:formSlice,
})
