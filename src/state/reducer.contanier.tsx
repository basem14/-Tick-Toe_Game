import { combineReducers } from "redux";
import generalReducer from './general/reducer';

const reducerContanier = combineReducers({
    generalReducer
});

export default reducerContanier;