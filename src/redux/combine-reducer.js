import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
const combineReducer = combineReducers({
    cart: cartReducer
})

export default combineReducer