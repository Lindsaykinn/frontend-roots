import { combineReducers } from "redux";
import { familiesReducer } from "./familiesReducer";
import { familyDetailReducer } from "./familyDetailReducer";

export const rootReducer = combineReducers({
  families: familiesReducer,
  family: familyDetailReducer
});