import { AuthTypes } from "../auth_types/auth_typelogin";
const initialState = {
    arr: []

};
export default function AdminReducer(state, action) {
    if (!state) {
        state = initialState;
        console.log("reducer")
    }
    switch (action.type) {
        case "DATA_REQUEST_SUCCESS": {
            state.arr = action.data
            return {
                ...state,
            }
        }
        case "DELETE_DATA_REQUEST": {
            state.arr = action.data
            return {
                ...state,
            }
        }
        case "sorteditems": {
            state.arr = action.payload
            console.log("acending sorting ac")
            return {
                ...state,
            }
        }
        case "descendingitems": {
            state.arr = action.payload
            console.log("descending order raraarar")
            return {
                ...state
            }
        }
        default:
            return state;
    }
}