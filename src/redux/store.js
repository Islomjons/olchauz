import { createStore } from "redux";
import combineReducer from "./combine-reducer";
const store = createStore(combineReducer)
export { store }