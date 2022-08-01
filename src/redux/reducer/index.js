import { combineReducers } from "redux";
import AdminReducer from "./loginreducer";
const Rootreducer = combineReducers({
    Auth: AdminReducer

})
export default Rootreducer;