const initialState = {
    state1: false,
    state2: false,
    state3: false,
    state4: false,

};
export default function AuthReducer(state = initialState, action = null) {
    if (!state) {
        state = initialState;
    }
    switch (action.type) {
        case "First_SUCCESS": {
            console.log("hello reducer1");
            return ({
                ...state,
                state1: true
            });
        }
        case "Secound_SUCCESS": {
            console.log("hello reducer2");
            return ({
                ...state,
                state2: true
            });
        }
        case "Third_SUCCESS": {
            console.log("hello reducer3");
            return ({
                ...state,
                state3: true
            });
        }
        case "Fourth_SUCCESS": {
            console.log("hello reducer4");
            return ({
                ...state,
                state4: true
            });
        }

        default:
            return state;
    }
}