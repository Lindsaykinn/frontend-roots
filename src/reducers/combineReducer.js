import { combineReducers } from "redux";
import { familiesReducer } from "./familiesReducer";

export const rootReducer = combineReducers({
  families: familiesReducer,
});