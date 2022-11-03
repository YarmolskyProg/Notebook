import { combineReducers } from "redux";
import notesReducer from "./purchasesReducer";

export const rootReducer = combineReducers({
    notes: notesReducer
})
