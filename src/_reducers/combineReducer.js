import { combineReducers } from "redux";
import { familiesReducer } from "./familiesReducer";
import { peopleReducer } from './peopleReducer'

export const rootReducer = combineReducers({
  families: familiesReducer, 
  people: peopleReducer
});